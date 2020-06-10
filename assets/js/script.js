//
// Functionality to get slider bar working and synced with the text box
//
var characterRangeEl = document.getElementById('characterRange')
var characterNumberEl = document.getElementById('characterNumber')
characterNumberEl.addEventListener('input', syncCharacterAmount);
characterRangeEl.addEventListener('input', syncCharacterAmount);

function syncCharacterAmount(e) {
  var value = e.target.value
  characterRange.value = value
  characterNumber.value = value
}


// DOM elements
var finalEl = document.getElementById('password');
var lengthEl = document.getElementById('characterNumber');
var uppercaseEl = document.getElementById('includeUpperCase');
var lowercaseEl = document.getElementById('includeLowerCase');
var numbersEl = document.getElementById('includeNumbers');
var specialsEl = document.getElementById('includeSpecials');
var generateEl = document.getElementById('generate');

var criteria = {
  lower: generateLowerCase,
  upper: generateUpperCase,
  number: generateNumber,
  special: generateSpecial,
  length: characterNumberEl
};

// Generate event listen
generateEl.addEventListener('click', () => {
  var length = +lengthEl.value;
  var hasLower = lowercaseEl.checked;
  var hasUpper = uppercaseEl.checked;
  var hasNumbers = numbersEl.checked;
  var hasSpecials = specialsEl.checked;

  finalEl.innerText = generatePassword(hasLower, hasUpper, hasNumbers, hasSpecials, length);
})


//
// Generate password function
//
function generatePassword(lower, upper, number, special, length) {
  var generatedPassword = '';
  var typesCount = lower + upper + number + special;
  var typesArray = [{ lower }, { upper }, { number }, { special }].filter (
    item => Object.values(item)[0]
  );

  if(typesCount === 0) {
    return '';
  }

  for(var i = 0; i < length; i += typesCount) {
    typesArray.forEach(type => {
      var funcName = Object.keys(type)[0];

      generatedPassword += criteria[funcName]();
    })
  }

  var finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}


//
// Character Generator functions
//
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
  var specials = '}{!@#$%^&*()*<>?~`/';
  return specials[Math.floor(Math.random() * specials.length)];
}
