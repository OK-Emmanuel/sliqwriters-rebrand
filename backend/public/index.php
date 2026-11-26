<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function respond(int $status, array $data): never {
    http_response_code($status);
    echo json_encode($data, JSON_THROW_ON_ERROR | JSON_UNESCAPED_UNICODE);
    exit;
}

$key = getenv('SLIQ_API_KEY') ?: '';
if (strlen($key) < 32) {
    error_log('SliQ API: missing API key configuration');
    respond(503, ['message' => 'The service is not configured.']);
}
if (!hash_equals('Bearer ' . $key, $_SERVER['HTTP_AUTHORIZATION'] ?? '')) {
    respond(401, ['message' => 'Unauthorized.']);
}

$method = $_SERVER['REQUEST_METHOD'];
$action = $_GET['action'] ?? '';
if (!in_array($method, ['GET', 'POST'], true)) respond(405, ['message' => 'Method not allowed.']);
if (!is_string($action) || !in_array($action, ['posts', 'post', 'view', 'inquiry', 'sitemap'], true)) respond(404, ['message' => 'Endpoint not found.']);
if (in_array($action, ['inquiry', 'view'], true) !== ($method === 'POST')) respond(405, ['message' => 'Method not allowed.']);

try {
    $config = getenv('SLIQ_DATABASE_CONFIG') ?: '';
    if ($config === '' || !is_file($config)) throw new RuntimeException('Database configuration is missing');
    require_once $config;
    $db = new PDO(
        'mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=' . DB_CHARSET,
        DB_USER, DB_PASS,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC, PDO::ATTR_EMULATE_PREPARES => false]
    );
    $published = "p.status = 'published' AND (p.published_at IS NULL OR p.published_at <= NOW())";
    $columns = "p.id, p.title, p.slug, p.excerpt, p.featured_image, p.views, p.published_at, p.updated_at, c.name AS category_name, c.slug AS category_slug";

    if ($action === 'view') {
        $slug = $_GET['slug'] ?? '';
        if (!is_string($slug) || !preg_match('/^[a-z0-9-]{1,255}$/i', $slug)) respond(404, ['message' => 'Post not found']);
        $update = $db->prepare("UPDATE posts p SET p.views = p.views + 1, p.updated_at = p.updated_at WHERE p.slug = ? AND $published");
        $update->execute([$slug]);
        if ($update->rowCount() === 0) respond(404, ['message' => 'Post not found']);
        $query = $db->prepare("SELECT p.views FROM posts p WHERE p.slug = ? AND $published LIMIT 1");
        $query->execute([$slug]);
        respond(200, ['views' => (int)$query->fetchColumn()]);
    }

    if ($action === 'sitemap') {
        $posts = $db->query("SELECT p.slug, p.updated_at FROM posts p WHERE $published ORDER BY p.id")->fetchAll();
        respond(200, ['posts' => $posts]);
    }

    if ($action === 'posts') {
        $page = filter_var($_GET['page'] ?? 1, FILTER_VALIDATE_INT, ['options' => ['min_range' => 1, 'max_range' => 100000]]);
        if ($page === false) respond(422, ['message' => 'Invalid page number.']);
        $filters = [];
        $values = [];
        $invalid = false;
        foreach (['category' => 'categories', 'tag' => 'tags'] as $name => $table) {
            $slug = $_GET[$name] ?? '';
            if ($slug === '') continue;
            if (!is_string($slug) || !preg_match('/^[a-z0-9-]{1,200}$/i', $slug)) { $invalid = true; continue; }
            $query = $db->prepare("SELECT id FROM $table WHERE slug = ? LIMIT 1");
            $query->execute([$slug]);
            $id = $query->fetchColumn();
            if (!$id) { $invalid = true; continue; }
            $filters[] = $name === 'category' ? 'p.category_id = ?' : 'EXISTS (SELECT 1 FROM post_tags pt WHERE pt.post_id = p.id AND pt.tag_id = ?)';
            $values[] = (int)$id;
        }
        if ($invalid) { $filters = []; $values = []; }
        $where = $published . ($filters ? ' AND ' . implode(' AND ', $filters) : '');
        $count = $db->prepare("SELECT COUNT(*) FROM posts p WHERE $where");
        $count->execute($values);
        $total = (int)$count->fetchColumn();
        $pages = max(1, (int)ceil($total / 6));
        $page = min($page, $pages);
        $offset = ($page - 1) * 6;
        $query = $db->prepare("SELECT $columns FROM posts p LEFT JOIN categories c ON c.id = p.category_id WHERE $where ORDER BY COALESCE(p.published_at, p.updated_at) DESC, p.id DESC LIMIT 6 OFFSET $offset");
        $query->execute($values);
        $categories = $db->query("SELECT c.name, c.slug FROM categories c WHERE EXISTS (SELECT 1 FROM posts p WHERE p.category_id = c.id AND $published) ORDER BY c.name")->fetchAll();
        respond(200, ['posts' => $query->fetchAll(), 'total' => $total, 'page' => $page, 'pages' => $pages, 'invalid_filter' => $invalid, 'categories' => $categories]);
    }

    if ($action === 'post') {
        $slug = $_GET['slug'] ?? '';
        if (!is_string($slug) || !preg_match('/^[a-z0-9-]{1,255}$/i', $slug)) respond(404, ['message' => 'Post not found']);
        $query = $db->prepare("SELECT $columns, p.content, p.meta_title, p.meta_description, COALESCE(u.full_name, 'SliQWriters') AS author_name FROM posts p LEFT JOIN categories c ON c.id = p.category_id LEFT JOIN users u ON u.id = p.author_id WHERE p.slug = ? AND $published LIMIT 1");
        $query->execute([$slug]);
        $post = $query->fetch();
        if (!$post) {
            $redirect = $db->prepare("SELECT p.slug FROM post_slug_redirects r INNER JOIN posts p ON p.id = r.post_id WHERE r.old_slug = ? AND $published LIMIT 1");
            $redirect->execute([$slug]);
            $current = $redirect->fetchColumn();
            if ($current && $current !== $slug) respond(200, ['redirect' => $current]);
            respond(404, ['message' => 'Post not found']);
        }
        $tags = $db->prepare('SELECT t.name, t.slug FROM tags t JOIN post_tags pt ON pt.tag_id = t.id WHERE pt.post_id = ? ORDER BY t.name');
        $tags->execute([$post['id']]);
        $post['tags'] = $tags->fetchAll();
        respond(200, ['post' => $post]);
    }

    $raw = file_get_contents('php://input', false, null, 0, 24577);
    if ($raw === false || strlen($raw) > 24576) respond(413, ['message' => 'Request is too large.']);
    try { $input = json_decode($raw, true, 32, JSON_THROW_ON_ERROR); }
    catch (JsonException $error) { respond(400, ['message' => 'Invalid JSON.']); }
    if (!is_array($input)) respond(422, ['message' => 'Invalid form data.']);
    $kind = $input['kind'] ?? '';
    if (!in_array($kind, ['contact', 'newsletter'], true)) respond(422, ['message' => 'Invalid form type.']);
    foreach (['name' => 120, 'email' => 254, 'phone' => 40, 'message' => 10000, 'website' => 200, 'client_hash' => 64] as $field => $max) {
        $value = $input[$field] ?? '';
        if (!is_string($value) || mb_strlen($value) > $max) respond(422, ['message' => 'Invalid form data.']);
        $input[$field] = trim($value);
    }
    if ($input['website'] !== '') respond(422, ['message' => 'Please leave the website field empty.']);
    if ($input['name'] === '' || !filter_var($input['email'], FILTER_VALIDATE_EMAIL) || !preg_match('/^[a-f0-9]{64}$/', $input['client_hash'])) respond(422, ['message' => 'Please provide a valid name and email.']);
    if ($kind === 'contact' && ($input['phone'] === '' || mb_strlen($input['message']) < 10)) respond(422, ['message' => 'Please provide your phone number and a message of at least 10 characters.']);

    $db->beginTransaction();
    $window = (int)(floor(time() / 3600) * 3600);
    $rate = $db->prepare('INSERT INTO rebrand_rate_limits (client_hash, window_start, attempts) VALUES (?, ?, 1) ON DUPLICATE KEY UPDATE attempts = attempts + 1');
    $rate->execute([$input['client_hash'], $window]);
    $rate = $db->prepare('SELECT attempts FROM rebrand_rate_limits WHERE client_hash = ? AND window_start = ? FOR UPDATE');
    $rate->execute([$input['client_hash'], $window]);
    if ((int)$rate->fetchColumn() > 5) {
        $db->rollBack();
        header('Retry-After: ' . ($window + 3600 - time()));
        respond(429, ['message' => 'Too many requests. Please try again in an hour or email hello@sliqwriters.com.']);
    }
    if ($kind === 'contact') {
        $insert = $db->prepare('INSERT INTO rebrand_inquiries (name, email, phone, message) VALUES (?, ?, ?, ?)');
        $insert->execute([$input['name'], $input['email'], $input['phone'], $input['message']]);
    } else {
        $insert = $db->prepare('INSERT INTO rebrand_subscribers (name, email) VALUES (?, ?) ON DUPLICATE KEY UPDATE name = VALUES(name)');
        $insert->execute([$input['name'], strtolower($input['email'])]);
    }
    $db->prepare('DELETE FROM rebrand_rate_limits WHERE window_start < ?')->execute([$window - 86400]);
    $db->commit();
    respond(201, ['message' => $kind === 'contact' ? 'Message received. Thank you.' : 'Subscription saved. Thank you.']);
} catch (PDOException $error) {
    if (isset($db) && $db->inTransaction()) $db->rollBack();
    error_log('SliQ API database failure; SQLSTATE=' . $error->getCode());
    respond(503, ['message' => 'The service is temporarily unavailable. Please email hello@sliqwriters.com.']);
} catch (RuntimeException $error) {
    error_log('SliQ API configuration failure');
    respond(503, ['message' => 'The service is not configured. Please email hello@sliqwriters.com.']);
}
