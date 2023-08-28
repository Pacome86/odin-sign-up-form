const password = document.querySelector('#password');
const checkPassword = document.querySelector('#match-pwd');
const pwdLabel = document.querySelector('#pwd-label');
const checkPwdLabel = document.querySelector('#check-pwd');
const userTel = document.querySelector('#user-tel')

// Phone number validation
userTel.addEventListener('input', () => {
    userTel.setCustomValidity(''); // To remove the default message
});

userTel.addEventListener('invalid', () => {
    //Custom validation message for invalid phone number
    userTel.setCustomValidity('The phone number must be at least 10 digits long.');
});

//Password validation
password.addEventListener('input', () => {
    password.setCustomValidity('') // To remove the default message
});

password.addEventListener('invalid', () => {
    //Custom validation message for invalid password
    password.setCustomValidity('Missing at least 1 capital letter, 1 digit or 1 special character.')

});

checkPassword.addEventListener('input', () => {
    if (password.value !== checkPassword.value) {
        checkPwdLabel.textContent = 'Passwords do not match';
    } else {
        checkPwdLabel.textContent = ' ';
        pwdLabel.textContent = " ";
    }
});
