<?php

require_once ('class/databaseConnection.php');
$con = new databaseConnection();
$con->connect();

$con->query("SELECT * FROM user");
while($item = $res -> fetch_object())
  $a[] = $item;

// get the q parameter from URL
$q = $_GET["q"];

$hint = "";

// lookup all hints from array if $q is different from "" 
if ($q !== "")
{
    $q = strtolower($q);
    $len=strlen($q);
    foreach($a as $name) {
        if (stristr($q, substr($name, 0, $len)))
        {
            if ($hint === "")
                $hint = $name['name'];
            else
                $hint .= ", $name";
        }
    }
}

// Output "no suggestion" if no hint was found or output correct values 
echo $hint === "" ? "no suggestion" : $hint;
?>