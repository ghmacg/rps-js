const choicesArray = ['rock', 'paper', 'scissors']

const getComputerChoice = (array) => array[(Math.floor(Math.random() * array.length))]

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log('tie');
    } else if (
        ((playerSelection == choicesArray[0]) && (computerSelection == choicesArray[2])) || 
        ((playerSelection == choicesArray[1]) && (computerSelection == choicesArray[0])) ||
        ((playerSelection == choicesArray[2]) && (computerSelection == choicesArray[1]))
    ) {
        console.log('player wins')
    } else {
        console.log('computer wins')
    }
}
