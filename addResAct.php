<?php

$rawpost = file_get_contents('php://input');
$json_txt = str_replace("\\", "", $rawpost);
$json = json_decode($json_txt);
// echo json_encode($json);
require_once ('class/databaseConnection.php');
$con = new databaseConnection();
$con->connect();
$eventId = $json->eventId;
$userId = $json->userId;
$sql = "UPDATE `event` SET `advisor`= '".$userId."' WHERE `event_id` = '".$eventId."'";
$con->query($sql);

?>