<?php
/**
 * Created by PhpStorm.
 * User: kinngaileung
 * Date: 28/9/15
 * Time: 9:30 PM
 */

$mysqli = new mysqli();
//DB Credentials
$host ="localhost";
$user ="root";
$password = "joyous\$Doom\$mildew"; // pw is  joyous$Doom$mildew
$dbname = "human_of_queensland";
//Connect DB
$mysqli -> connect($host, $user, $password, $dbname);

$query = "SELECT * FROM `rssData` WHERE 1";//check DBconnect
$result = mysqli_query($mysqli, $query);

if (!$result) {
    echo"Failed to connect, the error message is : ";

    //exit();
}else{
   // echo"ok";
}

//else
//echo "Connect to mySQL successfully <br/>";



?>