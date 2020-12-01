let name = document.getElementById('name');
let email = document.getElementById('email');
let pass = document.getElementById('password');
let phone = document.getElementById('phone');
let gov = document.getElementById('gov');
let city = document.getElementById('city');


var userArr = [];
var currUserArr = [];
var currentUserObject = [];



window.addEventListener('load', function () {

    if (localStorage.length == 0) {
      currentUserObject = []
    } else {
      currentUserObject = JSON.parse(localStorage.getItem("userList"));
      for (var temp = 0; temp < currentUserObject.length; temp++) {
        var userObject = {
          uname: currentUserObject[temp]["uname"],
          uemail: currentUserObject[temp]["uemail"],
          upass: currentUserObject[temp]["upass"],
  
          ugov: currentUserObject[temp]["ugov"],
          uphone: currentUserObject[temp]["uphone"],
          ucity: currentUserObject[temp]["ucity"],
  
  
        };
        userArr.push(userObject);
      }
    }
  });




  // //////////////////////login/////////////////////////////

document.getElementById("btnLogin").onclick=function (event) {
    event.preventDefault();
     
    if(vemptyLogin()){
      console.log("ll");
      if (loginLegal()) {
        currUserArr = [];
        for (var temp = 0; temp < currentUserObject.length; temp++) {
          if (name.value == currentUserObject[temp]["uname"]) {
            var userObject = {
              uname: currentUserObject[temp]["uname"],
              upass: currentUserObject[temp]["upass"]
            };
    
            currUserArr.push(userObject);
            localStorage.setItem("currUser", JSON.stringify(currUserArr));
          
          };
    
    
        }
        console.log('yes')
        window.location.href = ("home.html");
    
      }
    }
  
    console.log('no')
  
  };
  
  
  function loginLegal() {
    let exist = true;
  
    var currentUserObject = JSON.parse(localStorage.getItem("userList"));
  
    for (var temp = 0; temp < currentUserObject.length; temp++) {
      if (name.value == currentUserObject[temp]["uname"]) {
        if (pass.value == currentUserObject[temp]["upass"]) {
          alert('user exit');
          return exist;
        }
      }
  
    }
    alert('user is not exit');
    exist = false;
    return exist;
  
  }
  
  function vemptyLogin() {
    if (name.value == "" || pass.value == "" ) {
      alert('please fill fields');
      return false;
    }
    else
      return true
  }