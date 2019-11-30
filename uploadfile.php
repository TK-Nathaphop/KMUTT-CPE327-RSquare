<?php

// echo 'e tong';
$NumberFloor = $_POST["myNumberFloor"];
$img_blueprint;
echo $_POST["myNumberFloor"];
if(isset($_FILES['img_building'])){
   $errors= array();
   $file_name = $_FILES['img_building']['name'];
   $file_size =$_FILES['img_building']['size'];
   $file_tmp =$_FILES['img_building']['tmp_name'];
   $file_type=$_FILES['img_building']['type'];
   $file_ext=strtolower(end(explode('.',$_FILES['img_building']['name'])));

   $extensions= array("jpeg","jpg","png");
    
   if(in_array($file_ext,$extensions)=== false){
      $errors[]="extension not allowed, please choose a JPEG or PNG file.";
   }
    
   // if($file_size > 2097152){
   //    $errors[]='File size must be excately 2 MB';
   // }

   // $name = $_POST['name'];
    
   if(empty($errors)==true){
      move_uploaded_file($file_tmp,"picture/building/".$file_name);
      // echo $name;
      echo "Success";
   }else{
      echo "Fail";
      print_r($errors);
   }
}

for ($i=0; $i < $NumberFloor; $i++) { 
   $img_blueprint = 'img_blueprint_'.$i;
   echo $img_blueprint;
   if(isset($_FILES[$img_blueprint])){
      $errors= array();
      $file_name = $_FILES[$img_blueprint]['name'];
      $file_size =$_FILES[$img_blueprint]['size'];
      $file_tmp =$_FILES[$img_blueprint]['tmp_name'];
      $file_type=$_FILES[$img_blueprint]['type'];
      $tmp = explode('.',$_FILES[$img_blueprint]['name']);
      $file_ext=strtolower(end($tmp));

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
}
   echo'uploaded';
?>