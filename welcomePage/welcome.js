let storedData = JSON.parse(localStorage.getItem("userData"));
if (storedData) {
  document.getElementById("welcomeUser").textContent = storedData.fullname;
}
