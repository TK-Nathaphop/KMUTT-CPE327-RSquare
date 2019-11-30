<?php

require_once ('class/databaseConnection.php');
$con = new databaseConnection();
$con->connect();

$res_user = $con->query("SELECT * FROM user WHERE `role` != 'student'");
$users = array();
while($item = $res_user -> fetch_object())
{
    $departmentId = $item->department_id;
    $res_department = $con->query("SELECT * FROM `department` WHERE `department_id` = '".$departmentId."'");
    $department = $res_department -> fetch_object();
    $item->department = $department->department;

    $res_faculty = $con->query("SELECT * FROM `faculty` WHERE `faculty_id` = '".$department->faculty_id."'");
    $faculty = $res_faculty -> fetch_object();
    $item->faculty = $faculty->faculty;
    $users[] = $item;
}

//Get search from interface
if(isset($_GET["search"]))
    $search = $_GET["search"];
else
    $search = "";
if(isset($_GET["type"]))
    $type = $_GET["type"];
else
    $type = "name";



$ret = array();
// lookup all hints from array if $q is different from "" 
if ($search !== "")
{
    $search = strtolower($search);
    $len=strlen($search);
    foreach($users as $user)
    {
        if($type == "name")
        {
            if (stristr($search, substr($user->name, 0, $len)))
                $ret[] = $user;
            else if(stristr($search, substr($user->surname, 0, $len)))
                $ret[] = $user;
        }
        else if($type == "faculty")
        {
            if (stristr($search, substr($user->faculty, 0, $len)))
                $ret[] = $user;
        }
        else if($type == "department")
        {
            if (stristr($search, substr($user->department, 0, $len)))
                $ret[] = $user;
        }

    }
}
else
{
    foreach($users as $user)
        $ret[] = $user;
}

// Output "no suggestion" if no hint was found or output correct values 
echo json_encode($ret);
$con->disconnect();
?>