<?php
  	$buildingId = $_GET['placeId'];
  	require_once ('class/databaseConnection.php');
$con = new databaseConnection();
$con->connect();

//Query data
$sql = "SELECT * FROM `place` WHERE `place_id` = '" . $placeId . "'";
$res = $con->query($sql);
echo json_encode($res -> fetch_object());
?>