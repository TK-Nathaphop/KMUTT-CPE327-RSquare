<?php
class databaseConnection
{
  	private $domain = "localhost";
  	private $user = "root";
  	private $password = "";
  	private $database = "rsquare";
  	private $con;

  	public function setNewConnection($domain,$user,$password,$database)
  	{
	 	$this->domain = $domain;
	 	$this->user = $user;
	 	$this->password = $password;
	 	$this->database = $database;
  	}

	public function printConnection()
	{
		echo "Domain: ".$this->domain."<br>";
		echo "User: ".$this->user."<br>";
		echo "Password: ".$this->password."<br>";
		echo "Database: ".$this->user."<br>";
	}
  	public function connect()
  	{
    	$this->con = new mysqli($this->domain, $this->user, $this->password, $this->database);
    	if ($this->con->connect_error)
    	{
    		echo "Failed: ".$this->con->connect_error;
    		return false;
    	}
    	else
    		return true;
  	}

  	public function query($sql)
  	{
  		$res = $this->con->query($sql);
		if(!$res)
			die("Failed: ".$this->con->connect_error);
    	return $res;
  	}
  	
}

?>