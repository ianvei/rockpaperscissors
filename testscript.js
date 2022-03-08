// const rockButton = document.querySelector('#r')

// rockButton.addEventListener('click', () => {
//     userInput = 
// })

const buttons = document.querySelectorAll('button');

// buttons.forEach((button) => {
//     button.addEventListener('click', () =>{
//         userInput = button.id; 
//         console.log(userInput)
//         }
// })

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        userInput = button.id;
        console.log(userInput)
    } )
})