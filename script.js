// Form DOM
var characterRangeEl = document.getElementById('characterRange')
var characterNumberEl = document.getElementById('characterNumber')
var formEl = document.getElementById('passwordGeneratorForm')
var includeLowerCaseEl = document.getElementById('includeLowerCase')
var includeUpperCaseEl = document.getElementById('includeUpperCase')
var includeNumbersEl = document.getElementById('includeNumbers')
var includeSpecialsEl = document.getElementById('includeSpecials')

// Generator functions DOM
var 

characterNumberEl.addEventListener('input', syncCharacterAmount)
characterRangeEl.addEventListener('input', syncCharacterAmount)

formEl.addEventListener('submit', e => {
  e.preventDefault()
  var characterAmount = characterNumber.value
  var includeLowerCase = includeLowerCaseEl.checked
  var includeUpperCase = includeUpperCaseEl.checked
  var includeNumbers = includeNumbersEl.checked
  var includeSpecials = includeSpecialsEl.checked
  var password = generatePassword(characterAmount, includeLowerCase, includeUpperCase, includeNumbers, includeSpecials)
})

function generatePassword(characterAmount, includeLowerCase, includeUpperCase, includeNumbers, includeSpecials) {
  
}

function syncCharacterAmount(e) {
  var value = e.target.value
  characterRange.value = value
  characterNumber.value = value
}




// Character Generator functions
function generateLowerCase() {
  return String.fromCharCode((Math.floor(Math.random() * 26)) + 97);
}

function generateUpperCase() {
  return String.fromCharCode((Math.floor(Math.random() * 26)) + 65);
}

function generateNumber() {
  return String.fromCharCode((Math.floor(Math.random() * 10)) + 48);
}

function generateSpecial() {
  const specials = '}{!@#$%^&*()*<>?~`/';
  return specials[Math.floor(Math.random() * specials.length)];
}
























// // DOM elements
// var resultEl = document.getElementById('#password');
// var lengthEl = document.getElementById('#password');
// var resultEl = document.getElementById('#password');
// var resultEl = document.getElementById('#password');

// const randomPassword = {
//   lowerCase: randomLowerCase,
//   upperCase: randomUpperCase,
//   number: randomNumber,
//   special: randomSpecial
// };

// generate.addEventListener("click", () = > {
//   const length = lengthEl.value;
//   console.log(typeof length);
// })


// 1. init pw var
// 2. filter out unselected types
// 3. loop over length call generator function for each type
// 4. add final pw to pw var and return it to the box


// Generate password Function
function generatePassword(lowerCase, upperCase, number, special, length) {

}

// Character Generator functions
function randomLowerCase() {
  return String.fromCharCode((Math.floor(Math.random() * 26)) + 97);
}

function randomUpperCase() {
  return String.fromCharCode((Math.floor(Math.random() * 26)) + 65);
}

function randomNumber() {
  return String.fromCharCode((Math.floor(Math.random() * 10)) + 48);
}

function randomSpecial() {
  const specials = '}{!@#$%^&*()*<>?~`/';
  return specials[Math.floor(Math.random() * specials.length)];
}

// function Concat() {
//   return String.concat(randomLowerCase(), randomUpperCase(), randomNumber(), randomSpecial());
// }

// console.log(Concat());

























// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = writePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// writePassword();

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);