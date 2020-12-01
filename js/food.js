///////////////fruits////////////////
// banana///////
var banana=["img/foods/fruits/banana/1.PNG","img/foods/fruits/banana/2.PNG","img/foods/fruits/banana/3.PNG","img/foods/fruits/banana/4.PNG"];


var imageban=document.getElementById('imageban');



var index=1;
function slidesban(num) {
   contentban(index=index+num);
}

function  contentban(num) {
    
    if(num>banana.length) index=1;
    if(num<1) index=banana.length;

    imageban.src=banana[index-1];
}
// apple///////
var apple=["img/foods/fruits/apple/5.PNG","img/foods/fruits/apple/6.PNG","img/foods/fruits/apple/7.PNG","img/foods/fruits/apple/8.PNG"];


var imageapp=document.getElementById('imageapp');

var index=1;
function slidesapp(num) {
   contentapp(index=index+num);
}

function  contentapp(num) {
    
    if(num>apple.length) index=1;
    if(num<1) index=apple.length;

    imageapp.src=apple[index-1];
}
// mango///////
var mango=["img/foods/fruits/mango/9.PNG","img/foods/fruits/mango/10.PNG","img/foods/fruits/mango/11.PNG","img/foods/fruits/mango/12.PNG"];


var imageman=document.getElementById('imageman');

var index=1;
function slidesman(num) {
   contentman(index=index+num);
}

function  contentman(num) {
    
    if(num>mango.length) index=1;
    if(num<1) index=mango.length;

    imageman.src=mango[index-1];
}
//grapes///////
var grapes=["img/foods/fruits/grapes/13.PNG","img/foods/fruits/grapes/14.PNG","img/foods/fruits/grapes/15.PNG","img/foods/fruits/grapes/16.PNG"];


var imagegra=document.getElementById('imagegra');

var index=1;
function slidesgra(num) {
   contentgra(index=index+num);
}

function  contentgra(num) {
    
    if(num>grapes.length) index=1;
    if(num<1) index=grapes.length;

    imagegra.src=grapes[index-1];
}

///////////vegtables///////////
//////pepper////////////////
var pepper=["img/foods/vegetables/pepper/17.PNG","img/foods/vegetables/pepper/18.PNG","img/foods/vegetables/pepper/19.PNG","img/foods/vegetables/pepper/20.PNG"];


var imagepep=document.getElementById('imagepep');

var index=1;
function slidespep(num) {
   contentpep(index=index+num);
}

function  contentpep(num) {
    
    if(num>pepper.length) index=1;
    if(num<1) index=pepper.length;

    imagepep.src=pepper[index-1];
}
//////cucumber////////////////
var cucumber=["img/foods/vegetables/cuc/21.PNG","img/foods/vegetables/cuc/22.PNG","img/foods/vegetables/cuc/23.PNG","img/foods/vegetables/cuc/24.PNG"];


var imagecuc=document.getElementById('imagecuc');

var index=1;
function slidescuc(num) {
   contentcuc(index=index+num);
}

function  contentcuc(num) {
    
    if(num>cucumber.length) index=1;
    if(num<1) index=cucumber.length;

    imagecuc.src=cucumber[index-1];
}
//////carrots////////////////
var carrot=["img/foods/vegetables/carrots/25.PNG","img/foods/vegetables/carrots/26.PNG","img/foods/vegetables/carrots/27.PNG","img/foods/vegetables/carrots/28.PNG"];


var imagecar=document.getElementById('imagecar');

var index=1;
function slidescar(num) {
   contentcar(index=index+num);
}

function  contentcar(num) {
    
    if(num>carrot.length) index=1;
    if(num<1) index=carrot.length;

    imagecar.src=carrot[index-1];
}
//////tomatoes////////////////
var tomatoes=["img/foods/vegetables/tomates/29.PNG","img/foods/vegetables/tomates/30.PNG","img/foods/vegetables/tomates/31.PNG","img/foods/vegetables/tomates/32.PNG"];


var imagetom=document.getElementById('imagetom');

