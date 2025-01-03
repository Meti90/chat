<?php
header('Content-Type: application/json');
$input = json_decode(file_get_contents('php://input'), true);
if (isset($input['text'])) {
    $pdo = new PDO('mysql:host=localhost;dbname=messenger', 'root', '');
    $stmt = $pdo->prepare("INSERT INTO messages (sender, text) VALUES ('user', ?)");
    $stmt->execute([$input['text']]);
    echo json_encode(['status' => 'success']);
} else {
    echo json_encode(['status' => 'error']);
}
?>
