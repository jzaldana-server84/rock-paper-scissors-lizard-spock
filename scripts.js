//Options Set (Three to begin)
const options = ["Rock", "Paper", "Scissors"]
let mySelection;
let aiSelection;
let result;
let humanScore = 0;
let aiScore = 0;
let finalScore = 0;

const rockWeapon = document.getElementById('rock');
        const paperWeapon = document.getElementById('paper');
        const scissorsWeapon = document.getElementById('scirssors');

//Select a random option from the array "Options"
function randomSelection(options){
    return options[Math.floor(Math.random()*options.length)];
}

//Fuction to compare AI selection and mine
const comparison = function(mySelection, aiSelection){

    switch(mySelection) {
        case "Rock":
            if (aiSelection == "Scissors") {
                result = "Human wins!";
                humanScore++;     
            } else if (aiSelection == "Paper") {
                result = "AI wins!";
                aiScore++;
            } else {
                result = "It's a tie!";
            }
        break;

        case "Scissors":
            if (aiSelection == "Paper") {
                result = "Human wins!"; 
                humanScore++;    
            } else if (aiSelection == "Rock") {
                result = "AI wins!";
                aiScore++;
            } else {
                result = "It's a tie!";
            }
        break;

        case "Paper":
            if (aiSelection == "Rock") {
                result = "Human wins!";
                humanScore++;     
            } else if (aiSelection == "Scissors") {
                result = "AI wins!";
                aiScore++;
            } else {
                result = "It's a tie!";
            }
        break;

        Default: 
            result = "No information added";
    
    }

    //if (aiScore > humanScore) {finalScore = "AI won the game!"}
    //else if (aiScore < humanScore) {finalScore = "Human won the game"}
    //else {finalScore = "It's a tie this time!"} 

   
};

function reply_click(clicked_id)
  {
    
    aiSelection = randomSelection(options);
    mySelection = clicked_id;
    comparison (mySelection, aiSelection);
    document.getElementById('human-score').innerHTML = `${humanScore}`;
    document.getElementById('ai-score').innerHTML = `${aiScore}`;
    
    if (aiScore == 5 || humanScore == 5) {
        if (aiScore > humanScore) {alert("AI won the game!")}
        else if (aiScore < humanScore) {alert("Human won the game")}
        else {alert("It's a tie this time!")} 
    }
  }

//Calling functions
//aiSelection = randomSelection(options);
//game(aiSelection);
//console.log(`Final score! Humans: ${humanScore} AI: ${aiScore}. ${finalScore}`);

//Log into the console
//console.log(aiSelection);
//console.log(mySelection);
