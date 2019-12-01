<?php

$rawpost = file_get_contents('php://input');
$json_txt = str_replace("\\", "", $rawpost);
$json = json_decode($json_txt);

echo json_encode($json);
require_once ('class/databaseConnection.php');
$con = new databaseConnection();
$con->connect();

$building_id = $json[0]->id;
$sql = "UPDATE `building` SET `building`='".$json[0]->buildingName."',`picture`='".$json[0]->buildingImage."' WHERE `building_id` = '".$building_id."'";
$con->query($sql);
echo $sql;
$condition_f = array();
$condition_p = array();
$sql = "SELECT count(`floor_id`) FROM `floor`";
$ret = $con->query($sql);
$floor_num = $ret->fetch_row()[0];
foreach($json[0]->floor as $floor)
{
	if($floor->id == null)
	{
		$floor_num = $floor_num+1;
		$floor_id = 'floor_'.($floor_num);
		$sql = "INSERT INTO `floor`(`floor_id`, `floor`, `blueprint`, `flag`, `building_id`) VALUES ('".$floor_id."','".$floor->floorName."','".$floor->floorBlueprint."',1,'".$building_id."')";
		echo $sql;
		$con->query($sql);
	}
	else
	{
		$floor_id = $floor->id;
		$sql = "UPDATE `floor` SET `floor`='".$floor->floorName."',`blueprint`='".$floor->floorBlueprint."' WHERE `floor_id`= '".$floor_id."'";
		echo $sql;
		$con->query($sql);
	}
	
	$sql = "SELECT count(`place_id`) FROM `place`";
	$ret = $con->query($sql);
	$place_num = $ret->fetch_row()[0];
	foreach($floor->place as $place)
	{
		if($place->placeDrumUsage == 1)
        	$drum = 'true';
        else
        	$drum = 'false';
        if($place->placeProjector == 1)
        	$projector = 'true';
        else
        	$projector = 'false';
        if($place->placeMicrophone == 1)
        	$microphone = 'true';
        else
        	$microphone = 'false';
        if($place->placeSpeaker == 1)
        	$speaker = 'true';
        else
        	$speaker = 'false';
        if($place->placeCapacity == null)
    		$capacity = 0;
    	else
    		$capacity = $place->placeCapacity;
	
		if($place->id == null)
		{
			$place_num = $place_num+1;
			$place_id = 'place_'.($place_num);
			$sql = "INSERT INTO `place`(`place_id`, `place`, `capacity`, `flag`, `drum`, `speaker`, `microphone`, `projector`, `floor_id`, `user_id`) VALUES ('".$place_id."','".$place->placeName."',".$capacity.",1,".$drum.",".$speaker.",".$microphone.",".$projector.",'". $floor_id."',NULL)";
			echo $sql;
			$con->query($sql);
		}
		else
		{
			$place_id = $place->id;
			$sql = "UPDATE `place` SET `place`='".$place->placeName."',`capacity`=".$place->placeCapacity.",`drum`=".$drum.", `speaker`=".$speaker.",`microphone`=".$microphone.",`projector`=".$projector." WHERE `place_id`= '".$place_id."'";
			echo $sql;
			$con->query($sql);
		}
		$condition_p[] = "`place_id` != '".$place_id."'";
	}
	if(count($condition_p) != 0)
	{
		$command = $condition_p[0];
		for($i=1; $i<count($condition_p); $i++)
			$command = $command.' AND '.$condition_p[$i];
		$sql = "UPDATE `place` SET `flag` = 0 WHERE ".$command." AND `floor_id` = '".$floor_id."'";
		echo $sql;
		$con->query($sql);
	}
	$condition_f[] = "`floor_id` != '".$floor_id."'";
}
if(count($condition_f) != 0)
{
	$command = $condition_f[0];
	for($i=1; $i<count($condition_f); $i++)
		$command = $command.' AND '.$condition_f[$i];
	$sql = "UPDATE `floor` SET `flag` = 0 WHERE ".$command." AND `building_id` = '".$building_id."'";
	echo $sql;
	$con->query($sql);
}
$con->disconnect();
?>