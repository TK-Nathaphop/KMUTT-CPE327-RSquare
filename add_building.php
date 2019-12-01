<?php

$rawpost = file_get_contents('php://input');
$json_txt = str_replace("\\", "", $rawpost);
$json = json_decode($json_txt);

echo json_encode($json);
require_once ('class/databaseConnection.php');
$con = new databaseConnection();
$con->connect();

$sql = "SELECT count(`building_id`) FROM `building`";
$ret=$con->query($sql);
$building_num = $ret->fetch_row()[0]+1;
$building_id = 'building_'. $building_num;

$sql = "INSERT INTO `building`(`building_id`, `building`, `picture`, `flag`) VALUES ('".$building_id."','".$json[0]->buildingName."','".$json[0]->buildingImage."',true)";
echo $sql;
$con->query($sql);

$sql = "SELECT count(`floor_id`) FROM `floor`";
$ret = $con->query($sql);
$floor_num = $ret->fetch_row()[0];
foreach($json[0]->floor as $floor)
{
	$floor_num = $floor_num+1;
	$floor_id = 'floor_'.($floor_num);
	$sql = "INSERT INTO `floor`(`floor_id`, `floor`, `blueprint`, `flag`, `building_id`) VALUES ('".$floor_id."','".$floor->floorName."','".$floor->floorBlueprint."',1,'".$building_id."')";
	echo $sql;
	$con->query($sql);

	$sql = "SELECT count(`place_id`) FROM `place`";
	$ret = $con->query($sql);
	$place_num = $ret->fetch_row()[0];
	foreach($floor->place as $place)
	{
		if($place->placeDrumUsage == true)
        	$drum = 'true';
        else
        	$drum = 'false';

        if($place->placeProjector == true)
        	$projector = 'true';
        else
        	$projector = 'false';

        if($place->placeMicrophone == true)
        	$microphone = 'true';
        else
        	$microphone = 'false';

        if($place->placeSpeaker == true)
        	$speaker = 'true';
        else
        	$speaker = 'false';

        if($place->placeCapacity == null)
        	$capacity = 0;
        else
        	$capacity = $place->placeCapacity;
        
		$place_num = $place_num+1;
		$place_id = 'place_'.($place_num);
		$sql = "INSERT INTO `place`(`place_id`, `place`, `capacity`, `flag`, `drum`, `speaker`, `microphone`, `projector`, `floor_id`, `user_id`) VALUES ('".$place_id."','".$place->placeName."',".$capacity.",1,".$drum.",".$speaker.",".$microphone.",".$projector.",'".$floor_id."',NULL)";
		echo $sql;
		$con->query($sql);
	}
}
$con->disconnect();
?>