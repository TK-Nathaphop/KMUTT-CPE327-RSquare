<?php

$rawpost = file_get_contents('php://input');
$json = json_decode($rawpost);

$name = $json -> name;
echo $name;

?>