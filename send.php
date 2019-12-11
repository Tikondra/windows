<?php

if(isset($_POST['submit'])){
$to = "tikondra47@gmail.com";; // Здесь нужно написать e-mail, куда будут приходить письма
$from = $_POST['communication']; // this is the sender's Email address
$first_name = $_POST['first_name'];
$subject = "Форма отправки сообщений с сайта";
$subject2 = "Copy of your form submission";
$message = " оставил сообщение:";
$message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

$headers = "From:" . $from;
$headers2 = "From:" . $to;

mail($to,$subject,$message,$headers);

echo "Сообщение отправлено. Спасибо Вам, мы скоро свяжемся с Вами.";

}

?>
