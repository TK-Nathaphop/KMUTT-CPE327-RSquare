<?php

$rawpost = file_get_contents('php://input');
$json_txt = str_replace("\\", "", $rawpost);
$json = json_decode($json_txt);
// echo json_encode($json);
require_once ('class/databaseConnection.php');
$con = new databaseConnection();
$con->connect();
$buildingId = $json->building;
$floorId = $json->floor;
$placeIds = $json->place;
$userId = $json->id;
foreach ($placeIds as $placeId)
{

	$sql = "UPDATE `place` SET `user_id`= '".$userId."' WHERE `place_id` = '".$placeId."'";
	$con->query($sql);
}

?>