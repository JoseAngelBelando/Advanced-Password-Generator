import {
  lengthInput,
  passwordInput,
  generateButton,
  uppercaseCheckbox,
  lowercaseCheckbox,
  numbersCheckbox,
  symbolsCheckbox,
  uppercaseChars,
  lowercaseChars,
  numberChars,
  symbolChars
} from './domUpdates.js';

const updateLengthValue = () => {
  const length = lengthInput.value;
  document.getElementById('lengthValue').textContent = length;
  checkButtonStatus();
  updateStrength();
  generatePassword();
};

const checkButtonStatus = () => {
  generateButton.disabled = lengthInput.value < 6;
};

const updateStrength = () => {
  const length = parseInt(lengthInput.value, 10);
  const strengthDisplay = document.getElementById('strength');
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

export { updateLengthValue, generatePassword };
