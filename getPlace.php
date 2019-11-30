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
$place->name = $user->name;
$place->surname = $user->surname;
echo json_encode($place);
$con->disconnect();
?>