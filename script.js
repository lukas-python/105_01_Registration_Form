const fName = document.querySelector("#first-name");
const lName = document.querySelector("#last-name");
const maleGender = document.querySelector("#male-gender");
const femaleGender = document.querySelector("#female-gender");
const login = document.querySelector("#login");
const password = document.querySelector("#password");
const birthDate = document.querySelector("#birth-date");
const sendBtn = document.querySelector("#send");
const inputElement = document.getElementsByTagName("input");

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

function alertForUser(){
    alert(`${checkGender()} ${fName.value} ${lName.value} ${spellBirth ()} ${birthDate.value} chce utworzyc konto o loginie "${login.value}"`);
}

const errorMessageStr = "Pole nie może byc puste!"

function formValidation(event) {
    const inputs = document.querySelector("#my-form").querySelectorAll("input");
    let isValid = true;
    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            addErrorMessage(inputs[i], "Pole nie może być puste!");
            isValid = false;
        } else {
            const error = inputs[i].parentNode.querySelector(".error-message");
            if (error) {
                inputs[i].parentNode.removeChild(error);
            }
        }
    }
    if(!isValid){
        event.preventDefault();
    }
    else{
        alertForUser();
    }
}

function addErrorMessage(input, errorMessageStr) {
    const error = input.parentNode.querySelector('.error-message');
    if (error) {
        error.innerText = errorMessageStr;
    }
    else{
        const errorDiv = document.createElement("div");
        errorDiv.classList.add("error-message");
        errorDiv.innerText = errorMessageStr;
        input.after(errorDiv);
    }
}
sendBtn.addEventListener("click", (event) => {
    formValidation(event);


    // if (fName.value === "" || lName.value === "" || login.value === "" || password.value === "" || birthDate.value === "") {
    //     event.preventDefault();
    //     createNewPar();
    //     console.log("Pole nie może byc puste");
    // }
    //
})

// function createNewPar() {
//     let createPar = document.createElement("div");
//     createPar.innerHTML = "<p>Pole nie może by puste!</p>";
//     for(let i=0; i < inputElement.length; i++){
//         inputElement[i].appendChild(createPar);
//     }
// }