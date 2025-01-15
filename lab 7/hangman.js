import { globalVariables } from "./globalVariables.js";


export function displayHangman()
{
    if(globalVariables.remainingLives===6){
        document.getElementById("hangman-content").innerHTML = '<img src="stand.png" width="200px" height="100px" />';

    }
    else if(globalVariables.remainingLives===5){
        document.getElementById("hangman-content").innerHTML = '<img src="5Lives.png" width="200px" height="100px" />';
    }
    else if(globalVariables.remainingLives===4){
        document.getElementById("hangman-content").innerHTML = '<img src="4Lives.png" width="200px" height="100px" />';

    }
    else if(globalVariables.remainingLives===3){
        document.getElementById("hangman-content").innerHTML = '<img src="3Lives.png" width="200px" height="100px" />';
    }
    else if(globalVariables.remainingLives===2){
        document.getElementById("hangman-content").innerHTML = '<img src="2Lives.png" width="200px" height="100px" />';

    }
    else if(globalVariables.remainingLives===1){
        document.getElementById("hangman-content").innerHTML = '<img src="1live.png" width="200px" height="100px" />';
    }
    else if(globalVariables.remainingLives<=0){
        document.getElementById("hangman-content").innerHTML = '<img src="0live.png" width="200px" height="100px" />';
    }
}
