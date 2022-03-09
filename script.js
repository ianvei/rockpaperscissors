
function computerPlay() {
    let number = Math.floor((Math.random() * 3) + 1);
    if (number === 1) {
        return(number);
    }
    else if (number === 2) {
        return(number);
    }
    else if (number === 3) {
        return(number);
    }    
}

// potentially could have it remove each time the game loops

function createImg(choice, userImgToReplace){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${choice}.png`);
    userImgToReplace.appendChild(newImage);
    return newImage
}

function createCompImg(choice, compImgToReplace){
    if (choice === 1) {
        choice = 'r'
    }
    else if (choice === 2) {
        choice = 'p'
    }
    else if (choice === 3) {
        choice = 's'
    }
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${choice}.png`);
    compImgToReplace.appendChild(newImage);
    return newImage;
}


function userPlay(userInput) {
    // let userInput = prompt("Rock, Paper, or Scissors?");
    // userInput = userInput.toLowerCase();
    // error: this should only be possible once per turn (look into that 'once' thing from the video)
    if (userInput === 'r') {
        let userValue = 1;
        return(userValue);
    }
    else if (userInput === 'p') {
        let userValue = 2;
        return(userValue);
    }
    else if (userInput === 's') {
        let userValue = 3;
        return(userValue);
    }
    
}



function playRound(user, computer) {
    const gameResult = document.querySelector('.game-result');
    // const gameChoices = document.querySelector('.game-choices');
    const userScoreDisplay = document.querySelector('.user-display-box');
    const computerScoreDisplay = document.querySelector('.computer-display-box');
    
    if (user === computer) {
        gameResult.textContent = `Draw!`;
        
        // add the rest now
    }
    else if(user === 1) {
        if(computer === 3) {
            gameResult.textContent = `User Wins!`;
            // userScoreChecks += "✅" 
            userScoreCounter++
            userScoreDisplay.textContent = `${userScoreCounter}`;
        } else {
            gameResult.textContent = `Computer Wins!`;
            // computerScoreChecks += "✅" 
            computerScoreCounter++
            computerScoreDisplay.textContent = `${computerScoreCounter}`;
            
        }
    }
    else if (user === 2) {
        if (computer === 1) {
            gameResult.textContent = `User Wins!`;
            
            userScoreCounter++
            userScoreDisplay.textContent = `${userScoreCounter}`;
        } else if (computer === 3) {
            gameResult.textContent = `Computer Wins!`;
            
            computerScoreCounter++
            computerScoreDisplay.textContent = `${computerScoreCounter}`;
            }
        }
    else if (user === 3) {
        if (computer === 1) {
            gameResult.textContent = `Computer Wins!`;
            
            computerScoreCounter++
            computerScoreDisplay.textContent = `${computerScoreCounter}`;
        } else if (computer === 2) {
            gameResult.textContent = `User Wins!`;;
           
            userScoreCounter++
            userScoreDisplay.textContent = `${userScoreCounter}`;
            }
        }
        if (userScoreCounter >= 5|| computerScoreCounter >= 5){
            userScoreCounter = 0
            computerScoreCounter = 0
            alert('Game Over!')
            userScoreDisplay.textContent = `${userScoreCounter}`;
            computerScoreDisplay.textContent = `${computerScoreCounter}`;
        }
}

const buttons = document.querySelectorAll('button');
const userImgToReplace = document.querySelector('#userresult');
const compImgToReplace = document.querySelector('#compresult');
userScoreChecks = ''
computerScoreChecks = ''
userScoreCounter = 0
computerScoreCounter = 0
let userInput = '';
buttons.forEach((button) => {
    button.addEventListener('click', () => { 
        try {
            userImgToReplace.removeChild(newImage)
            compImgToReplace.removeChild(compImage)
        }
        catch(e) {
            console.log('does not exist yet')
        }
        let userInput = button.id;
        computerChoice = computerPlay()

        playRound(userPlay(userInput), computerChoice);
        newImage = createImg(userInput, userImgToReplace)
        compImage = createCompImg(computerChoice, compImgToReplace)
        console.log(userScoreCounter)
        console.log(computerScoreCounter)
    } )
})


// function game() {
//     for (let i = 0; i < 5; i++){
//         console.log('game loop working')
//         // userChoice = userButtons()
//         playRound(userPlay(userInput), computerPlay());
//     }

// }
// playRound(userPlay(userInput), computerPlay())

// issue: game loop seems to run wtihout user input //

// game()
// console.log(`you chose: ${userPlay()}, computer chose: ${computerPlay()}`)