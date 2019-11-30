<?php

$rawpost = file_get_contents('php://input');
$json_txt = str_replace("\\", "", $rawpost);
// echo $json_txt;
$json = json_decode($json_txt);
// echo json_encode($json);
require_once ('class/databaseConnection.php');
$con = new databaseConnection();
$con->connect();
$orgId = $json->orgId;
$userId = $json->id;
$sql = "UPDATE `organization` SET `advisor`= NULL WHERE `organization_id` = '".$orgId."'";
// echo $sql;
$con->query($sql);
?>