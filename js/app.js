/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



const startButton = document.getElementById('btn__reset');

startButton.addEventListener('click', (e)=>{
    let overlay=document.querySelector('#overlay');
    overlay.className='start';

    // Button Reset
    document.querySelectorAll('#qwerty button').forEach(key => {
        key.classList.remove("chosen");
        key.classList.remove("wrong");
        key.className = "key";
        
    });

    const game = new Game();
    game.startGame();
    console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`); //Leaving for Testing / grading 
    game.handleInteraction(); // checking for selected
   

});

