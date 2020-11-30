///////////////kids////////////////
// women (boys)///////
var women=["img/clothes/foot/m1.jpg","img/clothes/foot/m11.jpg"];


var imagehp=document.getElementById('imagefoot');



var index=1;
function slidfoot(num) {
   contenthp(index=index+num);
}

function  contenthp(num) {
    
    if(num>women.length) index=1;
    if(num<1) index=women.length;

    imagehp.src=women[index-1];
}


////////men (pants)//////////
var skirts=["img/clothes/foot/w1.jpg","img/clothes/foot/w11.jpg"];


var imagedell=document.getElementById('imagfoot1');



var index=1;
function slidfoot1(num) {
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
var blouse=["img/clothes/foot/b1.jpg","img/clothes/foot/b11.jpg"];


var imageblouse=document.getElementById('boyfoot');



var index=1;
function slidfoot2(num) {
   contentblouse(index=index+num);
}

function contentblouse(num) {
    
    if(num>blouse.length) 
    index=1;
    if(num<1) 
    index=blouse.length;

    imageblouse.src=blouse[index-1];
}

// ////////////////////  clothes(girlfoot) /////////////////
var pants=["img/clothes/foot/g2.jpg","img/clothes/foot/g3.jpg"];


var imagepants=document.getElementById('girlfoot');



var index=1;
function slidgirlfoot(num) {
    contentpants(index=index+num);
}

function contentpants(num) {
    
    if(num>pants.length) 
    index=1;
    if(num<1) 
    index=pants.length;

    imagepants.src=pants[index-1];
}
