/**
 * Created by kinngaileung on 16/10/2015.
 */
var categories = ["topStories"];//default topstories, to prevent error
document.getElementById("topStories").style.backgroundColor = "#333";
function menuClick(cateory){
    var List = document.getElementById(cateory);//if that caterories is selected, bgColor changed
        if(categories.indexOf(cateory)>-1) {//check did value exists or not
            var i = categories.indexOf(cateory); // remove from array when exists
            if(i != -1) {
                categories.splice(i, 1);
            }
            List.style.backgroundColor="#FFFFFF";
        }else{//add to array if not selected
            categories.push(cateory);//add in if not exists
            List.style.backgroundColor="#333";
           // console.log(categories.indexOf(cateory));
        }
   // alert(getPostParameter());
    console.log(categories);
}

function getPostParameter(){//build string for backend request
    var returnValue = "";
    for (var key=0; key <categories.length;key++){
        if(key==0){
            returnValue+=categories[key];
        }else{
            returnValue+="-"+categories[key];
        }
    }
    console.log(returnValue);
    return returnValue;
}