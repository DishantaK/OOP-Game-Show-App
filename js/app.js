/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



//Testing 
// const game = new Game();
// game.phrases.forEach((phrase, index) => {
// console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });
// const game = new Game();


const startButton = document.getElementById('btn__reset');

startButton.addEventListener('click', (e)=>{
    const game = new Game();
    game.startGame();
    console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`); //Leaving for Testing / grading 
    game.handleInteraction(); // checking for selected

});

//add event listeners to keyup and letters
// call life and other methods