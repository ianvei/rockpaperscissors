
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

function userPlay() {
    let userInput = prompt("Rock, Paper, or Scissors?");
    userInput = userInput.toLowerCase();
    if (userInput === 'rock') {
        let userValue = 1;
        return(userValue);
    }
    else if (userInput === 'paper') {
        let userValue = 2;
        return(userValue);
    }
    else if (userInput === 'scissors') {
        let userValue = 3;
        return(userValue);
    }
}

// function playRound(user, computer) {
//     if (computer > user){
//         console.log(`you chose: ${user}, computer chose: ${computer}`);
//         console.log("Computer wins");
//     }
//     else if (computer===user){
//         console.log('Draw');
//     }
//     else if (computer < user){
//         console.log(`you chose: ${user}, computer chose: ${computer}`);
//         console.log("Player wins");
//     }
//     else {
//         console.log('something went wrong');
//     }
// }

// r1 p2 s3
// function playRound(user, computer) {
//     if (user === computer) {
//         console.log(`you chose: ${user}, computer chose: ${computer}`);
//         console.log("draw!");
//     }
//     else if(user === 1) {
//         if(computer === 3) {
//             console.log(`you chose: ${user}, computer chose: ${computer}`);
//             console.log("rock wins");
//         } else {
//             console.log(`you chose: ${user}, computer chose: ${computer}`);
//             console.log("paper wins");
//         }
//     }
//     else if (user === 2) {
//         if (computer === 1) {
//             console.log(`you chose: ${user}, computer chose: ${computer}`);
//             console.log("user wins");
//         } else {
//             if (computer === 3) {
//                 console.log(`you chose: ${user}, computer chose: ${computer}`);
//                 console.log("computer wins");
//             }
//         }
//     }
//     else if (user === 3) {
//         if (computer === 1) {
//             console.log(`you chose: ${user}, computer chose: ${computer}`);
//             console.log("computer wins");
//         } else {
//             if (computer === 2) {
//                 console.log(`you chose: ${user}, computer chose: ${computer}`);
//                 console.log("user wins");
//             }
//         }
//     }
// }

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


function game() {
    for (let i = 0; i < 5; i++){
        playRound(userPlay(), computerPlay());
    }

}

game()
// console.log(`you chose: ${userPlay()}, computer chose: ${computerPlay()}`)