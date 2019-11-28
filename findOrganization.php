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

$res_act = $con->query("SELECT * FROM `organization` WHERE `advisor` != '".$userId."' OR `advisor` IS NULL");
$organizations = array();
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
    $organizations[] = $item;
}

//Get search from interface
if(isset($_GET["search"]))
    $search = $_GET["search"];
else
    $search = "";

$ret = array();
// lookup all hints from array if $q is different from "" 
if ($search !== "")
{
    $search = strtolower($search);
    $len=strlen($search);
    foreach($organizations as $organization)
    {
        if (stristr($search, substr($organization->organization, 0, $len)))
            $ret[] = $organization;
    }
}
else
{
    foreach($organizations as $organization)
        $ret[] = $organization;
}

// Output "no suggestion" if no hint was found or output correct values 
echo json_encode($ret);
?>