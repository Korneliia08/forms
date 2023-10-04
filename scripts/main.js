let formLogIn = document.querySelector("form[name='formLogIn']");
let formForgot = document.querySelector("form[name='formForgot']");
let formCreateNewAccount = document.querySelector("form[name='formCreateNewAccount']");

let inputNewPassword = document.querySelector("input[name='inputNewPassword']");
let inputConfirmPassword = document.querySelector("input[name='inputConfirmPassword']");
let inputCreate = document.querySelector("input[name='inputCreate']");

// formForgot.addEventListener("change", checkPassword);

formForgot.addEventListener("submit", () => {
    formForgot.style.display = "none";
    formLogIn.classList.toggle("formLogInHidden");
})
formCreateNewAccount.addEventListener("submit", () => {
    formCreateNewAccount.style.display = "none";
    formLogIn.classList.toggle("formHidden");
})


let aForgotEmailPassword = document.querySelector(".aForgotEmailPassword");
aForgotEmailPassword.addEventListener("click", (event) => {
    formForgot.style.display = "flex";
    formLogIn.classList.add("formHidden");
})

let aCreateAccount = document.querySelector(".aCreateAccount");
aCreateAccount.addEventListener("click", (event) => {
    formCreateNewAccount.style.display = "flex";
    formLogIn.classList.add("formHidden");
})


// function checkPassword(event) {
//     let nameOfInput = event.target.name;
//     if (nameOfInput === "inputNewPassword" || nameOfInput === "inputConfirmPassword") {
//
//     }
// }





