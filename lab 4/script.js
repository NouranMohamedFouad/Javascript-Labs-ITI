//Question 1
console.log("***************Question 1***************");

console.log(Object.getOwnPropertyNames(Object.prototype));


Array.prototype.average=function()
{
    if(this.length===0)
    {
        return "Array is empty";
    }
    for(var i=0;i<this.length;i++)
    {
        if(typeof this[i] !== "number")
        {
            return "array contains non-numeric values"; 
        }
    }
    var totalSum=this.reduce(function(sum,num){
        return sum+num;
    },0);

    return totalSum/this.length;
};

var arr=[1,2,3,4];
console.log("first array's average: "+arr.average());


var arr=[1,2,"xyz",4];
console.log("second array's average: "+arr.average());

//Question 2
console.log("***************Question 2***************");
//a
console.log("****A****");
Object.prototype.toString=function(){
    return 'This is an object :)';
};

var user={
    name:"nouran",
    age:22
};

console.log(String(user));


//b
console.log("****B****");
Object.prototype.toString=function(){
    if (this.hasOwnProperty('message')) 
    {
        return this.message;
    } 
    return 'This is an object :)';
};

var userWithoutMessage={
    name:"nouran",
    age:22
};
var userWithMessage={
    name:"nouran",
    age:22,
    message:"Hello"
};
console.log("user without message: "+String(userWithoutMessage));
console.log("user with message: "+String(userWithMessage));


//Question 3
console.log("***************Question 3***************");

var count=0;
function Vehicle(type,speed) 
{
    if(count>=50) 
    {
        throw new Error("Vehicle limit reached");
    }
    this.type=type;
    this.speed=speed;
    count++;
    console.log("Vehicle count : "+count);
}
Vehicle.prototype.start=function() {
    console.log(this.type+" is starting.");
};

Vehicle.prototype.stop=function() {
    console.log(this.type+" has stopped.");
};

function Car(type,speed,model) 
{
    Vehicle.call(this,type,speed);
    this.model=model;
}

Object.setPrototypeOf(Car.prototype,Vehicle.prototype);


function isCar1(obj) 
{
    return Object.getPrototypeOf(obj) === Car.prototype;
}
function isCar2(obj) 
{
   return obj instanceof Car;
}

var carObj=new Car("car",100,"2020");
console.log(isCar1(carObj));
console.log(isCar2(carObj));

try {
    for(var i=0;i<55;i++)
    {
        var car="car"+(i+1);
        var carObj=new Car(car,100,"2020");
        carObj.start();
        carObj.stop();
    }
} 
catch(error) 
{
    console.log("vehcile limit reached,BYE :)");
}










