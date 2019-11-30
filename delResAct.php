<?php

$rawpost = file_get_contents('php://input');
$json_txt = str_replace("\\", "", $rawpost);
// echo $json_txt;
$json = json_decode($json_txt);
echo json_encode($json);
require_once ('class/databaseConnection.php');
$con = new databaseConnection();
$con->connect();
$placeId = $json->place;
$userId = $json->id;
$sql = "UPDATE `event` SET `advisor`= NULL WHERE `place_id` = '".$placeId."'";
$con->query($sql);
?>