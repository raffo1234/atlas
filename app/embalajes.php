<?php
header('Content-Type: application/json');

$data = array();
$data[0] = array('imageSrc' => 'images/embalaje-1.jpg', 'imageAlt' => 'Image title');
$data[1] = array('imageSrc' => 'images/embalaje-2.jpg', 'imageAlt' => 'Image title');
$data[2] = array('imageSrc' => 'images/embalaje-3.jpg', 'imageAlt' => 'Image title');
$data[3] = array('imageSrc' => 'images/embalaje-4.jpg', 'imageAlt' => 'Image title');
$data[4] = array('imageSrc' => 'images/embalaje-5.jpg', 'imageAlt' => 'Image title');
$data[5] = array('imageSrc' => 'images/embalaje-6.jpg', 'imageAlt' => 'Image title');
$data[6] = array('imageSrc' => 'images/embalaje-7.jpg', 'imageAlt' => 'Image title');
$data[7] = array('imageSrc' => 'images/embalaje-8.jpg', 'imageAlt' => 'Image title');
$data[8] = array('imageSrc' => 'images/embalaje-1.jpg', 'imageAlt' => 'Image title');
$data[9] = array('imageSrc' => 'images/embalaje-2.jpg', 'imageAlt' => 'Image title');
$data[10] = array('imageSrc' => 'images/embalaje-3.jpg', 'imageAlt' => 'Image title');
$data[11] = array('imageSrc' => 'images/embalaje-4.jpg', 'imageAlt' => 'Image title');
$data[12] = array('imageSrc' => 'images/embalaje-5.jpg', 'imageAlt' => 'Image title');
$data[13] = array('imageSrc' => 'images/embalaje-6.jpg', 'imageAlt' => 'Image title');
$data[14] = array('imageSrc' => 'images/embalaje-7.jpg', 'imageAlt' => 'Image title');
$data[15] = array('imageSrc' => 'images/embalaje-8.jpg', 'imageAlt' => 'Image title');

echo json_encode($data);

?>
