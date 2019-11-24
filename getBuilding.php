<?php
//   	$buildingId = $_GET['buildingId'];
//   	require_once ('class/databaseConnection.php');
// $con = new databaseConnection();
// $con->connect();

// //Query data
// $sql = "SELECT * FROM `building` WHERE `flag` = true AND `building_id` = '" . $buildingId . "'";
// $res = $con->query($sql);
// echo json_encode($res -> fetch_object());
  	

require_once ('class/databaseConnection.php');
$buildingId = $_GET['buildingId'];

$con = new databaseConnection();
$con->connect();

//Query activity
$sql = "SELECT * FROM `building` WHERE  `flag` = true AND `building_id` = '" . $buildingId."'";
$query_bd = $con->query($sql);
$buildings = array();
while($building = $query_bd -> fetch_object())
{
	$sql = "SELECT * FROM `floor` WHERE  `flag` = true AND `building_id` = '".$buildingId."'" ;
	$query_f = $con->query($sql);
	$floors = array();
	while($floor = $query_f -> fetch_object())
	{
		$floorId = $floor->floor_id;
		$sql = "SELECT * FROM `place` WHERE `flag` = true AND `floor_id` = '" .$floorId."'";
		$query_p = $con->query($sql);
		$places = array();
		while($place = $query_p -> fetch_object())
			$places[] = $place;
		$floor->place = $places;
		$floors[] = $floor;
	}
	$building ->floor = $floors;
	$buildings[] = $building;
}
echo json_encode($buildings);	
?>