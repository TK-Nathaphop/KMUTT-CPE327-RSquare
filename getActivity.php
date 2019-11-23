<?php
require_once ('class/databaseConnection.php');
$userId = $_GET['userId'];

$con = new databaseConnection();
$con->connect();

//Query activity
$sql = "SELECT * FROM `event` WHERE `advisor` = '" . $userId."'";
$query = $con->query($sql);
$activity = $query -> fetch_object();

$sql = "SELECT * FROM `user` WHERE `user_id` = '" . $activity->student."'";
$query = $con->query($sql);
$president = $query -> fetch_object();

$activity->president_name = $president->name;
$activity->president_surname = $president->surname;


echo json_encode($activity);	
?>