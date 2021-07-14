/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor(){
        //missed, phrases, active phrase
        this.missed = 0; 
        this.phrases = [
            {phrase: 'One ring to rule them all' },
            {phrase: 'As a man thinketh so is he' },
            {phrase: 'Money Power Respect' },
            {phrase: 'All is well' },
            {phrase: 'Blood is thicker than water' }
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

       let keyLetter = document.querySelectorAll('#qwerty button');
       let selectedLetter = '';
       
       let findElement; // stores list of matching elements. Using this to pass in as parameter to other methods
       keyLetter.forEach(key => {
           key.addEventListener('click', (event)=>{
               key.classList.add("chosen");
               selectedLetter = event.target.innerText;
              // this.activePhrase.checkLetter(selectedLetter); //returns true/false
               this.activePhrase.showMatchedLetter(selectedLetter, findElement);
                    if( this.activePhrase.checkLetter(selectedLetter) === true){
                        console.log('inside check letter conditional true')
                        if(this.chekForWin() === true){
                            this.gameOver(true);
                          
                       }
                    } else {
                        this.removeLife();
                        key.classList.add("wrong");
                        key.classList.remove("chosen");
                    }
              
           });
       });

    
 
    
    }
    removeLife(){

      
        let heart = document.querySelectorAll(".tries img");
        heart[this.missed].src="images/lostHeart.png";
        
        this.missed++;
        if (this.missed>=5){
            this.gameOver(false);
        }



    }
    chekForWin(){
        let phraseLength = this.activePhrase.phrase.length; 
        let classesLength = document.querySelectorAll("li.show");
        let spaceLength = document.querySelectorAll("li.space").length;
            let totalEntry = classesLength.length + spaceLength;
        
        if (phraseLength != totalEntry){
            console.log('no win'); //Left for testing/  grading
             return false
            } else {
              console.log('win'); //Left for testing/  grading
              return true
            }
    }
    gameOver(result){
        let finalScreen = document.getElementById("overlay");
        finalScreen.style.display ='flex';
        let gameOverMsg = document.getElementById("game-over-message");
    
       if(result === false) {
            finalScreen.classList.replace("start", "lose");
            gameOverMsg.textContent = 'Sorry, try again next time'; 
       } else {
           
        finalScreen.classList.replace("start", "win");
            gameOverMsg.textContent = 'Great Job'; 
 
       }
      
            // Game resets 

            // Ul Reset
            let ul = document.getElementById("phrase").firstElementChild;
            ul.innerHTML = ``;
       
            // Heart reset
            document.querySelectorAll("#scoreboard img").forEach(img => {
                img.src = "./images/liveHeart.png"
            });
      

            const playButton=document.querySelector('#btn__reset');
            playButton.textContent = 'Play Again'

            this.missed = 0;

     

       
    }

}