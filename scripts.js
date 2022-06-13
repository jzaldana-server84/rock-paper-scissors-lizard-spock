//Options Set (Three to begin)
const options = ["Rock", "Paper", "Scissors"]
let mySelection;
let aiSelection;
let result;
let humanScore = 0;
let aiScore = 0;
let finalScore = 0;

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

    if (aiScore > humanScore) {finalScore = "AI won the game!"}
    else if (aiScore < humanScore) {finalScore = "Human won the game"}
    else {finalScore = "It's a tie this time!"} 
};

//Function to run the times the game
const game = function(aiSelection){

    for (let i = 0; i<5; i++){
        
        //Asking to the user the option to choice
        mySelection = prompt("Select your choice"); 
        
        //Calling comparison
        comparison (mySelection, aiSelection);
        console.log(result);
   
    }
};


//Calling functions
aiSelection = randomSelection(options);
game(aiSelection);
console.log(`Final score! Humans: ${humanScore} AI: ${aiScore}. ${finalScore}`);

//Log into the console
//console.log(aiSelection);
//console.log(mySelection);
