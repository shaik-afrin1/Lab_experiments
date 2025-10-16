const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const phoneField = document.getElementById('phone');
const form = document.getElementById('registrationForm');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const phoneError = document.getElementById('phoneError');
const successMsg = document.getElementById('successMsg');

function validateName() {
    if (nameField.value.trim() === "") {
        nameError.textContent = "Full name is required."; nameField.classList.add('invalid'); nameField.classList.remove('valid'); return false;
    }
    nameError.textContent = ""; nameField.classList.add('valid'); nameField.classList.remove('invalid'); return true;
}
function validateEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailField.value.trim() === "") {
        emailError.textContent = "Email is required."; emailField.classList.add('invalid'); emailField.classList.remove('valid'); return false;
    }
    if (!regex.test(emailField.value)) {
        emailError.textContent = "Please enter a valid email address."; emailField.classList.add('invalid'); emailField.classList.remove('valid'); return false;
    }
    emailError.textContent = ""; emailField.classList.add('valid'); emailField.classList.remove('invalid'); return true;
}
function validatePassword() {
    const val = passwordField.value;
    if (val === "") {
        passwordError.textContent = "Password is required."; passwordField.classList.add('invalid'); passwordField.classList.remove('valid'); return false;
    }
    if (val.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters."; passwordField.classList.add('invalid'); passwordField.classList.remove('valid'); return false;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(val)) {
        passwordError.textContent = "Password must include a special character."; passwordField.classList.add('invalid'); passwordField.classList.remove('valid'); return false;
    }
    passwordError.textContent = ""; passwordField.classList.add('valid'); passwordField.classList.remove('invalid'); return true;
}
function validatePhone() {
    const regex = /^[0-9]{10}$/;
    if (phoneField.value.trim() === "") {
        phoneError.textContent = "Phone number is required."; phoneField.classList.add('invalid'); phoneField.classList.remove('valid'); return false;
    }
    if (!regex.test(phoneField.value)) {
        phoneError.textContent = "Please enter a valid 10-digit phone number."; phoneField.classList.add('invalid'); phoneField.classList.remove('valid'); return false;
    }
    phoneError.textContent = ""; phoneField.classList.add('valid'); phoneField.classList.remove('invalid'); return true;
}

nameField.addEventListener("input", validateName);
emailField.addEventListener("input", validateEmail);
passwordField.addEventListener("input", validatePassword);
phoneField.addEventListener("input", validatePhone);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = validateName() & validateEmail() & validatePassword() & validatePhone();
    if (valid) {
        successMsg.textContent = "Registration successful!";
        form.reset();
        [nameField, emailField, passwordField, phoneField].forEach(el => el.classList.remove('valid'));
    } else {
        successMsg.textContent = "";
    }
});
