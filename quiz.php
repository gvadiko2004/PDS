<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "your-email@example.com"; // Замените на ваш email
    $subject = "Quiz Submission";

    // Сбор данных из формы
    $designType = $_POST['design_type'] ?? '';
    $package = $_POST['package'] ?? '';
    $rooms = $_POST['rooms'] ?? '';
    $consultationFormat = $_POST['consultation_format'] ?? '';
    $userName = $_POST['user_name'] ?? '';
    $phoneNumber = $_POST['phone_number'] ?? '';
    $comment = $_POST['comment'] ?? '';

    // Формирование тела письма
    $message = "Design Type: $designType\n";
    $message .= "Package: $package\n";
    $message .= "Rooms: $rooms\n";
    $message .= "Consultation Format: $consultationFormat\n";
    $message .= "Name: $userName\n";
    $message .= "Phone: $phoneNumber\n";
    $message .= "Comment: $comment\n";

    // Заголовки
    $headers = "From: no-reply@example.com";

    // Отправка письма
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for your submission! We will contact you soon.";
    } else {
        echo "There was an error submitting your form.";
    }
}
?>
