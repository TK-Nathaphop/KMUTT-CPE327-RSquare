<?php

$rawpost = file_get_contents('php://input');
$json_txt = str_replace("\\", "", $rawpost);
// echo $json_txt;
$json = json_decode($json_txt);
require_once ('class/databaseConnection.php');
$con = new databaseConnection();
$con->connect();
$orgId = $json->organizationId;
$userId = $json->userId;
$sql = "UPDATE `organization` SET `advisor`= NULL WHERE `organization_id` = '".$orgId."'";
$con->query($sql);
?>