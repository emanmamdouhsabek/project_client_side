///////////////kids////////////////
// women (boys)///////
var women=["img/clothes/kids/b4.jpg","img/clothes/kids/b444.jpg"];


var imagehp=document.getElementById('imageboy');



var index=1;
function slidboy(num) {
   contenthp(index=index+num);
}

function  contenthp(num) {
    
    if(num>women.length) index=1;
    if(num<1) index=women.length;

    imagehp.src=women[index-1];
}


////////lkids (girl)//////////
var skirts=["img/clothes/kids/g4.jpg","img/clothes/kids/g44.jpg"];


var imagedell=document.getElementById('imagegirl');



var index=1;
function slidgirl(num) {
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
var blouse=["img/clothes/kids/b22.jpg","img/clothes/kids/b222.jpg"];


var imageblouse=document.getElementById('imagebaby');



var index=1;
function slidesbaby(num) {
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
var pants=["img/clothes/kids/t3.jpg","img/clothes/kids/t33.jpg"];


var imagepants=document.getElementById('imagebrand');



var index=1;
function slidbrand(num) {
    contentpants(index=index+num);
}

function contentpants(num) {
    
    if(num>pants.length) 
    index=1;
    if(num<1) 
    index=pants.length;

    imagepants.src=pants[index-1];
}
