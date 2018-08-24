$(document).ready(function() {

// Create variables
let wins = 0;
let losses = 0;
let min = 19;
let max = 121;
let crymin = 1;
let crymax = 12;
let yourScoreTotal;
let randomNumber;
let randomCrystalOne;
let randomCrystalTwo;
let randomCrystalThree;
let randomCrystalFour;


// Initializing the game
function initializeGame(){
   
// Reset yourTotalScore to zero
yourScoreTotal = 0;
$(".yourScore").html(yourScoreTotal);

// Generates random number between 19-120
randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
$(".random").html(randomNumber);

// Generates random number for crystals between 1-12
randomCrystalOne = Math.floor(Math.random() * (crymax - crymin + 1)) + crymin;
    $(".firstbutton").val(randomCrystalOne);
randomCrystalTwo = Math.floor(Math.random() * (crymax - crymin + 1)) + crymin;    
    $(".secondbutton").val(randomCrystalTwo);
randomCrystalThree = Math.floor(Math.random() * (crymax - crymin + 1)) + crymin;    
    $(".thirdbutton").val(randomCrystalThree);
randomCrystalFour = Math.floor(Math.random() * (crymax - crymin + 1)) + crymin;    
    $(".fourthbutton").val(randomCrystalFour);

// End of initialize game function
}

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

// If/else statement to increment wins and losses then re-initialize game
function checkScore() {

    if (yourScoreTotal === randomNumber){
        wins++;
        $(".winTotal").html(wins);
        $(".firstbutton").val('');
        $(".secondbutton").val('');
        $(".thirdbutton").val('');
        $(".fourthbutton").val('');
        $(".random").val('');
        initializeGame();
        
    }
    if (yourScoreTotal > randomNumber){
        losses++;
        $(".lossTotal").html(losses);
        $(".firstbutton").val('');
        $(".secondbutton").val('');
        $(".thirdbutton").val('');
        $(".fourthbutton").val('');
        $(".random").val('');
        initializeGame();
    }
}
   
initializeGame();




// End of document.ready 
});
