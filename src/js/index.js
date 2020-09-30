/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

const validate = event => {
  event.preventDefault();
  //   !alert.classList.contains("d-none") && alert.classList.toggle("d-none");
  var alert = document.querySelector("#alert");
  alert.innerHTML = "";

  var cardNumber = document.querySelector("#cardNumber");
  var cvcNumber = document.querySelector("#cvcNumber");
  var Amount = document.querySelector("#Amount");
  var firstName = document.querySelector("#firstName");
  var lastname = document.querySelector("#lastname");
  var city = document.querySelector("#city");
  var state = document.querySelector("#state");
  var zipCode = document.querySelector("#zipCode");

  if (cardNumber.value < 1000000000000000) {
    addWarning("Your card number needs to have 16 digits ");
    cardNumber.classList.add("is-invalid");
  }

  if (cvcNumber.value.length != 3) {
    addWarning("Your cvc number needs to have 3 digits ");
    cvcNumber.classList.add("is-invalid");
  }

  if (Amount.value < 1) {
    addWarning("This amount is incorrect ");
    Amount.classList.add("is-invalid");
  }

  if (firstName.value.length < 2) {
    addWarning("Please enter you full name ");
    firstName.classList.add("is-invalid");
  }

  if (lastname.value < 2) {
    addWarning("Please enter your full last name ");
    lastname.classList.add("is-invalid");
  }

  if (city.value.length < 2) {
    addWarning("Please enter you city");
    city.classList.add("is-invalid");
  }

  if (state.value == "Pick a State") {
    addWarning("Please enter you state");
    state.classList.add("is-invalid");
  }

  if (zipCode.value.length != 5) {
    addWarning("Please enter valid us zip code ");
    zipCode.classList.add("is-invalid");
  }
};

function addWarning(message) {
  let alert = document.querySelector("#alert");
  alert.classList.contains("d-none") && alert.classList.toggle("d-none");

  alert.innerHTML += "<p>" + message + "</p>";
}

document.querySelector("#sentButton").addEventListener("click", validate);
