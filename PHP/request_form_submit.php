<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name     = htmlspecialchars($_POST["name"]);
    $email    = htmlspecialchars($_POST["email"]);
    $phone    = htmlspecialchars($_POST["phone"]);
    $services = htmlspecialchars($_POST["services"]);
    $message  = htmlspecialchars($_POST["message"]);

    $to = "shailesh.ssglobalservices@gmail.com"; // Replace with your email
    $subject = "New Service Request from Website";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nService: $services\nMessage: $message";
    $headers = "From: shailesh.ssglobalservices@gmail.com";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["status" => "success", "message" => "Thank you! We will contact you shortly."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to send your request. Try again later."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}
?>
