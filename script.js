let password = document.getElementById("user-password");
let passwordVerification = document.getElementById("confirm-password");
let passwordMessage = document.getElementById("password-message");
let submitButton = document.getElementById("submit");

let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");

let userEmail = document.getElementById("user-email");
let userPhoneNumber = document.getElementById("user-phone-number");


submitButton.addEventListener("click", () => {
  if(password.value != passwordVerification.value)
  {
    password.style.borderColor = "red";
    passwordMessage.textContent = "Passwords don't match.";
    passwordVerification.style.borderColor = "red";
  }
  if(password.value === "" && passwordVerification.value === "")
  {
    passwordMessage.textContent = "Please enter password.";
  }
  if(firstName.value === ""
      || lastName.value  === ""
      || userEmail.value  === ""
      || userPhoneNumber.value  == "") 
  {
    alert("Please enter data on input fields.");
  }
})


  