var index=1;
function slidestom(num) {
   contenttom(index=index+num);
}

function  contenttom(num) {
    
    if(num>tomatoes.length) index=1;
    if(num<1) index=tomatoes.length;

    imagetom.src=tomatoes[index-1];
}
/////////////canned food///////////
//////////cheese/////////
var cheese=["img/foods/cannedfood/cheese/33.PNG","img/foods/cannedfood/cheese/34.PNG","img/foods/cannedfood/cheese/35.PNG","img/foods/cannedfood/cheese/36.PNG"];


var imageche=document.getElementById('imageche');

var index=1;
function slidesche(num) {
   contentche(index=index+num);
}

function  contentche(num) {
    
    if(num>cheese.length) index=1;
    if(num<1) index=cheese.length;

    imageche.src=cheese[index-1];
}
/////////tuna/////////
var tuna=["img/foods/cannedfood/tuna/37.PNG","img/foods/cannedfood/tuna/38.PNG","img/foods/cannedfood/tuna/39.PNG","img/foods/cannedfood/tuna/40.PNG"];


var imagetun=document.getElementById('imagetun');

var index=1;
function slidestun(num) {
   contenttun(index=index+num);
}

function  contenttun(num) {
    
    if(num>tuna.length) index=1;
    if(num<1) index=tuna.length;

    imagetun.src=tuna[index-1];
}
/////////ghee/////////
var ghee=["img/foods/cannedfood/ghee/41.PNG","img/foods/cannedfood/ghee/42.PNG","img/foods/cannedfood/ghee/43.PNG","img/foods/cannedfood/ghee/44.PNG"];


var imagegh=document.getElementById('imagegh');

var index=1;
function slidesgh(num) {
   contentgh(index=index+num);
}

function  contentgh(num) {
    
    if(num>ghee.length) index=1;
    if(num<1) index=ghee.length;

    imagegh.src=ghee[index-1];
}
////////bean/////////
var bean=["img/foods/cannedfood/bean/45.PNG","img/foods/cannedfood/bean/46.PNG","img/foods/cannedfood/bean/47.PNG","img/foods/cannedfood/bean/48.PNG"];


var imagebe=document.getElementById('imagebe');

var index=1;
function slidesbe(num) {
   contentbe(index=index+num);
}

function  contentbe(num) {
    
    if(num>bean.length) index=1;
    if(num<1) index=bean.length;

    imagebe.src=bean[index-1];
}
/////////ready meals///////////
//////sandwich//////////
var sandwich=["img/foods/ready_meal/sandwich/49.PNG","img/foods/ready_meal/sandwich/50.PNG","img/foods/ready_meal/sandwich/51.PNG","img/foods/ready_meal/sandwich/52.PNG"];


var imagesan=document.getElementById('imagesan');

var index=1;
function slidessan(num) {
   contentsan(index=index+num);
}

function  contentsan(num) {
    
    if(num>sandwich.length) index=1;
    if(num<1) index=sandwich.length;

    imagesan.src=sandwich[index-1];
}
//////meat//////////
var pizza=["img/foods/ready_meal/pizza/57.PNG","img/foods/ready_meal/pizza/58.PNG","img/foods/ready_meal/pizza/59.PNG","img/foods/ready_meal/pizza/60.PNG"];


var imagepiz=document.getElementById('imagepiz');

var index=1;
function slidespiz(num) {
   contentpiz(index=index+num);
}

function  contentpiz(num) {
    
    if(num>pizza.length) index=1;
    if(num<1) index=pizza.length;

    imagepiz.src=pizza[index-1];
}
//////candy//////////
var candy=["img/foods/ready_meal/candy/61.PNG","img/foods/ready_meal/candy/62.PNG","img/foods/ready_meal/candy/63.PNG","img/foods/ready_meal/candy/64.PNG"];


var imagecan=document.getElementById('imagecan');

var index=1;
function slidescan(num) {
   contentcan(index=index+num);
}

function  contentcan(num) {
    
    if(num>candy.length) index=1;
    if(num<1) index=candy.length;

    imagecan.src=candy[index-1];
}




