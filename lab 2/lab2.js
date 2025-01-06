console.log("----------------Question 1---------------------------------"); 
//Question 1

var number=1234
var sum=0
while(number!=0){
    remainder=number%10;
    sum+=remainder;
    number=Math.floor(number/10);
}
console.log("sum:"+sum);

console.log("----------------Question 2---------------------------------"); 
//Question 2

var inputString="Nouran";
inputString=inputString.toLocaleLowerCase();
charArray=inputString.split('');
console.log(charArray);
numOfVowels=charArray.reduce(function(sum,char){
    if(char=='a'|| char=='e' || char=='o' || char=='u' || char=='i'){
        sum++;
    }
    return sum;
},0);
console.log("numOfVowels:"+numOfVowels);


console.log("----------------Question 3---------------------------------"); 
//Question 3

var inputString="nouran";
var targetChar='n';
charArr=inputString.split('');
numOfOccurances=charArr.reduce(function(sum,char){
    if(char==targetChar){
        sum++;
    }
    return sum;
},0);
console.log("numOfOccurances:"+numOfOccurances);

console.log("----------------Bonus Part-------------------------------"); 
//Bonus

var users=[
    {
        "id": 1,
        "name": "Ahmed",
        "email": "ahmed@gmail.com",
        "dob": "1990-05-15",
        "skills": ["Java", "React", "NodeJS"]
    },
    {
        "id": 2,
        "name": "mohamed",
        "email": "mohamed@test.com",
        "dob": "1999-10-15",
        "skills": ["HTML", "CSS","Javascript", "React", "NodeJS"]
    },
    {
        "id": 3,
        "name": "rahma",
        "email": "rahma@example.com",
        "dob": "2001-02-05",
        "skills": ["python", "Java","Django", "Data analysis"]
    },
]

var today=new Date(); 
var calculatedAge=users.map(function(user){
    var userDate=new Date(user.dob);
    var age=today.getFullYear()-userDate.getFullYear()

    var monthDifference=today.getMonth()-userDate.getMonth();

    console.log("age of user number "+(users.indexOf(user)+1)+" is :");

    if(monthDifference<0) 
    {
        age--;
        monthDifference=12+monthDifference;
    }
    else if((monthDifference===0 && today.getDay()<userDate.getDay()) )
    {
        age--;
        if(userDate.getMonth()>1)
        {
            monthDifference--;
        }
        else
        {
            monthDifference--;
            age--;
            monthDifference=12+monthDifference;
        }
    }
    if(today.getDay()<userDate.getDay())
    {
        monthDifference--;
    }
    console.log(age +"years, "+monthDifference+" months");

    return age;
});

console.log(calculatedAge);
