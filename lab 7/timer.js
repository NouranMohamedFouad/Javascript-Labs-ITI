import { showEndedLives } from './livesValidation.js';
import { displayHangman } from './hangman.js';
import { globalVariables } from './globalVariables.js';


var timer;


export function resetTimer(livedEnded) 
{
    if(livedEnded=="true" ){
        clearInterval(timer);
        displayHangman(globalVariables.remainingLives);
        showEndedLives(globalVariables.chosenWord);
        return;
    }
    else if(livedEnded=="won")
    {
        document.getElementById("time-left").style.display="none";
        return;
    }

    clearInterval(timer);
    let timeLeft=30;
    document.getElementById("time-left").innerText ="Time Left:"+timeLeft+" seconds";

    timer=setInterval(function() 
    {
        timeLeft--;
        document.getElementById("time-left").innerText =" ";
        document.getElementById("time-left").innerText="Time Left:"+timeLeft+" seconds";
        if(timeLeft===0) 
        {
            clearInterval(timer);
            globalVariables.remainingLives=-1;
            displayHangman(globalVariables.remainingLives);
            showEndedLives(globalVariables.chosenWord);
            return;
        }
    }, 1000);       
}
