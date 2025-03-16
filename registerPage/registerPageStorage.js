const fullNameInput = document.getElementById("fullNameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const confirmPasswordInput = document.getElementById("confirmPasswordInput");
const registerBtn = document.getElementById("RegisterBtn");

registerBtn.addEventListener("click", function () {
  let fullName = fullNameInput.value;
  let email = emailInput.value;
  let password = passwordInput.value;
  let confirmPassword = confirmPasswordInput.value;

  if (
    fullName === "" ||
    email === "" ||
    password === "" ||
    confirmPassword == ""
  ) {
    alert("All fields are required. Please fill in all the fields.");
    return;
  }

  if (password !== confirmPassword) {
    alert(
      "The passwords do not match. Please make sure both passwords are the same."
    );
    return;
  }

  const userData = {
    fullname: fullNameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };

  localStorage.setItem("userData", JSON.stringify(userData));
  alert("Registration successful! You can now log in");
});
