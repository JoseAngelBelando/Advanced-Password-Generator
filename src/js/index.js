// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

document.addEventListener('DOMContentLoaded', () => {
  const passwordInput = document.getElementById('password');
  const lengthInput = document.getElementById('length');
  const lengthValue = document.getElementById('lengthValue');
  const generateButton = document.getElementById('generate');
  const strengthDisplay = document.getElementById('strength');

  const uppercaseCheckbox = document.getElementById('uppercase');
  const lowercaseCheckbox = document.getElementById('lowercase');
  const numbersCheckbox = document.getElementById('numbers');
  const symbolsCheckbox = document.getElementById('symbols');

  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_+-={}[]:;<>,.?/';

  const updateLengthValue = () => {
    const length = lengthInput.value;
    lengthValue.textContent = length;
    checkButtonStatus();
    updateStrength();
    generatePassword();
  };

  const checkButtonStatus = () => {
    generateButton.disabled = lengthInput.value < 6;
  };

  const updateStrength = () => {
    const length = parseInt(lengthInput.value, 10);
    if (length <= 5) {
      strengthDisplay.textContent = 'TOO SHORT';
    } else if (length <= 9) {
      strengthDisplay.textContent = 'WEAK';
    } else if (length <= 14) {
      strengthDisplay.textContent = 'MEDIUM';
    } else {
      strengthDisplay.textContent = 'STRONG';
    }
  };

  const generatePassword = () => {
    const length = parseInt(lengthInput.value, 10);
    let characters = '';
    if (uppercaseCheckbox.checked) characters += uppercaseChars;
    if (lowercaseCheckbox.checked) characters += lowercaseChars;
    if (numbersCheckbox.checked) characters += numberChars;
    if (symbolsCheckbox.checked) characters += symbolChars;

    if (characters.length === 0) {
      passwordInput.value = '';
      return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    passwordInput.value = password;
  };

  lengthInput.addEventListener('input', updateLengthValue);
  generateButton.addEventListener('click', generatePassword);

  const checkboxes = [uppercaseCheckbox, lowercaseCheckbox, numbersCheckbox, symbolsCheckbox];
  checkboxes.forEach(checkbox => checkbox.addEventListener('change', generatePassword));

  updateLengthValue();
});
