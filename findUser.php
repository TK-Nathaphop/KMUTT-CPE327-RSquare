<?php

require_once ('class/databaseConnection.php');
$con = new databaseConnection();
$con->connect();

$res = $con->query("SELECT * FROM user");
$users = array();
while($item = $res -> fetch_object())
{
    $departmentId = $item ->department_id;
    $res_department = $con->query("SELECT * FROM `department` WHERE `department_id` = '".$departmentId."'");
    $department = $res_department -> fetch_object();
    $item->department = $department->department;

    $res_faculty = $con->query("SELECT * FROM `faculty` WHERE `faculty_id` = '".$departmentId."'");
    $department = $res_department -> fetch_object();
    $item->department = $department->department;
    $users[] = $item;
}

// get the q parameter from URL
$search = $_GET["search"];
if(isset($_GET["type"]))
    $type = $_GET["type"];
else
    $type = "Name";


$hint = array();

// lookup all hints from array if $q is different from "" 
if ($search !== "")
{
    $search = strtolower($search);
    $len=strlen($search);
    foreach($users as $user)
    {
        if($type == "Name")
        {
            if (stristr($search, substr($user->name, 0, $len)))
                $hint[] = $user;
            else (stristr($search, substr($users->surname, 0, $len)))
                $hint[] = $user;
        }
        else if($type == "Faculty")
        {
            if (stristr($search, substr($user->faculty, 0, $len)))
                $hint[] = $user;
        }
        else if($type == "Department")    

    }
}

// Output "no suggestion" if no hint was found or output correct values 
echo $hint === "" ? "no suggestion" : $hint;
?>