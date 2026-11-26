<?php
declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;

if (PHP_SAPI !== 'cli') { http_response_code(404); exit; }
$config = getenv('SLIQ_DATABASE_CONFIG');
if (!$config || !is_file($config)) { fwrite(STDERR, "Set SLIQ_DATABASE_CONFIG.\n"); exit(1); }
require_once $config;
$root = dirname(dirname($config));
try {
    $db = new PDO('mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=' . DB_CHARSET, DB_USER, DB_PASS, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]);
    if (in_array('--dry-run', $argv, true)) {
        echo $db->query('SELECT COUNT(*) FROM rebrand_inquiries WHERE notified_at IS NULL')->fetchColumn() . " pending contact notifications.\n";
        exit;
    }
    $mailConfig = $root . '/includes/mail_credentials.php';
    if (!is_file($mailConfig)) { fwrite(STDERR, "Existing mail configuration not found.\n"); exit(1); }
    require_once $mailConfig;
    foreach (['Exception', 'PHPMailer', 'SMTP'] as $class) {
        require_once $root . '/includes/vendor/phpmailer/phpmailer/src/' . $class . '.php';
    }
    if ((int)$db->query("SELECT GET_LOCK('sliq_rebrand_contact_notifications', 0)")->fetchColumn() !== 1) {
        fwrite(STDERR, "Another notification worker is running.\n");
        exit(1);
    }
    try {
        $messages = $db->query('SELECT id, name, email, phone, message FROM rebrand_inquiries WHERE notified_at IS NULL ORDER BY id LIMIT 20')->fetchAll();
        foreach ($messages as $message) {
            $mail = new PHPMailer(true);
            $mail->isSMTP();
            $mail->SMTPDebug = 0;
            $mail->SMTPAuth = true;
            $mail->SMTPSecure = SMTP;
            $mail->Port = SMTP_PORT;
            $mail->Host = SMTP_SERVER;
            $mail->Username = SMTP_USER;
            $mail->Password = PASS;
            $mail->Timeout = 20;
            $mail->setFrom(SMTP_USER, SMTP_NAME);
            $mail->addAddress(ADMIN_EMAIL);
            $mail->addReplyTo($message['email'], $message['name']);
            $mail->Subject = 'Website project inquiry #' . $message['id'];
            $mail->Body = "Name: " . $message['name'] . "\nEmail: " . $message['email'] . "\nPhone: " . $message['phone'] . "\n\n" . $message['message'];
            $mail->send();
            $db->prepare('UPDATE rebrand_inquiries SET notified_at = NOW() WHERE id = ?')->execute([$message['id']]);
        }
        echo count($messages) . " contact notifications sent.\n";
    } finally {
        $db->query("SELECT RELEASE_LOCK('sliq_rebrand_contact_notifications')");
    }
} catch (PDOException $error) {
    fwrite(STDERR, "Notification database operation failed. Saved inquiries remain available.\n");
    exit(1);
} catch (\PHPMailer\PHPMailer\Exception $error) {
    fwrite(STDERR, "SMTP delivery failed. The unsent inquiry will be retried on the next run.\n");
    exit(1);
}
