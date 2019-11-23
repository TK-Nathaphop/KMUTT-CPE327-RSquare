<?php
require_once ('class/databaseConnection.php');
$userId = $_GET['userId'];

$con = new databaseConnection();
$con->connect();

//Query activity
$sql = "SELECT * FROM `event` WHERE `advisor` = '" . $userId."'";
$query = $con->query($sql);
$activity = $query -> fetch_object();

echo json_encode($activity);	
?>