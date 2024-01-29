import emailValidation from "./utils/email-validation.js";
import nameValidation from "./utils/name-validation.js";
import contactValidation from "./utils/contact-validation.js";
import countryValidation  from "./utils/country-validation.js";


// BUTTONS
const   StepOneNext = document.getElementById('StepOneNext'),
        StepTwoPrevious = document.getElementById('StepTwoPrevious'),
        StepTwoNext = document.getElementById('StepTwoNext'),
        StepThreePrevious = document.getElementById('StepThreePrevious'),
        StepThreeSubmit = document.getElementById('StepThreeSubmit');


//INPUTS
const   firstName = document.getElementById('first_name'),
        email = document.getElementById('email'),
        contact = document.getElementById('contact'),
        country = document.getElementById('country');

//FIELD SETS
const   StepOneContainer = document.getElementById('StepOneContainer'),
        StepTwoContainer = document.getElementById('StepTwoContainer'),
        StepThreeContainer = document.getElementById('StepThreeContainer');


const selectProgram = document.getElementById('select_program');
const selectProgramError = document.getElementById('select_program_error');
const message = document.getElementById('message');
const messageError = document.getElementById('message_error');


StepOneNext.addEventListener('click', (e) => {
    e.preventDefault();

    const isNameValid = nameValidation(firstName.value);
    const isEmailValid = emailValidation(email.value);

    if (isNameValid && isEmailValid) {
        StepOneContainer.style.display = 'none';
        StepTwoContainer.style.display = 'block';
        StepThreeContainer.style.display = 'none';
    }
})


StepTwoPrevious.addEventListener('click', (e)  => {
    e.preventDefault();

    StepOneContainer.style.display = 'block';
    StepTwoContainer.style.display = 'none';
    StepThreeContainer.style.display = 'none';
})


StepTwoNext.addEventListener('click', (e) => {
    e.preventDefault();


    const isContactValid = contactValidation(contact.value);
    const isCountryValid = countryValidation(country.value);
   
    if (isContactValid && isCountryValid) {
        StepOneContainer.style.display = 'none';
        StepTwoContainer.style.display = 'none';
        StepThreeContainer.style.display = 'block';
    }
})


StepThreePrevious.addEventListener('click', (e)  => {
    e.preventDefault();

    StepOneContainer.style.display = 'none';
    StepTwoContainer.style.display = 'block';
    StepThreeContainer.style.display = 'none';
})


StepThreeSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    const fieldsToValidate = [
        { field: selectProgram, error: selectProgramError },
        { field: message, error: messageError }
    ];

    fieldsToValidate.forEach(({ field, error }) => {
        if (!field.value) {
            error.style.display = 'block';
        } else {
            error.style.display = 'none';
        }
    });

    const allFieldsValid = fieldsToValidate.every(({ field }) => field.value);

    if (allFieldsValid) {
        document.getElementById('MultiStepForm').style.display = 'none';
        document.getElementById('SuccessContainer').style.display = 'flex';
    }
})