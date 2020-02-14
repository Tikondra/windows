<?php

if ((isset($_POST['solo'])) && (strlen(trim($_POST['solo'])) > 0) && ($_POST['solo'] != 'undefined')) {
  $solo = stripslashes(strip_tags($_POST['solo']));
  $message  = "Одностворчатое: да<br>";
}
if ((isset($_POST['double'])) && (strlen(trim($_POST['double'])) > 0) && ($_POST['double'] != 'undefined')) {
  $double = stripslashes(strip_tags($_POST['double']));
  $message  .= "Двустворчатое: да<br>";
}
if ((isset($_POST['triple'])) && (strlen(trim($_POST['triple'])) > 0) && ($_POST['triple'] != 'undefined')) {
  $triple = stripslashes(strip_tags($_POST['triple']));
  $message  .= "Трехстворчатое: да<br>";
}
if ((isset($_POST['tripleWithTwoStvorki'])) && (strlen(trim($_POST['tripleWithTwoStvorki'])) > 0) && ($_POST['tripleWithTwoStvorki'] != 'undefined')) {
  $tripleWithTwoStvorki = stripslashes(strip_tags($_POST['tripleWithTwoStvorki']));
  $message  .= "Трехстворчатое с открывающимися створками: да<br>";
}
if ((isset($_POST['four'])) && (strlen(trim($_POST['four'])) > 0) && ($_POST['four'] != 'undefined')) {
  $four = stripslashes(strip_tags($_POST['four']));
  $message  .= "Четырехстворчатое: да<br>";
}
if ((isset($_POST['balcony'])) && (strlen(trim($_POST['balcony'])) > 0) && ($_POST['balcony'] != 'undefined')) {
  $balcony = stripslashes(strip_tags($_POST['balcony']));
  $message  .= "Балконный блок: да<br>";
}
if ((isset($_POST['balconyWithStvorki'])) && (strlen(trim($_POST['balconyWithStvorki'])) > 0) && ($_POST['balconyWithStvorki'] != 'undefined')) {
  $balconyWithStvorki = stripslashes(strip_tags($_POST['balconyWithStvorki']));
  $message  .= "Балконный блок с открывающимися створками: да<br>";
}

$message  .= "-----------------------------------------<br>";

if ((isset($_POST['material'])) && (strlen(trim($_POST['material'])) > 0) && ($_POST['material'] != 'undefined')) {
  $material = stripslashes(strip_tags($_POST['material']));
  $message  .= "Материал окна: {$_POST['material']}<br>";
}
if ((isset($_POST['profile'])) && (strlen(trim($_POST['profile'])) > 0) && ($_POST['profile'] != 'undefined')) {
  $profile = stripslashes(strip_tags($_POST['profile']));
  $message  .= "Профильная система: {$_POST['profile']}<br>";
}
if ((isset($_POST['glass'])) && (strlen(trim($_POST['glass'])) > 0) && ($_POST['glass'] != 'undefined')) {
  $glass = stripslashes(strip_tags($_POST['glass']));
  $message  .= "Стеклопакет: {$_POST['glass']}<br>";
}
if ((isset($_POST['color'])) && (strlen(trim($_POST['color'])) > 0) && ($_POST['color'] != 'undefined')) {
  $color = stripslashes(strip_tags($_POST['color']));
  $message  .= "Цвет: {$_POST['color']}<br>";
}
if ((isset($_POST['wood'])) && (strlen(trim($_POST['wood'])) > 0) && ($_POST['wood'] != 'undefined')) {
  $wood = stripslashes(strip_tags($_POST['wood']));
  $message  .= "Порода дерева: {$_POST['wood']}<br>";
}
if ((isset($_POST['woodProfile'])) && (strlen(trim($_POST['woodProfile'])) > 0) && ($_POST['woodProfile'] != 'undefined')) {
  $woodProfile = stripslashes(strip_tags($_POST['woodProfile']));
  $message  .= "Профильная система деревянного окна: {$_POST['woodProfile']}<br>";
}
if ((isset($_POST['alProfile'])) && (strlen(trim($_POST['alProfile'])) > 0) && ($_POST['alProfile'] != 'undefined')) {
  $alProfile = stripslashes(strip_tags($_POST['alProfile']));
  $message  .= "Профильная система алюминиевого окна: {$_POST['alProfile']}<br>";
}
if ((isset($_POST['alColor'])) && (strlen(trim($_POST['alColor'])) > 0) && ($_POST['alColor'] != 'undefined')) {
  $alColor = stripslashes(strip_tags($_POST['alColor']));
  $message  .= "Цвет алюминиевого окна: {$_POST['alColor']}<br>";
}

