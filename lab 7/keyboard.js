import { submitGuess } from './guess.js';


export function displayLetters()
{
    var lettersContainer = document.getElementById("letters");
    lettersContainer.innerHTML=" ";
    var alphabet="abcdefghijklmnopqrstuvwxyz".split("");
    alphabet.forEach(function(letter) 
    {
        var letterElement=document.createElement("button");
        letterElement.innerText=letter;
        letterElement.id=letter;
        letterElement.style.marginLeft="10px";
        letterElement.style.marginTop="10px";
        letterElement.style.width="6%";
        letterElement.addEventListener("click", function () {
            submitGuess(letter); 
        });
        lettersContainer.appendChild(letterElement);
    });

}


