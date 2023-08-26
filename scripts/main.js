const choicesArray = ['rock', 'paper', 'scissors'];
const results = document.querySelector('#results');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const buttons = document.querySelectorAll('.selection-button');
const playerSelectionUI = document.querySelector('#player-selection');
const computerSelectionUI = document.querySelector('#computer-selection');

// Function that selects a random choice from the choices array for the computer  
const getComputerChoice = (array) => array[(Math.floor(Math.random() * array.length))];

// Fucntion to reset the values when a game is finished 
const resetValues = () => {
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    playerSelectionUI.textContent = 'Selection';
    computerSelectionUI.textContent = 'Selection';
    results.textContent = 'Make your choice';
};

// Function to get the winner of each round and update the points of each player
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        results.textContent = 'tie';
    } else if (
        ((playerSelection == choicesArray[0]) && (computerSelection == choicesArray[2])) || 
        ((playerSelection == choicesArray[1]) && (computerSelection == choicesArray[0])) ||
        ((playerSelection == choicesArray[2]) && (computerSelection == choicesArray[1]))
    ) {
        results.textContent = 'player wins';
        playerScore.textContent = Number(playerScore.textContent) + 1;
    } else {
        results.textContent = 'computer wins';
        computerScore.textContent = Number(computerScore.textContent) + 1;
    };
};

// When the real player selects a choice the computer selection is generated and the round proceeds to play
//then it checks the score of each player to see if someone have won, if thats the case the game ends and the values are resetted
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.id;
        let computerSelection = getComputerChoice(choicesArray);
        playerSelectionUI.textContent = playerSelection;
        computerSelectionUI.textContent = computerSelection;

        playRound(playerSelection, computerSelection);

        if (playerScore.textContent == 5) {
            alert('You win!');
            resetValues();
        } else if (computerScore.textContent == 5) {
            alert('You lose!');
            resetValues();
        };
    });
});
