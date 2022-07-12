//Options Set (Three to begin)
const options = ["Rock", "Paper", "Scissors"]
let mySelection;
let aiSelection;
let result;
let humanScore = 0;
let aiScore = 0;
let finalScore = 0;
let flag = 0;
let modalToOpen = "";

const rockWeapon = document.getElementById('Rock');
const paperWeapon = document.getElementById('Paper');
const scissorsWeapon = document.getElementById('Scissors');
const modal = document.getElementById('modal');
const modal2 = document.getElementById('modal2');
const overlay = document.getElementById('overlay');
const resetBtn = document.querySelectorAll('.close-button-inside');
const closeBtn = document.querySelectorAll('.close-button');
//const modal3 = document.getElementById('modal3');



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

    document.getElementById('messages').innerHTML = `${result}`;

    //if (aiScore > humanScore) {finalScore = "AI won the game!"}
    //else if (aiScore < humanScore) {finalScore = "Human won the game"}
    //else {finalScore = "It's a tie this time!"} 
};

function reply_click(clicked_id)
  {
    if (flag == 0) {
        aiSelection = randomSelection(options);
        mySelection = clicked_id;
        comparison (mySelection, aiSelection);
        document.getElementById('human-score').innerHTML = `${humanScore}`;
        document.getElementById('ai-score').innerHTML = `${aiScore}`;
        
        if (aiScore == 5 || humanScore == 5) {
            flag = 1;
            if (aiScore > humanScore) 
            {
                document.getElementById('messages').innerHTML = "AI won the game!";
                openModal(modal);
                modalToOpen = modal;
            }
            else {
                document.getElementById('messages').innerHTML = "Human won the game!";
                openModal(modal2);
                modalToOpen = modal2;
            }
        }
    } else {
        openModal(modalToOpen);
    }
  }

function openModal(modal) {
    if (modal ==  null) return
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if (modal ==  null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

function reset(modal) {
    if (modal ==  null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');
    humanScore = 0;
    aiScore = 0;
    finalScore = 0;
    flag = 0;
    document.getElementById('messages').innerHTML = "";
    document.getElementById('human-score').innerHTML = 0;
    document.getElementById('ai-score').innerHTML = 0;
}

// Calling functions for buttons

/* const rockWeapon = document.getElementById('rock');
const paperWeapon = document.getElementById('paper');
const scissorsWeapon = document.getElementById('scirssors');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay'); */

rockWeapon.addEventListener('click', function() {
    reply_click(rockWeapon.id);
});

paperWeapon.addEventListener('click', function() {
    reply_click(paperWeapon.id);
});

scissorsWeapon.addEventListener('click', function() {
    reply_click(scissorsWeapon.id);
});

resetBtn[0].addEventListener('click', function() {
    reset(modal);
});

closeBtn[0].addEventListener('click', function() {
    closeModal(modal);    
});

resetBtn[1].addEventListener('click', function() {
    reset(modal2);
});

closeBtn[1].addEventListener('click', function() {
    closeModal(modal2);    
});

//aiSelection = randomSelection(options);
//game(aiSelection);
//console.log(`Final score! Humans: ${humanScore} AI: ${aiScore}. ${finalScore}`);

//Log into the console
//console.log(aiSelection);
//console.log(mySelection);
