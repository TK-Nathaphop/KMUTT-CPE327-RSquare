<?php
$con = mysqli_connect("localhost", "root", "", "rsquare");
if(mysqli_connect_errno())
	echo "Failed to connect to MySQL".mysqli_connect_error();
$sql = "SELECT * FROM `building`";
$res = mysqli_query($con, $sql);
if(!$res)
{
	die('Error:'.mysqli_error($con));
}
$outp = mysqli_fetch_all($res);
// $mysqli_close($con);
echo json_encode($outp);
?>