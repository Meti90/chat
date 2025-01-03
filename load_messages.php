<?php
header('Content-Type: application/json');
$pdo = new PDO('mysql:host=localhost;dbname=messenger', 'root', '');
$stmt = $pdo->query("SELECT * FROM messages ORDER BY id ASC");
$messages = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($messages);
?>
