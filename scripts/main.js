const choicesArray = ['rock', 'paper', 'scissors'];
const results = document.querySelector('#results');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const buttons = document.querySelectorAll('.selection-button');
const playerSelectionUI = document.querySelector('#player-selection');
const computerSelectionUI = document.querySelector('#computer-selection');

const getComputerChoice = (array) => array[(Math.floor(Math.random() * array.length))];

const resetValues = () => {
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    playerSelectionUI.textContent = 'Selection';
    computerSelectionUI.textContent = 'Selection';
    results.textContent = 'Make your choice';
};

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
