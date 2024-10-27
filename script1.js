function fnValidateSignUpForm() {
    let fname = document.getElementById("firstname").value;
    let lastName = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("cpassword").value;
    
    let validateFname = validateFields(fname);
    let validateLastName = validateFields(lastName);

}

function validateFields(inputValue) {
    if (inputValue.length >= 5) {
        console.log("valid");
    } else {
        console.log("invalid");
    }
}