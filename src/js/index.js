// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

import {
  lengthInput,
  generateButton,
  uppercaseCheckbox,
  lowercaseCheckbox,
  numbersCheckbox,
  symbolsCheckbox
  // uppercaseChars,
  // lowercaseChars,
  // numberChars,
  // symbolChars
} from './domUpdates.js';

import { updateLengthValue, generatePassword } from './passwordGenerator.js';

document.addEventListener('DOMContentLoaded', () => {
  lengthInput.addEventListener('input', updateLengthValue);
  generateButton.addEventListener('click', generatePassword);

  const checkboxes = [uppercaseCheckbox, lowercaseCheckbox, numbersCheckbox, symbolsCheckbox];
  checkboxes.forEach(checkbox => checkbox.addEventListener('change', generatePassword));

  updateLengthValue();
});
