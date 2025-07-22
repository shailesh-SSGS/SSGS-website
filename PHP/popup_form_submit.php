<?php
// DB Connection
$conn = new mysqli("localhost", "root", "", "your_database_name");
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Validate & sanitize inputs
$name     = htmlspecialchars(trim($_POST['name'] ?? ''));
$phone    = htmlspecialchars(trim($_POST['phone'] ?? ''));
$email    = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL);
$country  = htmlspecialchars(trim($_POST['country'] ?? ''));
$service  = htmlspecialchars(trim($_POST['service'] ?? ''));
$message  = htmlspecialchars(trim($_POST['message'] ?? ''));

if (!$email || empty($name) || empty($phone)) {
  echo "Please fill all required fields with valid information.";
  exit;
}

// Save to DB
$stmt = $conn->prepare("INSERT INTO popup_submissions (name, phone, email, country, service, message) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssss", $name, $phone, $email, $country, $service, $message);
$stmt->execute();
$stmt->close();

// Send Email
$to = "youradmin@example.com";
$subject = "New Popup Form Submission";
$headers = "From: no-reply@yourdomain.com\r\nContent-Type: text/plain";
$body = "New contact via popup form:\n\n"
      . "Name: $name\n"
      . "Phone: $phone\n"
      . "Email: $email\n"
      . "Country: $country\n"
      . "Service: $service\n"
      . "Message: $message";

mail($to, $subject, $body, $headers);

// Final success message
echo "Thank you for contacting us!";
?>
