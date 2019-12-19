<?php

$to  = 'tikondra47@gmail.com' . ', ';
$to .= 'makarovt_t@mail.ru';
$subject = 'Заказ обратного звонка';
if (isset($_POST['solo']))     $message  = "Одностворчатое: {$_POST['solo']}\r\n";
if (isset($_POST['double']))   $message .= "Двухстворчатое: {$_POST['double']}\r\n";
if (isset($_POST['triple']))   $message .= "Трехстворчатое: {$_POST['triple']}\r\n";
if (isset($_POST['balcony']))  $message .= "Балконный блок: {$_POST['balcony']}\r\n";
if (isset($_POST['material'])) $message .= "Материал: {$_POST['material']}\r\n";
if (isset($_POST['profile']))  $message .= "Профиль: {$_POST['profile']}\r\n";
if (isset($_POST['glass']))    $message .= "Стеклопакет: {$_POST['glass']}\r\n";
if (isset($_POST['color']))    $message .= "Цвет: {$_POST['color']}\r\n";
if (isset($_POST['wood']))     $message .= "Порода дерева: {$_POST['wood']}\r\n";
if (isset($_POST['wood-profile'])) $message .= "Профиль: {$_POST['wood-profile']}\r\n";
if (isset($_POST['al-profile'])) $message .= "Профиль: {$_POST['al-profile']}\r\n";
if (isset($_POST['al-color'])) $message .= "Цвет: {$_POST['al-color']}\r\n";
if (isset($_POST['otliv']))    $message .= "Отлив: {$_POST['otliv']}\r\n";
if (isset($_POST['otkos']))    $message .= "Откос: {$_POST['otkos']}\r\n";
if (isset($_POST['setka']))    $message .= "Сетка: {$_POST['setka']}\r\n";
if (isset($_POST['podokonik'])) $message .= "Подоконник: {$_POST['podokonik']}\r\n";
if (isset($_POST['montage']))   $message .= "Монтаж: {$_POST['montage']}\r\n";
if (isset($_POST['size'])) $message .= "Размер: {$_POST['size']}\r\n";
if (isset($_POST['communication'])) $message .= "Способ связи: {$_POST['communication']}\r\n";
if (isset($_POST['tel'])) $message .= "Мобильный: {$_POST['tel']}\r\n";
if (isset($_POST['whats'])) $message .= "Whatsap: {$_POST['whats']}\r\n";
if (isset($_POST['vk'])) $message .= "ВКонтакте: {$_POST['vk']}\r\n";
if (isset($_POST['inst'])) $message .= "Способ связи: {$_POST['inst']}\r\n";
if (isset($_POST['name'])) $message .= "Имя: {$_POST['name']}\r\n";
if (isset($_POST['phone'])) $message .= "Телефон: {$_POST['phone']}\r\n";


$headers = 'Content-type: text/plain; charset=utf-8'; // установливаем кодировку


if( mail($to, $subject, $message, $headers) ){
 echo '<p style="color: green;">Сообщение отправлено</p>';
}else{
 echo '<p style="color: red;">error</p>';
}
