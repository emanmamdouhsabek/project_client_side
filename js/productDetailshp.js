///////////////laptops////////////////
// laptop (hp)///////
var laptophp=["img/electronics/laptops/hp1.jpg","img/electronics/laptops/hp2.jpg","img/electronics/laptops/hp3.jpg","img/electronics/laptops/hp4.jpg"];


var imagehp=document.getElementById('imagehp');
var index=1;
function slideshp(num) {
   contenthp(index=index+num);
}

function  contenthp(num) {
    
    if(num>laptophp.length) index=1;
    if(num<1) index=laptophp.length;

    imagehp.src=laptophp[index-1];
}


//////////laptop (dell)//////////
var laptopdell=["img/electronics/laptops/d1.jpg","img/electronics/laptops/d2.jpeg","img/electronics/laptops/d3.jpg","img/electronics/laptops/d4.jpeg"];


var imagedell=document.getElementById('imagedell');



var index=1;
function slidesdell(num) {
   contentdell(index=index+num);
}

function  contentdell(num) {
    
    if(num>laptopdell.length) 
    index=1;
    if(num<1) 
    index=laptopdell.length;

    imagedell.src=laptopdell[index-1];
}

// ////////////////////laptop(apple)/////////////////
var laptoapple=["img/electronics/laptops/a1.jpg","img/electronics/laptops/a2.jpg","img/electronics/laptops/a3.jpg","img/electronics/laptops/a4.jpg"];


var imageapple=document.getElementById('imageapple');



var index=1;
function slidesapple(num) {
   contentapple(index=index+num);
}

function contentapple(num) {
    
    if(num>laptoapple.length) 
    index=1;
    if(num<1) 
    index=laptoapple.length;

    imageapple.src=laptoapple[index-1];
}

// ////////////////////  laptop(lenovo) /////////////////
var laptoplenovo=["img/electronics/laptops/l1.jpg","img/electronics/laptops/l2.jpg","img/electronics/laptops/l3.jpg","img/electronics/laptops/l4.jpg"];


var imagelenovo=document.getElementById('imagelenovo');



var index=1;
function slideslenovo(num) {
    contentlenovo(index=index+num);
}

function contentlenovo(num) {
    
    if(num>laptoplenovo.length) 
    index=1;
    if(num<1) 
    index=laptoplenovo.length;

    imagelenovo.src=laptoplenovo[index-1];
}



/////////////mobiles////////////////////////////////////
// ////////mobiles (samsung)//////////
var mobsamsung=["img/electronics/mobiles/s1.png","img/electronics/mobiles/s2.jpg","img/electronics/mobiles/s3.jpg","img/electronics/mobiles/s4.jpeg"];


var imagesammob=document.getElementById('imagesammob');



var index=1;
function slidessammob(num) {
   contentsammob(index=index+num);
}

function  contentsammob(num) {
    
    if(num>mobsamsung.length) index=1;
    if(num<1) index=mobsamsung.length;

    imagesammob.src=mobsamsung[index-1];
}


// ////////mobiles (honor)//////////
var mobilehonor=["img/electronics/mobiles/h1.jpg","img/electronics/mobiles/h2.jpg","img/electronics/mobiles/h3.jpg","img/electronics/mobiles/h4.jpg"];


var imagehonor=document.getElementById('imagehonor');



var index=1;
function slideshonor(num) {
    contenthonor(index=index+num);
}

function contenthonor(num) {
    
    if(num>mobilehonor.length) 
    index=1;
    if(num<1) 
    index=mobilehonor.length;

    imagehonor.src=mobilehonor[index-1];
}

// ///////////////////mobiles(huawei)///////////////////////////
var mobilehuawei=["img/electronics/mobiles/hu1.jpg","img/electronics/mobiles/hu2.jpg","img/electronics/mobiles/hu3.jpg","img/electronics/mobiles/hu4.jpg"];


var imagehuawei=document.getElementById('imagehuawei');



var index=1;
function slideshuawei(num) {
    contenthuawei(index=index+num);
}

function contenthuawei(num) {
    
    if(num>mobilehuawei.length) 
    index=1;
    if(num<1) 
    index=mobilehuawei.length;

    imagehuawei.src=mobilehuawei[index-1];
}


//////////////////////mobiles(lenovo)/////////////
var mobilelenovo=["img/electronics/mobiles/lm1.jpg","img/electronics/mobiles/lm2.jpg","img/electronics/mobiles/lm3.jpg","img/electronics/mobiles/lm4.jpg"];


var imagelenovomob=document.getElementById('imagelenovomob');



var index=1;
function slideslenovomob(num) {
    contentlenovomob(index=index+num);
}

function contentlenovomob(num) {
    
    if(num>mobilelenovo.length) 
    index=1;
    if(num<1) 
    index=mobilelenovo.length;

    imagelenovomob.src=mobilelenovo[index-1];
}

// ///////////////////////////smarts tv//////////////////
// //////////////tvs(samsung)///////////////
var tvsamsung=["img/electronics/SmartTVs/st1.jpg","img/electronics/SmartTVs/st2.jpg","img/electronics/SmartTVs/st3.jpg","img/electronics/SmartTVs/st4.jpg"];


var imagetvsamsung=document.getElementById('imagetvsamsung');



var index=1;
function slidestvsamsung(num) {
    contenttvsamsung(index=index+num);
}

function  contenttvsamsung(num) {
    
    if(num>tvsamsung.length) 
    index=1;
    if(num<1) 
    index=tvsamsung.length;

    imagetvsamsung.src=tvsamsung[index-1];
}

