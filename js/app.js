/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



const startButton = document.getElementById('btn__reset');

startButton.addEventListener('click', (e)=>{
     // Button Reset
     document.querySelectorAll('#qwerty button').forEach(key => {        
        key.className = " ";
        key.classList.add("key");
        key.disabled = false;
        
    });

    //

    const game = new Game();
    game.startGame();
    console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`); //Leaving for Testing / grading 
    game.handleInteraction(); // checking for selected


});

