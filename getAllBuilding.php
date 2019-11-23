<?php
require_once ('class/databaseConnection.php');
$con = new databaseConnection();
$con->connect();

//Query data
$sql = "SELECT * FROM `building`";
$res = $con->query($sql);
$ret = array();
while($item = $res -> fetch_object())
	$ret[] = $item;
echo json_encode($ret);	
?>