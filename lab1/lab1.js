console.log("----------------Question 1---------------------------------"); 

//Question 1
function isPalindrome(str) 
{
    if (typeof str!=="string") 
    {
        return "Invalid input,Please provide a string.";
    }
    
    str=str.toLowerCase();
    var reversed=str.split('').reverse().join('');
    return str===reversed;
}

console.log(isPalindrome("xyzyx"));
console.log(isPalindrome(123456));
console.log(isPalindrome("Hello")); 


console.log("----------------Question 2---------------------------------"); 

//Question 2

function getNewPrice(price,discount)
{
    if (typeof price!=='number' || typeof discount!== 'number') 
    {
        return('price and discount should be numbers');
    }
    else if(discount<0 || discount>100) 
    {
        return('Invalid discount value,it should be between 0 and 100');
    }
    else if(price<=0) 
    {
        return('Invalid price value,it should be greater than 0');
    }
    else
    {
        return price-(price*discount/100);
    }
}
console.log(getNewPrice(50,10));
console.log(getNewPrice(100,"discount"));
console.log(getNewPrice(50,150));
console.log(getNewPrice(0,20));


console.log("----------------Question 3---------------------------------"); 
//Question 3)

//a)
var favoriteMovies=["Moana","Frozen","Soul"];
var copiedMovies=favoriteMovies;
console.log("copiedMovies"+copiedMovies);

//b)
copiedMovies[2]="Tangled";
console.log("favoriteMovies: "+favoriteMovies);
console.log("copiedMovies"+copiedMovies);

//c)
console.log("last Element1: "+copiedMovies[copiedMovies.length-1]);
console.log("last Element: "+favoriteMovies[favoriteMovies.length-1]);
console.log("last Element: "+favoriteMovies.pop()); //returned it and removed it from the array

//d)
copiedMovies.unshift("Coco");
copiedMovies.unshift("Raya and the Last Dragon");
console.log("favoriteMovies: "+favoriteMovies);
console.log("copiedMovies: "+copiedMovies);



console.log("----------------Question 4---------------------------------");
//Question 4
function getLongestWord(sentence) 
{
    var words=sentence.split(' ');
    var longestWord=words[0];
  
    for (var i=1;i<words.length;i++) 
    {
      if(words[i].length>longestWord.length) 
      { 
        longestWord=words[i];
      }
    }
    return longestWord;
}

console.log("longest word :"+getLongestWord('web development tutorial')); 
console.log("longest word :"+getLongestWord('my name is nouran mohamed elaskalany')); 


console.log("----------------Question 5---------------------------------");
//Question 5

function getUserGrades()
{
    var username=prompt("Please enter your name:");
    while(!username) 
    {
        alert("name is required.");
        username=prompt("please enter your name:");
    }
    var grades=prompt("please enter your grades separated by commas:");
    while(!grades) 
    {
        alert("grades are required.");
        grades=prompt("please enter your grades separated by commas:");
    }
    
    var gradesArray=grades.split(',').map(Number);
    console.table(gradesArray);

    var total=gradesArray.reduce((sum,grade)=>sum+grade,0);
    var average=total/gradesArray.length;
    console.log("Average grade:"+average);
    
    alert("Welcome To The Program, "+username+"!");
    alert("Average grade:"+average);
}










