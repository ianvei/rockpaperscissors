
function computerPlay() {
    let number = Math.floor((Math.random() * 3) + 1);
    if (number === 1) {
        console.log('Rock');
        console.log(number);
        return(number);
    }
    else if (number === 2) {
        console.log('Paper');
        console.log(number);
        return(number);
    }
    else if (number === 3) {
        console.log('Scissors');
        console.log(number);
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
        console.log(userValue)
        return(userValue);
    }
    else if (userInput === 'p') {
        let userValue = 2;
        console.log(userValue)
        return(userValue);
    }
    else if (userInput === 's') {
        let userValue = 3;
        console.log(userValue)
        return(userValue);
    }
    
}



function playRound(user, computer) {
    const gameResult = document.querySelector('.game-result');
    const gameChoices = document.querySelector('.game-choices');
    if (user === computer) {
        gameResult.textContent = `draw!`;
        console.log('draw!')
        // add the rest now
    }
    else if(user === 1) {
        if(computer === 3) {
            console.log(`you chose: ${user}, computer chose: ${computer}`);
            console.log("rock wins");
            gameResult.textContent = `User Wins!`;
        } else {
            console.log(`you chose: ${user}, computer chose: ${computer}`);
            console.log("paper wins");
            gameResult.textContent = `Computer Wins!`;
        }
    }
    else if (user === 2) {
        if (computer === 1) {
            console.log(`you chose: ${user}, computer chose: ${computer}`);
            gameResult.textContent = `User Wins!`;
        } else if (computer === 3) {
            console.log(`you chose: ${user}, computer chose: ${computer}`);
            gameResult.textContent = `Computer Wins!`;
            }
        }
    else if (user === 3) {
        if (computer === 1) {
            console.log(`you chose: ${user}, computer chose: ${computer}`);
            gameResult.textContent = `Computer Wins!`;
        } else if (computer === 2) {
            console.log(`you chose: ${user}, computer chose: ${computer}`);
            gameResult.textContent = `User Wins!`;;
            }
        }
}

const buttons = document.querySelectorAll('button');
const userImgToReplace = document.querySelector('#userresult');
const compImgToReplace = document.querySelector('#compresult');

let userInput = '';
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        try {
            console.log('Im trying')
            userImgToReplace.removeChild(newImage)
            compImgToReplace.removeChild(compImage)
            // gameResult.remove()
            // gameResult.remove()
        }
        catch(e) {
            console.log('does not exist yet')
        }
        let userInput = button.id;
        computerChoice = computerPlay()

        playRound(userPlay(userInput), computerChoice);
        // idea: change createRock to create image, and then take the input from userInput to determine what image should be displayed
        newImage = createImg(userInput, userImgToReplace)
        compImage = createCompImg(computerChoice, compImgToReplace)
        // if counter == 5 break game and raise alert
    } )
})

console.log(`This is the value outside of func ${userInput}`);
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