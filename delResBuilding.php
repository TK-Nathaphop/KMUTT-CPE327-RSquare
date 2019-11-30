<?php

$rawpost = file_get_contents('php://input');
$json_txt = str_replace("\\", "", $rawpost);
// echo $json_txt;
$json = json_decode($json_txt);
require_once ('class/databaseConnection.php');
$con = new databaseConnection();
$con->connect();
$placeId = $json->place;
$userId = $json->id;
$sql = "UPDATE `place` SET `user_id`= NULL WHERE `place_id` = '".$placeId."'";
$con->query($sql);
$con->disconnect();
?>