// Form validation
const formValidation = () => {
    const emailField = document.getElementById('emailField');
    const emailValue = document.getElementById('emailField').value;
    const atpos = emailValue.indexOf("@");
    const dotpos = emailValue.lastIndexOf(".");
    //Message container
    const msgContainer = document.getElementById("message-container");
    //Error container
    const errorMsg = document.getElementById('errorMessage');
    //Success container
    const successMsg = document.getElementById('successMessage'); 

    //Check if the input field is empty
    if(emailValue === ''){
        msgContainer.classList.remove('hide');  
        errorMsg.innerHTML = "<p>Email input is empty! Please provide an email address!</p>";
        emailField.focus();
        return false;
    }
    //Check for correct email input - with @ and .
    else if(atpos < 1 || (dotpos - atpos < 2)){
        msgContainer.classList.remove('hide');  
        errorMsg.innerHTML = "<p>Please provide a valid email address!</p>";
        emailField.focus();
        return false;
    }
    // Form succeeded
    else{
        msgContainer.classList.remove('hide');        
        errorMsg.innerHTML = "";
        successMsg.innerHTML = "<p>Congratulations! You subscribed to our weekly newsletter!</p>";
        msgContainer.classList.add("hide");
        msgContainer.classList.add('show'); 
        return true;
    }
   
}
