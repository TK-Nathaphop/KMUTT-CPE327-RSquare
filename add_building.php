<?php

// print_r($_POST);
//echo $_POST;

// $post = file_get_contents('php://input');
// $json = json_decode($post);

// $floor = $json -> floor;
// echo "under floor";
// $img_data = $json ->img_data;
// echo "under image";
// $img_name = $json ->img_name;
// echo $floor;

$rawpost = file_get_contents('php://input');
$json = json_decode($rawpost);

$name = $json -> name;
echo $name;

?>