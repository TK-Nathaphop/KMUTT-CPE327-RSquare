<?php
if(isset($_GET["userId"]))
    $userId = $_GET["userId"];
else
    die();
require_once ('class/databaseConnection.php');

$con = new databaseConnection();
$con->connect();

//Query activity
$sql = "SELECT * FROM `building` WHERE  `flag` = true";
$query_bd = $con->query($sql);
$buildings = array();
while($building = $query_bd -> fetch_object())
{
    $buildingId = $building->building_id;
    $sql = "SELECT * FROM `floor` WHERE `flag` = true AND `building_id` = '".$buildingId."'" ;
    $query_f = $con->query($sql);
    $floors = array();
    while($floor = $query_f -> fetch_object())
    {
        $floorId = $floor->floor_id;
        $sql = "SELECT * FROM `place` WHERE `flag` = true AND `floor_id` = '".$floorId."'";
        $query_p = $con->query($sql);
        $places = array();
        while($place = $query_p -> fetch_object())
            $places[] = $place;
        $floor->place = $places;
        $floors[] = $floor;
    }
    $building->floor = $floors;
    $buildings[] = $building;
}

foreach ($buildings as $building)
{
    foreach ($building->floor as $floor)
    {
        foreach ($floor->place as $place)
        {
            if($place->user_id == $userId)
                $place->res = true;
            else
                $place->res = false;
        }
    }
}

echo json_encode($buildings);   
?>