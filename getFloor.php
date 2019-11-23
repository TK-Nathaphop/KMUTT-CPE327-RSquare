<?php
  	$buildingId = $_GET['floorId'];
  	require_once ('class/databaseConnection.php');
$con = new databaseConnection();
$con->connect();

//Query data
$sql = "SELECT * FROM `floor` WHERE `floor_id` = '" . $floorId . "'";
$res = $con->query($sql);
echo json_encode($res -> fetch_object());
  	
?>