$(document).ready(function() {

// Create variables
let wins = 0;
let losses = 0;
let min = 19;
let max = 121;
let crymin = 1;
let crymax = 12;
let yourScoreTotal = 0;
let randomNumber;


// Initializing the game
function initializeGame(){

// Generates random number between 19-120
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
$(".random").html(randomNumber);

// Generates random number for crystals between 1-12
let randomCrystalOne = Math.floor(Math.random() * (crymax - crymin + 1)) + crymin;
    $(".firstbutton").val(randomCrystalOne);
let randomCrystalTwo = Math.floor(Math.random() * (crymax - crymin + 1)) + crymin;    
    $(".secondbutton").val(randomCrystalTwo);
let randomCrystalThree = Math.floor(Math.random() * (crymax - crymin + 1)) + crymin;    
    $(".thirdbutton").val(randomCrystalThree);
let randomCrystalFour = Math.floor(Math.random() * (crymax - crymin + 1)) + crymin;    
    $(".fourthbutton").val(randomCrystalFour);


// Add event handler to click event on each crystal
$(".firstbutton").on("click", function() {
    $(".yourScore").html(yourScoreTotal += randomCrystalOne);
    checkScore();
    });
   
$(".secondbutton").on("click", function() {
    $(".yourScore").html(yourScoreTotal += randomCrystalTwo);
    checkScore();
   });

$(".thirdbutton").on("click", function() {
    $(".yourScore").html(yourScoreTotal += randomCrystalThree);
    checkScore();
   });

$(".fourthbutton").on("click", function() {
    $(".yourScore").html(yourScoreTotal += randomCrystalFour);
    checkScore();
   });  

// If/else statement to increment wins and losses
function checkScore() {

    if (yourScoreTotal === randomNumber){
        wins++;
        $(".winTotal").html(wins);
    }
    if (yourScoreTotal > randomNumber){
        losses++;
        $(".lossTotal").html(losses);
    }
}
   
// End of initialize game function
}

initializeGame();

// End of document.ready 
});