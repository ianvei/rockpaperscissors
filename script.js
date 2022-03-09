
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

function createRock(){
    const rockImage = document.createElement('img');
    rockImage.setAttribute('src', 'images/rock.png');
    userImgToReplace.appendChild(rockImage);
    return rockImage
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
    if (user === computer) {
        console.log(`you chose: ${user}, computer chose: ${computer}`);
        console.log("draw!");
    }
    else if(user === 1) {
        if(computer === 3) {
            console.log(`you chose: ${user}, computer chose: ${computer}`);
            console.log("rock wins");
        } else {
            console.log(`you chose: ${user}, computer chose: ${computer}`);
            console.log("paper wins");
        }
    }
    else if (user === 2) {
        if (computer === 1) {
            console.log(`you chose: ${user}, computer chose: ${computer}`);
            console.log("user wins");
        } else if (computer === 3) {
            console.log(`you chose: ${user}, computer chose: ${computer}`);
            console.log("computer wins");
            }
        }
    else if (user === 3) {
        if (computer === 1) {
            console.log(`you chose: ${user}, computer chose: ${computer}`);
            console.log("computer wins");
        } else if (computer === 2) {
            console.log(`you chose: ${user}, computer chose: ${computer}`);
            console.log("user wins");
            }
        }
}

const buttons = document.querySelectorAll('button');
const userImgToReplace = document.querySelector('#userresult');

let userInput = '';
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        try {
            console.log('Im trying')
            userImgToReplace.removeChild(rockImage)
        }
        catch(e) {
            console.log('does not exist yet')
        }
        let userInput = button.id;
        playRound(userPlay(userInput), computerPlay());
        // idea: change createRock to create image, and then take the input from userInput to determine what image should be displayed
        rockImage = createRock(userImgToReplace)
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