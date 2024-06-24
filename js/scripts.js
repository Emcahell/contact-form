document.addEventListener("DOMContentLoaded", () =>{  
    const form = document.getElementById("form");

    const textInput1 = document.getElementById("text-input1");
    const textInput2 = document.getElementById("text-input2");
    const emailInput = document.getElementById("email-input");
    const textareaInput = document.getElementById("textarea-input");
    const checkboxInput = document.getElementById("checkbox-input");

    const textError1 = document.getElementById("text-error1");
    const textError2 = document.getElementById("text-error2");
    const emailError = document.getElementById("email-error");
    const textareaError = document.getElementById("textarea-error");
    const checkboxError = document.getElementById("checkbox-error"); 
    
    const emailPattern = /^[a-z0-9]+(\.[a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

    form.addEventListener("submit", (e) =>{
        e.preventDefault();
        validateForm();
    });

    const validateForm = () =>{
        let valid = true;

        if (textInput1.value.trim() === "") {
            textInput1.classList.add("input-error");
            textError1.textContent = "This field is required";
            textError1.style.display = "block";
            valid = false;
        } else {
            textInput1.classList.remove("input-error");
            textError1.style.display = "none";
        }

        if (textInput2.value.trim() === "") {
            textInput2.classList.add("input-error");
            textError2.textContent = "This field is required";
            textError2.style.display = "block";
            valid = false;
        } else {
            textInput2.classList.remove("input-error");
            textError2.style.display = "none";
        }

        if (!emailPattern.test(emailInput.value.trim())) {
            emailInput.classList.add("input-error");
            emailError.textContent = "Please enter a valid email address";
            emailError.style.display = "block";
            valid = false;
        } else {
            emailInput.classList.remove("input-error");
            emailError.style.display = "none";
        }

        if (textareaInput.value.trim() === "") {
            textareaInput.classList.add("input-error");
            textareaError.textContent = "This field is required";
            textareaError.style.display = "block";
            valid = false;
        } else {
            textareaInput.classList.remove("input-error");
            textareaError.style.display = "none";
        }

        if (!checkboxInput.checked) {
            checkboxError.textContent = "To submit this form, please consent to being contacted";
            checkboxError.style.display = "block";
            valid = false;
        } else {
            checkboxError.style.display = "none";
        }

        if (valid) {
            form.submit();
        }
    }


});
