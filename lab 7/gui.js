import { words } from './words.js';
import { getHint } from './hints.js';
import { displayHangman } from './hangman.js';
import { resetTimer } from './timer.js';
import { globalVariables } from './globalVariables.js';
import { displayLetters } from './keyboard.js';


function displayGameInterface(category)
{
    document.getElementById("remaining-lives").innerText="❤️Remaining Lives: "+globalVariables.remainingLives;
    document.getElementById("category-container").style.display="none";
    document.querySelector(".parent").style.display="block";
    document.getElementById("message").innerText="";
    document.getElementById("hintMessage").innerText="";
    document.getElementById("input").style.display="block";
    document.getElementById("category").innerText="Category : "+category;   
    document.getElementById("word-display").style.color="black";
    document.getElementById("word-display").style.fontWeight="normal";
    document.getElementById("word-display").style.fontSize="16px";
    document.getElementById("time-left").style.display="block";
}


function startGame(category) 
{
    globalVariables.chosenWord="";
    globalVariables.guessedWord=[];
    globalVariables.remainingLives=6;
    globalVariables.won=false;

    displayGameInterface(category);

    var randomIndex=Math.floor(Math.random()*words[category].length)
    globalVariables.chosenWord=words[category][randomIndex]; 
    globalVariables.guessedWord=globalVariables.chosenWord.split("")
    .map(function(){
        return "_";
    });
    document.getElementById("word-display").innerText=globalVariables.guessedWord.join(" ");
    document.getElementById("word-display").style.letterSpacing="5px";

    displayLetters();
    resetTimer("false");
    displayHangman();
}


function goBack(){
    document.getElementById("category-container").style.display="block";
    document.querySelector(".parent").style.display="none";
}


window.startGame = startGame;
window.getHint = getHint;
window.goBack = goBack;