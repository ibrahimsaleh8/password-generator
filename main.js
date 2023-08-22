let passBox = document.getElementById("password");
let copyingText = document.querySelector(".copying");
function copy() {
  passBox.select();
  navigator.clipboard.writeText(passBox.value);
  copyingText.style.display = "inline";
  copyingText.style.transition = "0.3s";
  setTimeout(() => {
    copyingText.style.transition = "0.3s";
    copyingText.style.display = "none";
  }, 1000);
}
let theLength = 12;
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "1234567890";
let symbols = "@#!$%^&*()_+-[]{}/<=>";
let chars = upperCase + lowerCase + number + symbols;
function generatePass() {
  let password = "";
  while (theLength > password.length) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  passBox.value = password;
}
