<?php
    $rawpost = file_get_contents('php://input');
    $json = json_decode($rawpost);
    echo $rawpost
    // $Building_Name0 = $json -> Building_Name0;
    // $Floor0 = $json -> Floor0;
    // $DrumUsageF0P0 = $json -> DrumUsageF0P0;
    // echo $Building_Name;
    // echo $Floor0
?>