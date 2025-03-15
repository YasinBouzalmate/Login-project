console.log("login page");

const loginUsername = document.getElementById("loginUsername");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function () {
  let username = loginUsername.value;
  let email = loginEmail.value;
  let password = loginPassword.value;
  let storedData = JSON.parse(localStorage.getItem("userData"));

  if (
    loginUsername.value === "" ||
    loginEmail.value === "" ||
    password.value === ""
  ) {
    alert("please type in your account information");
    return;
  }

  if (
    storedData.fullname === username &&
    storedData.email === email &&
    storedData.password === password
  ) {
    console.log("correct info");
    window.location.href = "http://127.0.0.1:5500/welcomePage/welcome.html";
    return;
  } else {
    alert("wrong Username, Mail or Password. please try againg!");
  }
});
