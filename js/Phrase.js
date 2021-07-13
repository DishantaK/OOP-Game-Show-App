/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }
 

    /**
        * Display phrase on game board
    */
   
    addPhraseToDisplay() {
        const phraseSection = document.getElementById("phrase");
        let ul = phraseSection.firstElementChild;
        
        for(let i=0; i < this.phrase.length; i++){
            if(this.phrase[i] === " "){
                // add <li class="space"> then append newLi to ul
                let newLi =  document.createElement("li");
                newLi.className = "space";
                ul.append(newLi);
                
            }
            else {
                // add  <li class="hide letter y">y</li> then append newLi to ul
                let newLiLetter =  document.createElement("li");
                newLiLetter.className =`hide letter ${this.phrase[i]}`;
                newLiLetter.textContent = `${this.phrase[i]}`;
                ul.append(newLiLetter);
                
            }
        }
        
    }

    /**
        * Checks if passed letter is in phrase
        * @param (string) letter - Letter to check
    */

    checkLetter(selectedLetter) {
       if(this.phrase.includes(selectedLetter)){
        console.log('true')  //Leaving for Testing / grading 
        return true
       }else {
        console.log('false')  //Leaving for Testing / grading 
        return false
       }
       
    }

    /**
        * Displays passed letter on screen after a match is found
        * @param (string) letter - Letter to display
    */

    showMatchedLetter(selectedLetter, findElement){
      // result from checkLetter();
     
      for(let i=0; i < this.phrase.length; i++){
        if(this.phrase[i] == selectedLetter){
           findElement =  document.querySelectorAll(`li.${this.phrase[i]}`);
            for(let i = 0; i< findElement.length; i++){
                findElement[i].classList.replace("hide", "show");
                
            }      
        }   
      }   
    }
   

}

