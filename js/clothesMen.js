///////////////kids////////////////
// women (boys)///////
var women=["img/clothes/men/ss1.jpg","img/clothes/men/ss11.jpg"];


var imagehp=document.getElementById('imagehoodi');



var index=1;
function slidhoodi(num) {
   contenthp(index=index+num);
}

function  contenthp(num) {
    
    if(num>women.length) index=1;
    if(num<1) index=women.length;

    imagehp.src=women[index-1];
}


////////men (pants)//////////
var skirts=["img/clothes/men/j2.jpg","img/clothes/men/j22.jpg"];


var imagedell=document.getElementById('imagJeans');



var index=1;
function slidJeans(num) {
   contentdell(index=index+num);
}

function  contentdell(num) {
    
    if(num>skirts.length) 
    index=1;
    if(num<1) 
    index=skirts.length;

    imagedell.src=skirts[index-1];
}

// ////////////////////clothes(blouse)/////////////////
var blouse=["img/clothes/men/c3.jpg","img/clothes/men/c33.jpg"];


var imageblouse=document.getElementById('imagCoat');



var index=1;
function slidcoat(num) {
   contentblouse(index=index+num);
}

function contentblouse(num) {
    
    if(num>blouse.length) 
    index=1;
    if(num<1) 
    index=blouse.length;

    imageblouse.src=blouse[index-1];
}

// ////////////////////  clothes(shirt) /////////////////
var pants=["img/clothes/men/s1.jpg","img/clothes/men/s11.jpg"];


var imagepants=document.getElementById('imagshirt');



var index=1;
function slidshirt(num) {
    contentpants(index=index+num);
}

function contentpants(num) {
    
    if(num>pants.length) 
    index=1;
    if(num<1) 
    index=pants.length;

    imagepants.src=pants[index-1];
}
