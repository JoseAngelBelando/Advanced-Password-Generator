const lengthInput = document.getElementById('length');
const passwordInput = document.getElementById('password');
const generateButton = document.getElementById('generate');

const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');

const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+-={}[]:;<>,.?/';

export {
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
};
