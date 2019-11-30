<?php
require_once ('class/databaseConnection.php');
$userId = $_GET['userId'];

$con = new databaseConnection();
$con->connect();

//Query activity
$sql = "SELECT * FROM `event` WHERE `advisor` = '" . $userId."'";
$query = $con->query($sql);
$acts = array();
while($item = $query -> fetch_object())
{
	$sql = "SELECT * FROM `user` WHERE `user_id` = '" . $item->student."'";
	$query_pres = $con->query($sql);
	$president = $query_pres -> fetch_object();
	$item->president_name = $president->name;
	$item->president_surname = $president->surname;
	$acts[] = $item;
}

echo json_encode($acts);
$con->disconnect();	
?>