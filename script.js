const fName = document.querySelector("#first-name");
const lName = document.querySelector("#last-name");
const maleGender = document.querySelector("#male-gender");
const femaleGender = document.querySelector("#female-gender");
const login = document.querySelector("#login");
const password = document.querySelector("#password");
const birthDate = document.querySelector("#birth-date");
const sendBtn = document.querySelector("#send");

if (fName.value === "" || lName.value === "" || login.value === "" || password.value === "" || birthDate.value === "") {
    console.log("Pole nie moze byc puste");
}
