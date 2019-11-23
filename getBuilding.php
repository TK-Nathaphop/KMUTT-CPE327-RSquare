<?php
  	$buildingId = $_GET['buildingId'];
  	require_once ('class/databaseConnection.php');
$con = new databaseConnection();
$con->connect();

//Query data
$sql = "SELECT * FROM `building` WHERE `building_id` = '" . $buildingId . "'";
$res = $con->query($sql);
echo json_encode($res -> fetch_object());
  	
?>