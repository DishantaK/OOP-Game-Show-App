/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor(){
        //missed, phrases, active phrase
        this.missed = 0; 
        this.phrases = [
            {phrase: 'One ring to rule them all.' },
            {phrase: 'As a man thinketh, so is he.' },
            {phrase: 'Money Power Respect' },
            {phrase: 'All is well.' },
            {phrase: 'Blood is thicker than water.' }
        ];
        this.activePhrase = null;
    }
    /**
     * Starts the game after click event from button
     */
    startGame(){
        const overlay = document.getElementById("overlay");
        overlay.style.display = 'none'; 

        const randomPhrase = this.getRandomPhrase();
        this.activePhrase = new Phrase(randomPhrase.phrase);
        this.activePhrase.addPhraseToDisplay();

    }

    /**
        * Selects random phrase from phrases property
        * @return {Object} Phrase object chosen to be used
    */

    getRandomPhrase(){
       return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }
    handleInteraction(){
        // checkLetter(); // undefined
       
        // handle selection 

       let keyLetter = document.querySelectorAll('.key');
       let selectedLetter = '';
       let findElement; // stores list of matching elements. Using this to pass in as parameter to other methods
       keyLetter.forEach(key => {
           key.addEventListener('click', (event)=>{
               selectedLetter = event.target.innerText;
               this.activePhrase.checkLetter(selectedLetter); //returns true/false
               this.activePhrase.showMatchedLetter(selectedLetter, findElement);
           });
       });

       // reusable variable to store s
 
    
    }
    removeLife(){
        
    }
    chekForWin(){
        // if all revealed ? return true / false
    }
    gameOver(){

    }

}