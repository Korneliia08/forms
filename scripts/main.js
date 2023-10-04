let formLogIn = document.querySelector("form[name='formLogIn']");
let formForgot = document.querySelector("form[name='formForgot']");
let formCreateNewAccount = document.querySelector("form[name='formCreateNewAccount']");

let inputNewPasswordChangeForm = document.querySelector("input[name='inputNewPasswordChangeForm']");
let inputConfirmPasswordChangeForm = document.querySelector("input[name='inputConfirmPasswordChangeForm']");
let inputNewPasswordCreateForm = document.querySelector("input[name='inputNewPasswordCreateForm']");
let inputConfirmPasswordCreateForm = document.querySelector("input[name='inputConfirmPasswordCreateForm']");

let emailInput = document.querySelector("input[name='emailInput']");
let passwordInput = document.querySelector("input[name='passwordInput']");

let titleClose = document.querySelectorAll(".titleClose");

inputConfirmPasswordChangeForm.addEventListener("input", (event) => {
    checkPasswords(inputNewPasswordChangeForm, inputConfirmPasswordChangeForm);
})
inputNewPasswordChangeForm.addEventListener("input", (event) => {
    checkPasswords(inputNewPasswordChangeForm, inputConfirmPasswordChangeForm);
})

inputNewPasswordCreateForm.addEventListener("input", (event) => {
    checkPasswords(inputNewPasswordCreateForm, inputConfirmPasswordCreateForm);
})
inputConfirmPasswordCreateForm.addEventListener("input", (event) => {
    checkPasswords(inputNewPasswordCreateForm, inputConfirmPasswordCreateForm);
})


function checkPasswords(field1, field2) {
    if (field1.value !== field2.value) {
        field2.setCustomValidity("Different passwords! Try again");
    } else {
        field2.setCustomValidity("");
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

