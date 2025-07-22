<?php
// DB Connection
$conn = new mysqli("localhost", "root", "", "your_database_name");
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);

if (!$email) {
  echo "Invalid email address.";
  exit;
}

// Save to DB
$stmt = $conn->prepare("INSERT INTO newsletter_emails (email) VALUES (?)");
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->close();

// Send Email
$to = "youradmin@example.com";
$subject = "New Newsletter Signup";
$headers = "From: no-reply@yourdomain.com\r\nContent-Type: text/plain";
$message = "New subscriber email: $email";

mail($to, $subject, $message, $headers);

echo "Thank you for subscribing!";
?>
