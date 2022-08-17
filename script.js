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
var characters = []
//var characters = ["a","b","c","d","e","f","g","h","i","j","k",
//"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
//"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
//"P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3",
//"4","5","6","7","8","9","!","@","#","$","%","&","*","/","?",
//"'","(",")","+","-",",",".",":",";","<",">","=","[","]","^",
//"_","`","~","{","}","|"]
var pLength = 0;
var password = "";
var confUpper;
var confLower;
var confNumbers;
var confSymbols;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); 

// Write password to the #password input
function writePassword() {
  var pLength = window.prompt("Please select Password length between 8 - 128");
if (pLength < 8 ||
  pLength > 128) {
alert("Please try again must be a number between 8 and 128");
  } else {
   alert("Thank you your pass word length is " + pLength + " characters");
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
   if (!(confUpper || confLower || confNumbers || confSymbols)) {
    alert("You must select at least one character type")
   }
  }
     for (var i = 0; i < pLength; i++) {
      password += characters[Math.floor(Math.random() * characters.length)];
     }
 // var password = generatePassword(); 
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
return password;
    }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

