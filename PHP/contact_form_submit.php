<?php
// Set response type to JSON
header('Content-Type: application/json');

// Check if the request is POST
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    echo json_encode(["status" => "error", "message" => "Invalid request method"]);
    exit;
}

// Get form values and clean them
$name     = trim($_POST["cf-name"] ?? '');
$email    = trim($_POST["cf-email"] ?? '');
$phone    = trim($_POST["cf-phone"] ?? '');
$country  = trim($_POST["cf-country"] ?? '');
$city     = trim($_POST["cf-city"] ?? '');
$message  = trim($_POST["cf-message"] ?? '');

// Validate required fields
if (empty($name) || empty($email) || empty($phone) || empty($country) || empty($city) || empty($message)) {
    echo json_encode(["status" => "error", "message" => "Please fill in all required fields."]);
    exit;
}

// Optional: Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["status" => "error", "message" => "Invalid email format."]);
    exit;
}

// Prepare email message (optional - for email notifications)
$subject = "New Contact Form Submission";
$body  = "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Phone: $phone\n";
$body .= "Country: $country\n";
$body .= "City: $city\n";
$body .= "Message:\n$message\n";

// Optional: Send email (you can enable it later)
/*
$to = "your@email.com";
$headers = "From: no-reply@yourdomain.com\r\n";
$headers .= "Reply-To: $email\r\n";

if (!mail($to, $subject, $body, $headers)) {
    echo json_encode(["status" => "error", "message" => "Failed to send email."]);
    exit;
}
*/

// Respond with success
echo json_encode(["status" => "success", "message" => "Thank you! Your message has been submitted."]);
exit;
?>
