const fName = document.querySelector("#first-name");
const lName = document.querySelector("#last-name");
const maleGender = document.querySelector("#male-gender");
const femaleGender = document.querySelector("#female-gender");
const login = document.querySelector("#login");
const password = document.querySelector("#password");
const birthDate = document.querySelector("#birth-date");
const sendBtn = document.querySelector("#send");

// Functions for checking gender and spellings
function checkGender (){
    if (maleGender.checked){
        return "Pan";
    }
    else if (femaleGender.checked){
        return "Pani";
    }
}

function spellBirth (){
    if (maleGender.checked){
        return "urodzony";
    }
    else if (femaleGender.checked){
        return "urodzona";
    }
}

// Function with message for the user
function alertForUser(){
    alert(`${checkGender()} ${fName.value} ${lName.value} ${spellBirth ()} ${birthDate.value} chce utworzyc konto o loginie "${login.value}"`);
}

// Function for removing error messages
function removeErrorMessages() {
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((errorMessage) => {
        errorMessage.remove();
    });
}


// Function for form validation and add error message to each form's field
function addErrorMessage() {
    removeErrorMessages();
    const errorDisplay = document.querySelectorAll(".error");
    if(fName.value === "" ){
        const createElement = document.createElement("div");
        createElement.innerHTML = "<p>Pole nie może być puste!</p>";
        createElement.classList.add("error-message");
        errorDisplay[0].appendChild(createElement);
    }
    if(lName.value === ""){
        const createElement = document.createElement("div");
        createElement.innerHTML = "<p>Pole nie może być puste!</p>";
        createElement.classList.add("error-message");
        errorDisplay[1].appendChild(createElement);
    }
    if(login.value===""){
        const createElement = document.createElement("div");
        createElement.innerHTML = "<p>Pole nie może być puste!</p>";
        createElement.classList.add("error-message");
        errorDisplay[2].appendChild(createElement);
    }
    if(password.value===""){
        const createElement = document.createElement("div");
        createElement.innerHTML = "<p>Pole nie może być puste!</p>";
        createElement.classList.add("error-message");
        errorDisplay[3].appendChild(createElement);
    }
    if(birthDate.value ===""){
        const createElement = document.createElement("div");
        createElement.innerHTML = "<p>Pole nie może być puste!</p>";
        createElement.classList.add("error-message");
        errorDisplay[4].appendChild(createElement);
    }
    else{
        alertForUser();
    }
    }

sendBtn.addEventListener("click", (event) => {
    event.preventDefault();
    addErrorMessage()
})