<?php
session_start();
$email = $_POST['email'];
$password = $_POST['password'];
$md5_password = md5($password);

try {
    // подключаемся к серверу
    $conn = new PDO("mysql:host=0.0.0.0;port=3606;dbname=db", "root", "1QAZxsw2345");
    echo "Database connection established";
}
catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}

?>

