<?php
require_once ('class/databaseConnection.php');
$userId = $_GET['userId'];

$con = new databaseConnection();
$con->connect();

//Query activity
$sql = "SELECT * FROM `organization` WHERE `advisor` = '" . $userId."'";
$query = $con->query($sql);
$orgs = array();
while($item = $query -> fetch_object())
{
	$sql = "SELECT * FROM `user` WHERE `user_id` = '" . $item->student."'";
	$query_pres = $con->query($sql);
	$president = $query_pres -> fetch_object();
	$item->president_name = $president->name;
	$item->president_surname = $president->surname;
	$orgs[] = $item;
}

echo json_encode($orgs);	
$con->disconnect();
?>