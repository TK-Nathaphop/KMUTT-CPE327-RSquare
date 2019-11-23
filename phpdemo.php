<?php

//Connect to database
require_once ('class/databaseConnection.php');
$con = new databaseConnection();
$con->connect();

//Query data
$sql = "SELECT * FROM `building`";
$res = $con->query($sql);
echo json_encode($res -> fetch_all());
?>