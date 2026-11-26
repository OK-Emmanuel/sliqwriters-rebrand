<?php
declare(strict_types=1);
if (PHP_SAPI !== 'cli') { http_response_code(404); exit; }
$config = getenv('SLIQ_DATABASE_CONFIG');
if (!$config || !is_file($config)) { fwrite(STDERR, "Set SLIQ_DATABASE_CONFIG to the existing database.php file.\n"); exit(1); }
require_once $config;
try {
    $db = new PDO('mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=' . DB_CHARSET, DB_USER, DB_PASS, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
    $db->exec(file_get_contents(__DIR__ . '/schema.sql'));
    if (!$db->query("SHOW COLUMNS FROM rebrand_inquiries LIKE 'notified_at'")->fetch()) {
        $db->exec('ALTER TABLE rebrand_inquiries ADD notified_at DATETIME NULL');
    }
    echo "Rebrand form tables ready. Existing blog and admin tables unchanged.\n";
} catch (PDOException $error) {
    fwrite(STDERR, 'Migration failed; SQLSTATE=' . $error->getCode() . PHP_EOL);
    exit(1);
}
