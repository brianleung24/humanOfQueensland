/**
 * Created by kinngaileung on 16/10/2015.
 */
var categories = ["Top Stories"];

function menuClick(cateory){

        if(categories.indexOf(cateory)==undefined) {
            categories.push(cateory);//add in if not exists
        }else{
            var i = categories.indexOf("b");
            if(i != -1) {
                cateory.splice(i, 1);
            }
        }

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