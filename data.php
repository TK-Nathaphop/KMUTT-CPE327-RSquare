<?php
    $rawpost = file_get_contents('php://input');
    $json = json_decode($rawpost);

    $Building_Name = $json -> Building_Name;
    $Floor0 = $json -> Floor0;
    echo $Building_Name;
    echo $Floor0
?>