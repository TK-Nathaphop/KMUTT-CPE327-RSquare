<?php
// echo "Hello";
    $rawpost = file_get_contents('php://input');
    $json = json_decode($rawpost);

   echo $rawpost;
?>