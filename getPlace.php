<?php
$placeId = $_GET['placeId'];
require_once ('class/databaseConnection.php');
$con = new databaseConnection();
$con->connect();

//Query place data
$sql = "SELECT * FROM `place` WHERE `flag` = true AND `place_id` = '" . $placeId . "'";
$res = $con->query($sql);
$place = $res -> fetch_object();

$sql = "SELECT * FROM `user` WHERE `user_id` = '" . $place->user_id . "'";
$res = $con->query($sql);
$user= $res -> fetch_object();
$place->user_name = $user->name;
$place->user_surname = $user->surname;
//Query facility data
$sql = "SELECT * FROM `facility` WHERE `flag` = true AND `place_id` = '" . $placeId . "'";
$res = $con->query($sql);
$facility = array();
while($item = $res -> fetch_object())
	$facility[] = $item;
$place->facility = $facility;
echo json_encode($place)."<br>";
?>