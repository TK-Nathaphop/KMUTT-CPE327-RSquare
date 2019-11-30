<?php

$rawpost = file_get_contents('php://input');
$json_txt = str_replace("\\", "", $rawpost);
$json = json_decode($json_txt);
require_once ('class/databaseConnection.php');
$con = new databaseConnection();
$con->connect();
$position = $json->position;
$userId = $json->user_id;
$sql = "UPDATE `user` SET `position`= '".$position."' WHERE `user_id` = '". $userId ."'";
$con->query($sql);
$con->disconnect();
?>