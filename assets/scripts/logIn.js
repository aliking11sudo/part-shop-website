let myEmail = document.getElementById("myEmail");
let password = document.getElementById("password-field");
let btn = document.getElementById("btn");
let textEmail = document.getElementById("tex-email");
let textPass = document.getElementById("tex-pass");
let btnShow = document.getElementById("showPass");
btnShow.addEventListener('click', ()=>{
  let passwordInput = document.getElementById("password-field");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  
  } else {
    passwordInput.type = "password";
  }
})
  

// let letter = document.getElementById("letter");
// let capital = document.getElementById("capital");
// let number = document.getElementById("number");
// let length = document.getElementById("length");
// password.onkeyup = function () {
//   let lowerCaseLetters = /[a-z]/g;
//   if (password.value.match(lowerCaseLetters)) {
//     letter.classList.remove("invalid");
//     letter.classList.add("valid");
//   } else {
//     letter.classList.remove("valid");
//     letter.classList.add("invalid");
//   }
//   let upperCaseLetters = /[A-Z]/g;
//   if (password.value.match(upperCaseLetters)) {
//     capital.classList.remove("invalid");
//     capital.classList.add("valid");
//   } else {
//     capital.classList.remove("valid");
//     capital.classList.add("invalid");
//   }
//   let numbers = /[0-9]/g;
//   if (password.value.match(numbers)) {
//     number.classList.remove("invalid");
//     number.classList.add("valid");
//   } else {
//     number.classList.remove("valid");
//     number.classList.add("invalid");
//   }
//   if (password.value.length >= 8) {
//     length.classList.remove("invalid");
//     length.classList.add("valid");
//   } else {
//     length.classList.remove("valid");
//     length.classList.add("invalid");
//   }
// };
const userAdmin = [
  {
    email: "aliesfandani1382@gmail.com",
    passwordadmin: "Asfali12",
  },
];
userAdmin.map((item) => {
  btn.addEventListener("click", () => {
    let textLength = password.value.length;
    if (password.value == "") {
      textPass.style.display = "block";
    } else {
      if (password.value == item.passwordadmin && myEmail.value == item.email) {
        window.location.href = "../index.html";
      } else {
        textPass.style.display = "block";
      }
    }
  });
});
