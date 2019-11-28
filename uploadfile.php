<?php

// echo 'e tong';

if(isset($_FILES['img-building'])){
    $errors= array();
    $file_name = $_FILES['img-building']['name'];
    $file_size =$_FILES['img-building']['size'];
    $file_tmp =$_FILES['img-building']['tmp_name'];
    $file_type=$_FILES['img-building']['type'];
    $file_ext=strtolower(end(explode('.',$_FILES['img-building']['name'])));

    $extensions= array("jpeg","jpg","png");
    
    if(in_array($file_ext,$extensions)=== false){
       $errors[]="extension not allowed, please choose a JPEG or PNG file.";
    }
    
    // if($file_size > 2097152){
    //    $errors[]='File size must be excately 2 MB';
    // }
    $name = $_POST['name'];
    
    if(empty($errors)==true){
       move_uploaded_file($file_tmp,"picture/building/".$file_name);
       echo $name;
       echo "Success";
    }else{
      echo "Fail";
       print_r($errors);
    }
 }
 
if(isset($_FILES['img-blueprint'])){
    $errors= array();
    $file_name = $_FILES['img-blueprint']['name'];
    $file_size =$_FILES['img-blueprint']['size'];
    $file_tmp =$_FILES['img-blueprint']['tmp_name'];
    $file_type=$_FILES['img-blueprint']['type'];
    $file_ext=strtolower(end(explode('.',$_FILES['img-blueprint']['name'])));

    $extensions= array("jpeg","jpg","png");
    
    if(in_array($file_ext,$extensions)=== false){
       $errors[]="extension not allowed, please choose a JPEG or PNG file.";
    }
    
    // if($file_size > 2097152){
    //    $errors[]='File size must be excately 2 MB';
    // }

    
    if(empty($errors)==true){
       move_uploaded_file($file_tmp,"picture/blueprint/".$file_name);
       echo "Success";
    }else{
       echo "Fail";
       print_r($errors);
    }
 }

 echo'uploaded';
?>