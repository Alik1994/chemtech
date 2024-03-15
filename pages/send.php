<?php

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['cellphone'];
$text = $_POST['question'];

$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$phone = htmlspecialchars($phone);
$text = htmlspecialchars($text);

$name = urldecode($name);
$email = urldecode($email);
$phone = urldecode($phone);
$text = urldecode($text);

$name = trim($name);
$email = trim($email);
$phone = trim($phone);
$text = trim($text);


if (mail("albert_lavr@mail.ru", "Заявка с сайта", "Имя: $name \n Email: $email \n Телефон: $phone \n Сообщение: $text")) {
  echo "Сообщение успешно отправлено";
} else {
  echo "При отправке сообщения возникли ошибки";
}
?>