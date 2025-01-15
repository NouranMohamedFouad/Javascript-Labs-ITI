import { globalVariables } from "./globalVariables.js";
import { resetTimer } from './timer.js';
import { displayHangman } from "./hangman.js";



export function submitGuess(letter)
{
    if(globalVariables.remainingLives<=0) 
    {
        resetTimer("true");
        return;   
    }   
    else if(globalVariables.won==true){
        return;
    }
    document.getElementById("message").innerText =" ";
    document.getElementById("input").display="block";

    
    var letterElement=document.getElementById(letter);

    if(letterElement.style.textDecoration === "line-through")
    {
        document.getElementById("message").innerText = "Repeated guess";
        return;
    }

    
    letterElement.style.textDecoration="line-through";
    letterElement.style.color=globalVariables.chosenWord.includes(letter) ? "white":"red";
    letterElement.style.backgroundColor=" #294126ea";


    if(globalVariables.chosenWord.includes(letter))
    {
        for(var i=0;i<globalVariables.chosenWord.length;i++) 
        {
            if(globalVariables.chosenWord[i]===letter) 
            {
                globalVariables.guessedWord[i]=letter;
            }
        }
        document.getElementById("word-display").innerText =globalVariables.guessedWord.join(" ");
        if(!globalVariables.guessedWord.includes("_")) 
        {
            document.getElementById("word-display").style.color="green";
            document.getElementById("word-display").style.fontWeight="bold";
            document.getElementById("word-display").style.fontSize="20px";

            document.getElementById("input").style.display="none";
            document.getElementById("message").innerText=`You won! The word was: ${globalVariables.chosenWord}`;
            document.getElementById("hintMessage").innerText="";
            resetTimer("won");
            displayHangman();
            globalVariables.won=true;
            return;
        }
    } 
    else{
        globalVariables.remainingLives--;
        document.getElementById("remaining-lives").innerText="❤️Remaining Lives: "+globalVariables.remainingLives;

    }
    displayHangman();

    if(globalVariables.remainingLives<=0) 
    {
        resetTimer("true");
        return;
    }
    resetTimer("false");
}
