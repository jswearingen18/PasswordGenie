// Assignment code here

// Key for shorthand
// conf = Confirm
// r = Random
// p = Password

// lowerAlphabet Array contains lowercase letters
var lowerAlphabet = ["a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
// upperAlphabet Array contains uppercase letters
var upperAlphabet = ["A","B","C","D","E","F","G","H","I","J","K",
"L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
// numbers Array contains numbers
var numbers = ["0","1","2","3","4","5","6","7","8","9"]
// symbols Array contains symbols
var symbols = ["!","@","#","$","%","&","*","/","?","'","(",")",
"+","-",",",".",":",";","<",">","=","[","]","^","_","`","~",
"{","}","|"]
// empty array to be able to concat other arrays into this
var characters = []
// variable for password length
var pLength = 0;
// variable to capture and store password
var password = "";
// variables for the confirmation windows of what characters user would like to use
var confUpper;
var confLower;
var confNumbers;
var confSymbols;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); 
// Write password to the #password input
function writePassword() {
  // call empty array again to empty characters array before the function 
  characters = [];
  // Prompt for user to select how many characters they would like in their password
  var pLength = window.prompt("Please select Password length between 8 - 128");
  // if statement to ensure user meets the min max requirements of the password
  // contains an alert in case they enter 7 or less or more then 128 
if (pLength < 8 ||
  pLength > 128) {
alert("Please try again must be a number between 8 and 128");
// else statement with an alaert informing and confirming the password length 
  } else {
   alert("Thank you your pass word length is " + pLength + " characters");
// confirmation windows for character types allowing the usser to choose which arrays they would like to pull from
   var confUpper = confirm("Would user like Upper case Characters?");
   if (confUpper) {
    characters = upperAlphabet.concat(characters);
   }
   var confLower = confirm("Would user like lower case Characters?");
   if (confLower) {
    characters = lowerAlphabet.concat(characters);
   }
   var confNumbers = confirm("Would user like numeral Characters?");
   if (confNumbers) {
    characters = numbers.concat(characters)
   }
   var confSymbols = confirm("Would user like symbol characters?");
   if (confSymbols) {
    characters = symbols.concat(characters)
   }
// alert window for if they choose none of the character types since this would not generate a viable password
   if (!(confUpper || confLower || confNumbers || confSymbols)) {
    alert("You must select at least one character type")
   }
  }
  // This for statement generates the password
     for (var i = 0; i < pLength; i++) {
      password += characters[Math.floor(Math.random() * characters.length)];
     }
 // allows the system to store the array as password
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  // returns password inside of text box
return password;
    }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
