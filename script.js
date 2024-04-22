let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    const rng = Math.floor(Math.random() * 10);
    return rng;
};

const getAbsoluteDistance = (num1, num2) => Math.abs(num1 - num2);


const compareGuesses = (human, computer, secretNum) => {
    return getAbsoluteDistance(human, secretNum) <= getAbsoluteDistance(computer, secretNum) ? true : false;
};

const updateScore = winner => {
    switch (winner) {
        case 'human' :
            humanScore += 1;
            break;
        case 'computer' :
            computerScore += 1;
            break;       
    }
};


const advanceRound = () => currentRoundNumber += 1;