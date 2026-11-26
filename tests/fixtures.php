<?php
declare(strict_types=1);
if (PHP_SAPI !== 'cli' || getenv('SLIQ_TEST_DATABASE') !== '1') exit(1);
require getenv('SLIQ_DATABASE_CONFIG');
$db = new PDO('mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=' . DB_CHARSET, DB_USER, DB_PASS, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]);
$run = $argv[2] ?? '';
if (!preg_match('/^rebrand-test-[a-f0-9]{16}$/', $run)) exit(1);
$email = $run . '@example.invalid';
if ($argv[1] === 'seed') {
    $author = $db->query('SELECT id FROM users ORDER BY id LIMIT 1')->fetchColumn();
    $insert = $db->prepare('INSERT INTO posts (title, slug, content, author_id, status, published_at) VALUES (?, ?, ?, ?, ?, ?)');
    foreach ([
        ['published', 'published', date('Y-m-d H:i:s', time() - 86400)],
        ['draft', 'draft', date('Y-m-d H:i:s', time() - 86400)],
        ['future', 'published', date('Y-m-d H:i:s', time() + 86400)],
    ] as [$suffix, $status, $date]) {
        $insert->execute([$run, $run . '-' . $suffix, '<p>Preserved article text.</p><script>alert("x")</script><img src="javascript:alert(1)" onerror="alert(1)">', $author ?: null, $status, $date]);
        if ($suffix === 'published') {
            $redirect = $db->prepare('INSERT INTO post_slug_redirects (post_id, old_slug, new_slug) VALUES (?, ?, ?)');
            $redirect->execute([$db->lastInsertId(), $run . '-old', $run . '-published']);
        }
    }
    echo "Fixtures created.\n";
} elseif ($argv[1] === 'verify') {
    $query = $db->prepare('SELECT COUNT(*) FROM rebrand_inquiries WHERE email = ?');
    $query->execute([$email]);
    $contact = (int)$query->fetchColumn();
    $query = $db->prepare('SELECT COUNT(*) FROM rebrand_subscribers WHERE email = ?');
    $query->execute([$email]);
    echo json_encode(['contacts' => $contact, 'subscribers' => (int)$query->fetchColumn()]);
} elseif ($argv[1] === 'clean') {
    $db->beginTransaction();
    $db->prepare('DELETE FROM post_slug_redirects WHERE old_slug = ?')->execute([$run . '-old']);
    foreach (['published', 'draft', 'future'] as $suffix) $db->prepare('DELETE FROM posts WHERE slug = ?')->execute([$run . '-' . $suffix]);
    $db->prepare('DELETE FROM rebrand_inquiries WHERE email = ?')->execute([$email]);
    $db->prepare('DELETE FROM rebrand_subscribers WHERE email = ?')->execute([$email]);
    $hash = hash_hmac('sha256', $run, getenv('SLIQ_API_KEY'));
    $db->prepare('DELETE FROM rebrand_rate_limits WHERE client_hash = ?')->execute([$hash]);
    $db->commit();
    echo "Exact test fixtures removed.\n";
}
