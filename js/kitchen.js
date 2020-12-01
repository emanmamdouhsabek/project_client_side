///////////////kitchen////////////////
// kitchen (accessories)///////
var women=["img/Home and kitchen/Kitchen & Dining/k3.jpg","img/Home and kitchen/Kitchen & Dining/k33.jpg"];


var imagehp=document.getElementById('kitchenAccessory');



var index=1;
function slidacc(num) {
   contenthp(index=index+num);
}

function  contenthp(num) {
    
    if(num>women.length) index=1;
    if(num<1) index=women.length;

    imagehp.src=women[index-1];
}


////////kitchen(filter)//////////
var skirts=["img/Home and kitchen/Kitchen & Dining/k17.jpg","img/Home and kitchen/Kitchen & Dining/k15.jpg"];


var imagedell=document.getElementById('filter');



var index=1;
function slidfilter(num) {
   contentdell(index=index+num);
}

function  contentdell(num) {
    
    if(num>skirts.length) 
    index=1;
    if(num<1) 
    index=skirts.length;

    imagedell.src=skirts[index-1];
}

// ////////////////////Cookware (Cookware )/////////////////
var blouse=["img/Home and kitchen/Kitchen & Dining/k8.jpg","img/Home and kitchen/Kitchen & Dining/k88.jpg"];


var imageblouse=document.getElementById('Cookware');



var index=1;
function slidesCookware(num) {
   contentblouse(index=index+num);
}

function contentblouse(num) {
    
    if(num>blouse.length) 
    index=1;
    if(num<1) 
    index=blouse.length;

    imageblouse.src=blouse[index-1];
}

// ////////////////////  clothes(pants) /////////////////
var pants=["img/Home and kitchen/Kitchen & Dining/k9.jpg","img/Home and kitchen/Kitchen & Dining/k11.jpg"];


var imagepants=document.getElementById('slideServeware');



var index=1;
function slideServeware(num) {
    contentpants(index=index+num);
}

function contentpants(num) {
    
    if(num>pants.length) 
    index=1;
    if(num<1) 
    index=pants.length;

    imagepants.src=pants[index-1];
}
