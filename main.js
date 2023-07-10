let password1 = document.getElementById("password");
let password2 = document.getElementById("password2");
const characters = [
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
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
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
function randomNumbers() {
  return Math.floor(Math.random() * characters.length);
}
function genRandomPassword() {
  let val = document.getElementById("pass-length").value;
  let firstRandomNum = 0;
  let SecondRandomNum = 0;
  reset();
  for (let i = 0; i < val; i++) {
    firstRandomNum = randomNumbers();
    SecondRandomNum = randomNumbers();
    password1.textContent += characters[firstRandomNum];
    password2.textContent += characters[SecondRandomNum];
  }
}
function reset() {
  password1.textContent = "";
  password2.textContent = "";
}
