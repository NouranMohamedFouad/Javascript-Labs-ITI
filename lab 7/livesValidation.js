import { globalVariables } from "./globalVariables.js";

export function showEndedLives()
{
  
        document.getElementById("input").style.display="none";
        document.getElementById("message").innerText = `You lose! The word was: ${globalVariables.chosenWord}`;
        document.getElementById("hintMessage").innerText="";
        document.getElementById("input").style.display="none";
        document.getElementById("remaining-lives").innerText="💔";
}
