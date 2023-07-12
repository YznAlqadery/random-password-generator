let firstPassword = document.getElementById("password");
let secondPassword = document.getElementById("password2");
let numberCb = document.getElementById("numbers");
let characterCb = document.getElementById("characters");
const characters = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "_",
  "-",
  ",",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const alphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
function randomNumbers(passwordArray) {
  return Math.floor(Math.random() * passwordArray.length);
}
function getFinalPassword(passwordArray) {
  let rngVal = document.getElementById("pass-length").value;
  let rndmNumber = 0;
  let finalPassword = "";
  resetPassword();
  for (let i = 0; i < rngVal; i++) {
    rndmNumber = randomNumbers(passwordArray);
    finalPassword += passwordArray[rndmNumber];
  }
  return finalPassword;
}
function resetPassword() {
  firstPassword.textContent = "";
  secondPassword.textContent = "";
}
function generatePassword() {
  let passwordArray = alphabets;
  let numbersChecked = numberCb.checked;
  let characterChecked = characterCb.checked;
  if (numbersChecked) {
    passwordArray = passwordArray.concat(numbers);
  }
  if (characterChecked) {
    passwordArray = passwordArray.concat(characters);
  }

  let firstPass = getFinalPassword(passwordArray);
  let scndPass = getFinalPassword(passwordArray);
  firstPassword.textContent = firstPass;
  secondPassword.textContent = scndPass;
}
