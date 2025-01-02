<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "your-email@example.com";  // Add your email here
    $subject = "New Contact Us Message";
    $body = "Message from: $email\n\n$message";

    if(mail($to, $subject, $body)) {
        echo "Message sent successfully.";
    } else {
        echo "Failed to send message.";
    }
}
?>
