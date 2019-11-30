<?php
require_once ('class/databaseConnection.php');
if(!isset($_GET["userId"]))
   die();
$userId = $_GET['userId'];

$con = new databaseConnection();
$con->connect();

// $sql = "SELECT * FROM `building` WHERE `building_id` = (SELECT `building_id` FROM `floor` WHERE `floor_id` = (SELECT `floor_id` FROM `place` WHERE `user_id` = '" . $userId."'))"

//Query activity
$sql = "SELECT * FROM `building`";
$query_bd = $con->query($sql);
$buildings = array();
while($building = $query_bd -> fetch_object())
{
	$buildingId = $building->building_id;
	// $sql = "SELECT * FROM `floor` WHERE `floor_id` = (SELECT floor_id FROM `place` WHERE `user_id` = '" . $userId."') AND `building_id` = '".$buildingId."'" ;
	$sql = "SELECT * FROM `floor` WHERE `building_id` = '".$buildingId."'" ;
	$query_f = $con->query($sql);
	$floors = array();
	while($floor = $query_f -> fetch_object())
	{
		$floorId = $floor->floor_id;
		$sql = "SELECT * FROM `place` WHERE `floor_id` = '".$floorId."'";
		$query_p = $con->query($sql);
		$places = array();
		while($place = $query_p -> fetch_object())
		{
			$placeId = $place->place_id;
			$sql = "SELECT * FROM `place` WHERE `user_id` = '" . $userId."' AND `place_id` = '".$placeId."'";
			if($con->query($sql))
				$place->responsible = true;
			else
				$place->responsible = false;
			$places[] = $place;
		}
		$floor->place = $places;
		$floors[] = $floor;
	}
	$building ->floor = $floors;
	$buildings[] = $building;
}

echo json_encode($buildings);
$con->disconnect();
?>