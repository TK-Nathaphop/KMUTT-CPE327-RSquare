<?php

//Get search from interface
if(isset($_GET["search"]))
    $search = $_GET["search"];
else
    $search = "";

//Get search from interface
if(isset($_GET["userId"]))
    $userId = $_GET["userId"];
else
    die();

require_once ('class/databaseConnection.php');
$con = new databaseConnection();
$con->connect();

$res_act = $con->query("SELECT * FROM `event` WHERE `advisor` != '".$userId."' OR `advisor` IS NULL");
$acts = array();
while($item = $res_act -> fetch_object())
{
    // $advisorId = $item->advisor;
    $studentId = $item->student;
    // $res_advisor= $con->query("SELECT * FROM `user` WHERE `user_id` = '".$advisorId."'");
    // $advisor = $res_advisor -> fetch_object();
    // $item->advisor_name = $advisor->name;
    // $item->advisor_surname = $advisor->surname;

    $res_student= $con->query("SELECT * FROM `user` WHERE `user_id` = '".$studentId."'");
    $student = $res_student -> fetch_object();
    $item->student_name = $student->name;
    $item->student_surname = $student->surname;
    $acts[] = $item;
}

$ret = array();
// lookup all hints from array if $q is different from "" 
if ($search !== "")
{
    $search = strtolower($search);
    $len=strlen($search);
    foreach($acts as $act)
    {
        if (stristr($search, substr($act->event, 0, $len)))
            $ret[] = $act;
    }
}
else
{
    foreach($acts as $act)
        $ret[] = $act;
}

// Output "no suggestion" if no hint was found or output correct values 
echo json_encode($ret);
?>