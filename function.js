var emailField = document.getElementById("email-field");
var emailError = document.getElementById("email-error");
var iconImage = document.getElementById("icon");

function validateEmail() {
    if (!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Please provide a valid email";
        emailError.style.marginTop = "5px";
        emailField.style.caretColor = "hsl(0, 93%, 68%)";
        emailField.style.borderColor = " hsl(0, 93%, 68%)";
        iconImage.style.display = "block"
        return false;
    }

    emailError.innerHTML = "";
    emailField.style.borderColor = "limegreen";
    emailError.style.marginTop = "-5px";
    emailField.style.caretColor = "limegreen";
    iconImage.style.display = "none"
    return true;
}
