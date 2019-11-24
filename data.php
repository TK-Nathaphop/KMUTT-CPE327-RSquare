<?php
    $rawpost = file_get_contents('php://input');
    $json = json_decode($rawpost);

    $Building_Name = $json -> Building_Name;
    echo $Building_Name;
?>