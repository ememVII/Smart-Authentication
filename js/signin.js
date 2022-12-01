// SignIn Process
var signInMail = document.getElementById("signInMail");
var signInPass = document.getElementById("signInPass");
// signInResetFields
var signInForm = document.querySelectorAll("#signIn-form input")
// warningFields
var mailWarning = document.getElementById("mailWarning")
var passWarning = document.getElementById("passWarning")
var emptyWarning = document.getElementById("emptyWarning")
var loginSuccess = document.getElementById("loginSuccess")
var loginFailed = document.getElementById("loginFailed")
var welcomeUser = document.getElementById("welcomeUser")
// passToggler
var toggle = document.getElementById("eyeSlash")
// Regex
var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

var signInBtn = document.getElementById("signInBtn");

userDB = [];

// getUsersFromLocalStorage
if(JSON.parse(localStorage.getItem("users")) != null) {
    userDB = JSON.parse(localStorage.getItem("users"))
}

// signInProcess
function signIn() {
    for(var i=0; i<userDB.length; i++) {
        if(loginIsEmpty()) {
            emptyWarning.classList.replace("d-none", "d-block")
            if(loginSuccess.classList.contains('d-block')) {
                loginSuccess.classList.replace('d-block', 'd-none')
            }
        }
        else {
            emptyWarning.classList.replace("d-block", "d-none")
            if (userDB[i].mail.toLowerCase() == signInMail.value.toLowerCase() && userDB[i].pass == signInPass.value) {
                loginSuccess.classList.replace('d-none', 'd-block')
                clrForm()
                welcomeUser.classList.replace('d-none', 'd-block')
                welcomeUser.innerHTML = `Welcome ${userDB[i].name} in Homepage`
                loginFailed.classList.replace('d-block', 'd-none')
            } else {
                loginFailed.classList.replace('d-none', 'd-block')
            }
        }
    }
}
signInBtn.addEventListener('click', signIn);

// Clear Form
function clrForm() {
    for(var i=0; i < signInForm.length; i++) {
        signInForm[i].value = ''
    }
}

function loginIsEmpty() {
    if(signInMail.value == '' || signInPass.value == '') {
        return true;
    }
    else {
        return false;
    }
}

// Regex Validation
    // MailRegex
    signInMail.addEventListener('input', function() {
        var emailInput = signInMail.value;
        if(emailRegex.test(emailInput) == true) {
            signInMail.classList.add("is-valid");
            if(signInMail.classList.contains("is-invalid")) {
                signInMail.classList.replace("is-invalid", "is-valid")
            }
            mailWarning.classList.replace("d-block", "d-none")
            return true;
        }
        else {
            signInMail.classList.add("is-invalid");
            if(signInMail.classList.contains("is-valid")) {
                signInMail.classList.replace("is-valid", "is-invalid")
            }
            mailWarning.classList.replace("d-none", "d-block")
            return false;
        }
    });
    // PassRegex
    signInPass.addEventListener('input', function() {
        var passInput = signInPass.value;
        if(passRegex.test(passInput) == true) {
            signInPass.classList.add("is-valid")
            if(signInPass.classList.contains("is-invalid")) {
                signInPass.classList.replace("is-invalid", "is-valid")
            }
            passWarning.classList.replace('d-block', 'd-none')
            return true;
        }
        else {
            signInPass.classList.add("is-invalid");
            if(signInPass.classList.contains('is-valid')) {
                signInPass.classList.replace('is-valid', 'is-invalid')
            }
            passWarning.classList.replace('d-none', 'd-block')
            return false;
        }
    })

// passwordEyeToggler
    toggle.addEventListener('click', function() {
        if(signInPass.type === "password") {
            signInPass.type = "text";
            document.getElementById('eye').style.color = '#86b7fe';
        }
        else {
            signInPass.type = "password";
            document.getElementById('eye').style.color = '#3e4577';
        }
    })