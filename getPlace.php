<?php
$placeId = $_GET['placeId'];
require_once ('class/databaseConnection.php');
$con = new databaseConnection();
$con->connect();

//Query place data
$sql = "SELECT * FROM `place` WHERE `flag` = true AND `place_id` = '" . $placeId . "'";
$res = $con->query($sql);
$place = $res -> fetch_object();

//Query facility data
$sql = "SELECT * FROM `facility` WHERE `flag` = true AND `place_id` = '" . $placeId . "'";
$res = $con->query($sql);
echo json_encode($ret)."<br>";
?>