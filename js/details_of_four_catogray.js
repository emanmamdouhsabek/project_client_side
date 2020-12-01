/////////////home decore////////
/////////rugs////////
var kit_aces=["img/Home and kitchen/Home Decor/d12.jpg","img/Home and kitchen/Home Decor/d11.jpg","img/Home and kitchen/Home Decor/d10.jpg","img/Home and kitchen/Home Decor/d9.jpg"];


var imagekas=document.getElementById('imagekas');

var index=1;
function slideskas(num) {
   contentkas(index=index+num);
}

function  contentkas(num) {
    
    if(num>kit_aces.length) index=1;
    if(num<1) index=kit_aces.length;

    imagekas.src=kit_aces[index-1];
}
/////////Drawings Wall Art////////
var cook=["img/Home and kitchen/Home Decor/d1.jpg","img/Home and kitchen/Home Decor/d2.jpg","img/Home and kitchen/Home Decor/d3.jpg","img/Home and kitchen/Home Decor/d4.jpg"];


var imagecook=document.getElementById('imagecook');

var index=1;
function slidescook(num) {
   contentcook(index=index+num);
}

function  contentcook(num) {
    
    if(num>cook.length) index=1;
    if(num<1) index=cook.length;

    imagecook.src=cook[index-1];
}
/////////clocks////////
var diner=["img/Home and kitchen/Home Decor/d5.jpg","img/Home and kitchen/Home Decor/d6.jpg","img/Home and kitchen/Home Decor/d7.jpg","img/Home and kitchen/Home Decor/d8.jpg"];



var imagediner=document.getElementById('imagediner');

var index=1;
function slidesdiner(num) {
   contentdiner(index=index+num);
}

function  contentdiner(num) {
    
    if(num>diner.length) index=1;
    if(num<1) index=diner.length;

    imagediner.src=diner[index-1];
}
/////////wall sticker////////
var wat=["img/Home and kitchen/Home Decor/d13.jpg","img/Home and kitchen/Home Decor/d14.jpg","img/Home and kitchen/Home Decor/d15.jpg","img/Home and kitchen/Home Decor/d16.jpg"];



var imagewat=document.getElementById('imagewat');

var index=1;
function slideswat(num) {
   contentwat(index=index+num);
}

function  contentwat(num) {
    
    if(num>wat.length) index=1;
    if(num<1) index=wat.length;

    imagewat.src=wat[index-1];
}
///////////


