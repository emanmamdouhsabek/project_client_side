///////////////women////////////////
// women (dress)///////
var women=["img/clothes/Women/d6.jpg","img/clothes/Women/d66.jpg"];


var imagehp=document.getElementById('imagedress');



var index=1;
function slideshp(num) {
   contenthp(index=index+num);
}

function  contenthp(num) {
    
    if(num>women.length) index=1;
    if(num<1) index=women.length;

    imagehp.src=women[index-1];
}


////////women (skirt)//////////
var skirts=["img/clothes/Women/s3.jpg","img/clothes/Women/s33.jpg"];


var imagedell=document.getElementById('imageSkirt');



var index=1;
function slidesSkirt(num) {
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
var blouse=["img/clothes/Women/b1.jpg","img/clothes/women/b22.jpg","img/clothes/Women/b33.jpg"];


var imageblouse=document.getElementById('imagblous');



var index=1;
function slidesblouse(num) {
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
var pants=["img/clothes/Women/p2.jpg","img/clothes/Women/p22.jpg","img/clothes/Women/p222.jpg"];


var imagepants=document.getElementById('imagepants');



var index=1;
function slidespants(num) {
    contentpants(index=index+num);
}

function contentpants(num) {
    
    if(num>pants.length) 
    index=1;
    if(num<1) 
    index=pants.length;

    imagepants.src=pants[index-1];
}
