var words = 
{
    Animals:["tiger", "elephant", "giraffe", "zibra", "lion", "cat", "dog", "snake", "panda", "bear"],
    Movies:["inception", "avatar", "jumanji", "venom", "coco", "moana", "frozen", "migration", "dolittle", "cars"],
    Countries:["germany", "brazil", "japan", "egypt", "paris", "america", "italy", "denmark", "qatar", "australia"]
};

var chosenWord="";
var guessedWord=[];
var remainingLives=6;
var guessedLetters=[];
var timer;

function displayLetters()
{
    var lettersContainer = document.getElementById("letters");
    lettersContainer.innerHTML=" ";
    var alphabet="abcdefghijklmnopqrstuvwxyz".split("");
    alphabet.forEach(function(letter) 
    {
        var letterElement=document.createElement("span");
        letterElement.innerText=letter;
        letterElement.id=letter;
        letterElement.style.marginLeft="10px";
        lettersContainer.appendChild(letterElement);
    });
}

function startGame(category) 
{
    chosenWord="";
    guessedWord=[];
    remainingLives=6;
    guessedLetters=[];

    document.getElementById("remaining-lives").innerText="Lives: "+remainingLives;
    document.getElementById("category-container").style.display="none";
    document.getElementById("game-interface").style.display="block";
    document.getElementById("hangman").style.display="block";
    document.getElementById("goback").style.display="block";
    document.getElementById("input").style.display="block";
    document.getElementById("word-display").style.color="black";
    document.getElementById("category").innerText="Category : "+category;
    document.getElementById("message").innerText="";
    document.getElementById("hintMessage").innerText="";

    var randomIndex=Math.floor(Math.random()*words[category].length)
    chosenWord=words[category][randomIndex]; 
    guessedWord=chosenWord.split("")
    .map(function(){
        return "_";
    });
    document.getElementById("word-display").innerText=guessedWord.join(" ");
    document.getElementById("word-display").style.letterSpacing="5px";

    guessedLetters=[];
    displayLetters();
    resetTimer();
    displayHangman();
}


function submitGuess()
{
    document.getElementById("message").innerText =" ";
    var input=document.getElementById("guess");
    var letter=input.value.toLowerCase();
    input.value="";

    if(guessedLetters.includes(letter)) 
    {
        document.getElementById("message").innerText = "repeated guess";
        return;
    }
    guessedLetters.push(letter);


    var letterElement=document.getElementById(letter);
    if(letterElement) 
    {
        letterElement.style.textDecoration="line-through";
        letterElement.style.color=chosenWord.includes(letter) ? "green" : "red";
    }
    else
    {
        document.getElementById("message").innerText = "please enter from a to z";
        return;
    }

    if(chosenWord.includes(letter))
    {
        for(var i=0;i<chosenWord.length;i++) 
        {
            if(chosenWord[i]===letter) 
            {
                guessedWord[i]=letter;
            }
        }
        document.getElementById("word-display").innerText = guessedWord.join(" ");
        if(!guessedWord.includes("_")) 
        {
            document.getElementById("word-display").style.color="green";
            document.getElementById("word-display").style.fontWeight="bold";
            document.getElementById("word-display").style.fontSize="20px";

            document.getElementById("input").style.display="none";
            document.getElementById("message").innerText=`You won! The word was: ${chosenWord}`;
            document.getElementById("hintMessage").innerText="";
            clearInterval(timer);
            displayHangman();
            return;
        }

    } 
    else 
    {
        remainingLives--;
        document.getElementById("remaining-lives").innerText="Lives: "+remainingLives;
        displayHangman();
        if(remainingLives===0) 
        {
            document.getElementById("input").style.display="none";
            document.getElementById("message").innerText = `You lose! The word was: ${chosenWord}`;
            document.getElementById("hintMessage").innerText="";
            clearInterval(timer);
            return;
        }
    }
    resetTimer();
}

function resetTimer() 
{
    clearInterval(timer);
    var timeLeft=30;
    document.getElementById("time-left").innerText ="Time Left:"+timeLeft+" seconds";
    timer=setInterval(function() 
    {
        timeLeft--;
        document.getElementById("time-left").innerText="Time Left:"+timeLeft+" seconds";
        if(timeLeft===0) 
        {
            clearInterval(timer);
            remainingLives=0;
            displayHangman();
            document.getElementById("remaining-lives").innerText="Lives: "+ remainingLives;
            document.getElementById("input").style.display="none";
            document.getElementById("message").innerText=`You lose! The word was: ${chosenWord}`;
            return;
        }
    }, 1000);       
}


function goBack(){
    document.getElementById("category-container").style.display="block";
    document.getElementById("game-interface").style.display="none";
    document.getElementById("hangman").style.display="none";
    document.getElementById("goback").style.display="none";


}
///////////////////////BONUS PART/////////////////////////////////

/////////hints//////////////
var hints= 
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

function getHint()
{
    remainingLives--;
    document.getElementById("remaining-lives").innerText="Lives: "+remainingLives;
    document.getElementById("hintMessage").innerText="Hint: "+hints[chosenWord];
    document.getElementById("hintMessage").style.color="red";
    document.getElementById("hintMessage").style.fontWeight="bold";
    document.getElementById("hintMessage").style.fontSize="14px";


}

/////////hangman/////////////
var stand= `
    ======
        ||
        ||
        ||
        ||
        ||
  ======== `;

var totalStand= `
  ======
  |   ||
      ||
      ||
      ||
      ||
========  ` ;

var standWithHead= `
  ======
  |   ||
  O   ||
      ||
      ||
      ||
========  ` ;

var standBody= `
  ======
  |   ||
  O   ||
  |   ||
  |   ||
      ||
========  ` ;

var bodywithHands= `
  ======
  |   ||
  O   ||
 \\|/  ||
  |   ||
      ||
========  ` ;

var bodywithlegs= `
  ======
  |   ||
  O   ||
 \\|/  ||
  |   ||
 / \\  ||
=========  ` ;

var killed= `
  ======
  |   ||
  O   ||
----- ||
 \\|/  ||
  |   ||
 / \\  ||
=========  ` ;

function displayHangman()
{
    if(remainingLives===6){
        document.getElementById("hangman-content").innerText=stand;
    }
    else if(remainingLives===5){
        document.getElementById("hangman-content").innerText=totalStand;
    }
    else if(remainingLives===4){
        document.getElementById("hangman-content").innerText=standWithHead;
    }
    else if(remainingLives===3){
        document.getElementById("hangman-content").innerText=standBody;
    }
    else if(remainingLives===2){
        document.getElementById("hangman-content").innerText=bodywithHands;
    }
    else if(remainingLives===1){
        document.getElementById("hangman-content").innerText=bodywithlegs;
    }
    else if(remainingLives===0){
        document.getElementById("hangman-content").innerText=killed;
    }
}