<?php

$rawpost = file_get_contents('php://input');
$json_txt = str_replace("\\", "", $rawpost);
$json = json_decode($json_txt);
// echo json_encode($json);
require_once ('class/databaseConnection.php');
$con = new databaseConnection();
$con->connect();
$orgId = $json->organization_id;
$userId = $json->userId;
$sql = "UPDATE `organization` SET `advisor`= '".$userId."' WHERE `organization_id` = '". $orgId ."'";
echo $sql;
$con->query($sql);
$con->disconnect();
?>