let formLogIn = document.querySelector("form[name='formLogIn']");
let formForgot = document.querySelector("form[name='formForgot']");
let formCreateNewAccount = document.querySelector("form[name='formCreateNewAccount']");

let inputNewPassword = document.querySelector("input[name='inputNewPassword']");
let inputConfirmPassword = document.querySelector("input[name='inputConfirmPassword']");

let emailInput = document.querySelector("input[name='emailInput']");
let passwordInput = document.querySelector("input[name='passwordInput']");

let titleClose = document.querySelectorAll(".titleClose");
inputConfirmPassword.addEventListener("input", (event) => {
    checkPasswords();
})

function checkPasswords() {
    if (inputNewPassword.value !== inputConfirmPassword.value) {
        inputConfirmPassword.setCustomValidity("Different passwords! Try again");
    } else {
        inputConfirmPassword.setCustomValidity("");
    }
}

formForgot.addEventListener("submit", () => {
    formForgot.style.display = "none";
    formLogIn.classList.toggle("formLogInHidden");
})
formCreateNewAccount.addEventListener("submit", () => {
    console.log(emailInput);
    formCreateNewAccount.style.display = "none";
    formLogIn.classList.toggle("formHidden");
})


let aForgotEmailPassword = document.querySelector(".aForgotEmailPassword");
aForgotEmailPassword.addEventListener("click", (event) => {
    emailInput.value = "";
    passwordInput.value = "";
    formForgot.style.display = "flex";
    formLogIn.classList.add("formHidden");
})

let aCreateAccount = document.querySelector(".aCreateAccount");
aCreateAccount.addEventListener("click", (event) => {
    emailInput.value = "";
    passwordInput.value = "";
    formCreateNewAccount.style.display = "flex";
    formLogIn.classList.add("formHidden");
})

titleClose.forEach(title => {
    title.addEventListener("click", (event) => {
        formForgot.style.display = "none";
        formCreateNewAccount.style.display = "none";
        formLogIn.classList.toggle("formHidden");
    })
})

