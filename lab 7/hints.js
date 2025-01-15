import { globalVariables } from "./globalVariables.js";
import { displayHangman } from "./hangman.js";
import { resetTimer } from "./timer.js";


export const hints= 
{
    // Animals
    "tiger": "A striped wild cat",
    "elephant": "Large animal with a trunk",
    "giraffe": "Tall animal with a long neck",
    "zibra": "Black and white striped animal",
    "lion": "King of the jungle",
   "cat": "Furry pet that meows",
    "dog": "Loyal animal that barks",
    "snake": "Reptile that slithers silently",
    "panda": "Black and white bear",
    "bear": "Large animal that loves honey",
    // Movies
    "inception": "Dreams within dreams",
    "avatar": "Blue-skinned humanoids on another planet",
    "jumanji": "A magical board game",
    "venom": "A superhero with alien powers",
    "coco": "A boy visits the Land of the Dead",
    "moana": "A girl on an ocean adventure",
    "frozen": "A princess with ice powers",
    "migration": "A movie about traveling animals",
    "dolittle": "A man who talks to animals",
    "cars": "Animated movie about talking vehicles",
    // Countries
    "germany": "Known for beer and Oktoberfest",
    "brazil": "Famous for football and carnivals",
    "japan": "Land of the rising sun",
    "egypt": "Home to pyramids and pharaohs",
    "paris": "City of love and Eiffel Tower",
    "america": "Land of freedom and Hollywood",
    "italy": "Known for pizza and pasta",
    "denmark": "Famous for Vikings and LEGO",
    "qatar": "Wealthy country in the Middle East",
    "australia": "Land of kangaroos and koalas"
};


export function getHint()
{
    globalVariables.remainingLives--;
    displayHangman();
    if(globalVariables.remainingLives<=0){
        
        resetTimer("true");
        return;
    }
    document.getElementById("remaining-lives").innerText="❤️Remaining Lives: "+globalVariables.remainingLives;

    document.getElementById("hintMessage").innerText="Hint: "+hints[globalVariables.chosenWord];
    document.getElementById("hintMessage").style.color="black";
    document.getElementById("hintMessage").style.backgroundColor="rgb(99, 136, 98)";
    document.getElementById("hintMessage").style.borderRadius="5px";
    document.getElementById("hintMessage").style.fontWeight="bold";
    document.getElementById("hintMessage").style.fontSize="16px";
    document.getElementById("hintMessage").style.width="50%";
    document.getElementById("hintMessage").style.margin="auto";  
};