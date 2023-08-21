const choicesArray = ['rock', 'paper', 'scissors'];

const results = document.querySelector('#results');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const buttons = document.querySelectorAll('.selection-button');

const getComputerChoice = (array) => array[(Math.floor(Math.random() * array.length))];

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

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.id;
        let computerSelection = getComputerChoice(choicesArray);

        playRound(playerSelection, computerSelection);

        if (playerScore.textContent == 5) {
            alert('You win!');
            playerScore.textContent = 0;
            computerScore.textContent = 0;
            results.textContent = 'Make your choice';
        } else if (computerScore.textContent == 5) {
            alert('You lose!');
            playerScore.textContent = 0;
            computerScore.textContent = 0;
            results.textContent = 'Make your choice';
        };
    });
});