$message  .= "-----------------------------------------<br>";


if ((isset($_POST['otliv'])) && (strlen(trim($_POST['otliv'])) > 0) && ($_POST['otliv'] != 'undefined')) {
  $message  .= "Отлив: да<br>";
}
if ((isset($_POST['otkos'])) && (strlen(trim($_POST['otkos'])) > 0) && ($_POST['otkos'] != 'undefined')) {
  $message  .= "Откос: да<br>";
}
if ((isset($_POST['setka'])) && (strlen(trim($_POST['setka'])) > 0) && ($_POST['setka'] != 'undefined')) {
  $message  .= "Сетка: да<br>";
}
if ((isset($_POST['podokonik'])) && (strlen(trim($_POST['podokonik'])) > 0) && ($_POST['podokonik'] != 'undefined')) {
  $message  .= "Подоконник: да<br>";
}

if ((isset($_POST['montage'])) && (strlen(trim($_POST['montage'])) > 0) && ($_POST['montage'] != 'undefined')) {
  $montage = stripslashes(strip_tags($_POST['montage']));
  $message  .= "Монтаж: {$_POST['montage']}<br>";
}
if ((isset($_POST['size'])) && (strlen(trim($_POST['size'])) > 0) && ($_POST['size'] != 'undefined')) {
  $size = stripslashes(strip_tags($_POST['size']));
  $message  .= "Размеры: {$_POST['size']}<br>";
}

$message  .= "-----------------------------------------<br>";

if ((isset($_POST['communication'])) && (strlen(trim($_POST['communication'])) > 0) && ($_POST['communication'] != 'undefined')) {
  $communication = stripslashes(strip_tags($_POST['communication']));
  $message  .= "Способ связи: {$_POST['communication']}<br>";
}
if ((isset($_POST['tel'])) && (strlen(trim($_POST['tel'])) > 0) && ($_POST['tel'] != 'undefined')) {
  $tel = stripslashes(strip_tags($_POST['tel']));
  $message  .= "Телефон: {$_POST['tel']}<br>";
}
if ((isset($_POST['whats'])) && (strlen(trim($_POST['whats'])) > 0) && ($_POST['whats'] != 'undefined')) {
  $whats = stripslashes(strip_tags($_POST['whats']));
  $message  .= "Вотсап: {$_POST['whats']}<br>";
}
if ((isset($_POST['vk'])) && (strlen(trim($_POST['vk'])) > 0) && ($_POST['vk'] != 'undefined')) {
  $vk = stripslashes(strip_tags($_POST['vk']));
  $message  .= "Вк: {$_POST['vk']}<br>";
}
if ((isset($_POST['inst'])) && (strlen(trim($_POST['inst'])) > 0) && ($_POST['inst'] != 'undefined')) {
  $inst = stripslashes(strip_tags($_POST['inst']));
  $message  .= "Инстаграм: {$_POST['inst']}<br>";
}
ob_start();


  $to      = 'okna@panorama30.ru, sm@panorama30.ru, m1@panorama30.ru, m2@panorama30.ru, makarovt_t@mail.ru';//
  $subject = 'Заявка на расчет стоимости окна с сайта Панорама';
  $valid = false;
  $headers = 'From: info@bzcekh.ru' . "\r\n" .
      'Reply-To: info@bzcekh.ru' . "\r\n" .
      'Content-type: text/html' . "\r\n" .
      'X-Mailer: PHP/' . phpversion();

  $valid = true;
  $message = $message;
  mail($to, $subject, $message, $headers);
  exit;

?>
