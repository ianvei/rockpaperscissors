
function computerPlay() {
    let number = Math.floor((Math.random() * 3) + 1);
    if (number === 1) {
        console.log('Rock')
        console.log(number)
        return(number)
    }
    else if (number === 2) {
        console.log('Paper')
        console.log(number)
        return(number)
    }
    else if (number === 3) {
        console.log('Scissors')
        console.log(number)
        return(number)
    }    
}

function userPlay() {
    let userInput = prompt("Rock, Paper, or Scissors?");
    userInput = userInput.toLowerCase()
    if (userInput === 'rock') {
        let userValue = 1
        return(userValue)
    }
    else if (userInput === 'paper') {
        let userValue = 2
        return(userValue)
    }
    else if (userInput === 'scissors') {
        let userValue = 3
        return(userValue)
    }
}

function playRound(user, computer) {
    if (computer > user){
        console.log(`you chose: ${user}, computer chose: ${computer}`)
        console.log("Computer wins")
    }
    else if (computer===user){
        console.log('Draw')
    }
    else if (computer < user){
        console.log(`you chose: ${user}, computer chose: ${computer}`)
        console.log("Player wins")
    }
    else {
        console.log('something went wrong')
    }
}

function game() {
    for (let i = 0; i < 5; i++){
        playRound(userPlay(), computerPlay())
    }

}

game()
// console.log(`you chose: ${userPlay()}, computer chose: ${computerPlay()}`)