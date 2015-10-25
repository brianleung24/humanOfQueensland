<?php
/**
 * Created by PhpStorm.
 * User: kinngaileung
 * Date: 28/9/15
 * Time: 9:48 PM
 */
//Query example:
//SELECT * FROM `rssData` WHERE (`region` = "MakeupPlace2" AND(`category` = "Politics"
// OR `category`="TopStory" OR `category`= "technology")) OR (`region` = "MakeupPlace1"
// AND(`category` = "Politics" OR `category`="TopStory" OR `category`= "technology"))
include "connectDB.php";
$categoriesData=$_GET ["categories"];//data from URL, in format <firstCategory>&<secondCategory>&......
$regionsData = $_GET["regions"];
//$categoriesData= "Politics&TopStory";
//$regionsData = "MakeupPlace1&MakeupPlace2";
$catList = explode("-",$categoriesData);
$regList = explode("-",$regionsData);
$response = array();
if(count($catList)>0&&count($regList)>0){
    //generate WHERE SQL statment //
    $sql_categories = "(";
    $sql_regions = "";
    for($x=0;$x<count($catList);$x++){
       if($x!=0){$sql_categories=$sql_categories . " OR "; }
       $sql_categories=$sql_categories . "`category` = '" .$catList[$x]."'";
   }
    $sql_categories = $sql_categories.")";
    for($y=0;$y<count($regList);$y++){
        if($y>0){$sql_regions = $sql_regions." OR ";};
        $sql_regions = $sql_regions . "(`region` = '".$regList[$y]."' AND" . $sql_categories.")";
    }
    //generate WHERE SQL statment //
    $query =  "SELECT * FROM `rssData` WHERE".$sql_regions;
    $result=mysqli_query($mysqli, $query);

    if($result){
        $response["rss"] =array();
        for ($x = 0; $row = $result->fetch_object(); $x++) {
            $rssItems = array();
            $rssItems["id"] = $row->id;
            $rssItems["newspaper"] = $row->newspaper;
            $rssItems["rssLink"] = $row->rssLink;
            $rssItems["category"] = $row->category;
            $rssItems["region"] = $row->region;
            //echo $rssItems["category"];
            array_push($response["rss"],$rssItems);//building JSON array item
        }

        $response["success"] = 1;

    }else{
        echo "error in selecting";
        $response["success"] = 0;
    }
}else{
    echo"wrong input";
    $response["success"] = 0;
}
echo json_encode($response, JSON_UNESCAPED_SLASHES);// encodes the array into JSON format


?>