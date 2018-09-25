'use strict';

// Form validation
var formValidation = function formValidation() {
    var emailField = document.getElementById('emailField');
    var emailValue = document.getElementById('emailField').value;
    var atpos = emailValue.indexOf("@");
    var dotpos = emailValue.lastIndexOf(".");
    //Message container
    var msgContainer = document.getElementById("message-container");
    //Error container
    var errorMsg = document.getElementById('errorMessage');
    //Success container
    var successMsg = document.getElementById('successMessage');

    //Check if the input field is empty
    if (emailValue === '') {
        msgContainer.classList.remove('hide');
        errorMsg.innerHTML = "<p>Email input is empty! Please provide an email address!</p>";
        emailField.focus();
        return false;
    }
    //Check for correct email input - with @ and .
    else if (atpos < 1 || dotpos - atpos < 2) {
            msgContainer.classList.remove('hide');
            errorMsg.innerHTML = "<p>Please provide a valid email address!</p>";
            emailField.focus();
            return false;
        }
        // Form succeeded
        else {
                msgContainer.classList.remove('hide');
                errorMsg.innerHTML = "";
                successMsg.innerHTML = "<p>Congratulations! You subscribed to our weekly newsletter!</p>";
                msgContainer.classList.add("hide");
                msgContainer.classList.add('showMsg');
                return true;
            }
};