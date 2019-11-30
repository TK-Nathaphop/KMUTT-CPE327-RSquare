<?php
require_once ('class/databaseConnection.php');
$con = new databaseConnection();
$con->connect();

//Query data
$sql = "SELECT * FROM `floor` WHERE `flag` = true";
$res = $con->query($sql);
$ret = array();
while($item = $res -> fetch_object())
	$ret[] = $item;
echo json_encode($ret);
$con->disconnect();
?>