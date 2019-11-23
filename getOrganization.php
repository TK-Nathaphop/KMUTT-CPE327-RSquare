<?php
require_once ('class/databaseConnection.php');
$userId = $_GET['userId'];

$con = new databaseConnection();
$con->connect();

//Query activity
$sql = "SELECT * FROM `organization` WHERE `advisor` = '" . $userId."'";
$query = $con->query($sql);
$organization = $query -> fetch_object();

$sql = "SELECT * FROM `user` WHERE `user_id` = '" . $organization->student."'";
$query = $con->query($sql);
$president = $query -> fetch_object();

$organization->president_name = $president->name;
$organization->president_surname = $president->surname;

echo json_encode($organization);	
?>