// Create variables
let wins = 0;
let losses = 0;
let min = 19;
let max = 121;
let crymin = 1;
let crymax = 12;

// Generates random number between 19-120
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.querySelector(".random").innerHTML = randomNumber;

// Generates random number for crystals between 1-12
var randomCrystal = Math.floor(Math.random() * (crymax - crymin + 1)) + crymin;
    document.querySelector("#").innerHTML = randomCrystal;

//   function initializeGame(){
    
     
//   initializeGame();

 