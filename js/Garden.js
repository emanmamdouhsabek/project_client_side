///////////////garden////////////////
// garden (chair)///////
var women=["img/Home and kitchen/Garden & Outdoor/g16.jpg","img/Home and kitchen/Garden & Outdoor/g166.jpg"];


var imagehp=document.getElementById('slidchair');



var index=1;
function slidchair(num) {
   contenthp(index=index+num);
}

function  contenthp(num) {
    
    if(num>women.length) index=1;
    if(num<1) index=women.length;

    imagehp.src=women[index-1];
}


////////kitchen(filter)//////////
var skirts=["img/Home and kitchen/Garden & Outdoor/g8.jpg","img/Home and kitchen/Garden & Outdoor/g88.jpg"];


var imagedell=document.getElementById('slidgrill');



var index=1;
function slidgrill(num) {
   contentdell(index=index+num);
}

function  contentdell(num) {
    
    if(num>skirts.length) 
    index=1;
    if(num<1) 
    index=skirts.length;

    imagedell.src=skirts[index-1];
}

// ////////////////////slidlawn(lawn care )/////////////////
var blouse=["img/Home and kitchen/Garden & Outdoor/g9.jpg","img/Home and kitchen/Garden & Outdoor/g99.jpg"];


var imageblouse=document.getElementById('slidlawn');



var index=1;
function slidlawn(num) {
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
var pants=["img/Home and kitchen/Garden & Outdoor/g3.jpg","img/Home and kitchen/Garden & Outdoor/g44.jpg"];


var imagepants=document.getElementById('slidecor');



var index=1;
function slidecor(num) {
    contentpants(index=index+num);
}

function contentpants(num) {
    
    if(num>pants.length) 
    index=1;
    if(num<1) 
    index=pants.length;

    imagepants.src=pants[index-1];
}
