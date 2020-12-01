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


/////////////////////////////////register//////////////////////////

document.getElementById("btnReg").onclick=function (e) {
  e.preventDefault();
  if (vEmail() && vphone() && vname() && vempty()) {

    if (localStorage.length == 0) {
      userArr = [];
    }
    var userObject = {
      uname: name.value,
      uemail: email.value,
      upass: pass.value,

      ugov: gov.value,
      uphone: phone.value,
      ucity: city.value,
    };

    userArr.push(userObject);
    localStorage.setItem("userList", JSON.stringify(userArr));


    console.log('yes');

    window.location.href = ("home.html");
  }
  else
    console.log('no');

};


function vEmail() {
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
    return true;
  }
  alert("You have entered an invalid email address!")
  return false;
}

function vphone() {
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (phone.value.match(phoneno)) {
    return true;
  }
  else {
    alert("You must enter phone in format xxx-xxx-xxxx");
    return false;
  }
}

function vname() {
  if (name.length > 8 || name.length < 8) {
    alert('max name length is 8 char');
    return false
  }
  else
    return true;
}

function vempty() {
  if (name.value == "" || email.value == "" || pass.value == "" || phone.value == "" || city.value == "" || gov.value == "") {
    alert('please fill fields');
    return false;
  }
  else
    return true
}



// //////////////////////login/////////////////////////////

// document.getElementById("btnLogin").onclick=function (event) {
//   event.preventDefault();
   
//   if(vemptyLogin()){
//     console.log("ll");
//     if (loginLegal()) {
//       currUserArr = [];
//       for (var temp = 0; temp < currentUserObject.length; temp++) {
//         if (name.value == currentUserObject[temp]["uname"]) {
//           var userObject = {
//             uname: currentUserObject[temp]["uname"],
//             upass: currentUserObject[temp]["upass"]
//           };
  
//           currUserArr.push(userObject);
//           localStorage.setItem("currUser", JSON.stringify(currUserArr));
        
//         };
  
  
//       }
//       console.log('yes')
//       window.location.href = ("home.html");
  
//     }
//   }

//   console.log('no')

// };


// function loginLegal() {
//   let exist = true;

//   var currentUserObject = JSON.parse(localStorage.getItem("userList"));

//   for (var temp = 0; temp < currentUserObject.length; temp++) {
//     if (name.value == currentUserObject[temp]["uname"]) {
//       if (pass.value == currentUserObject[temp]["upass"]) {
//         alert('user exit');
//         return exist;
//       }
//     }

//   }
  
//   exist = false;
  
//   return exist;

// }

// function vemptyLogin() {
//   if (name.value == "" || pass.value == "" ) {
//     alert('please fill fields');
//     return false;
//   }
//   else
//     return true
// }