
////////Question 1//////////////////

// var count=0;
// class Vehicle {
//     constructor(type, speed) 
//     {
//         if (count >= 50) {
//             throw new Error("Vehicle limit reached");
//         }
//         this.type = type;
//         this.speed = speed;
//         count++;
//         console.log("Vehicle count : " + count);
//     }
//     start() {
//         console.log(this.type + " is starting.");
//     }
//     stop() {
//         console.log(this.type + " has stopped.");
//     }
// }

// class Car extends Vehicle {
//     constructor(type, speed, model) 
//     {
//         super(type, speed);
//         this.model = model;
//     }
// }

// Object.setPrototypeOf(Car.prototype,Vehicle.prototype);


// function isCar1(obj) 
// {

//     return Object.getPrototypeOf(obj) === Car.prototype;
// }

// function isCar(obj) 
// {
//    return obj instanceof Car;
// }

// var carObj=new Car("car",100,"2020");
// console.log(isCar(carObj));
// console.log(isCar1(carObj));

// try {
//     for(var i=0;i<55;i++)
//     {
//         var car="car"+(i+1);
//         var carObj=new Car(car,100,"2020");
//         carObj.start();
//         carObj.stop();
//     }
// } 
// catch(error) 
// {
//     console.log("vehcile limit reached,BYE :)");
// }


////////Question 2//////////////////

async function getUsers()
{
    const usersUrl = "https://jsonplaceholder.typicode.com/users";
    const postsUrl = "https://jsonplaceholder.typicode.com/posts";
    const commentsUrl = "https://jsonplaceholder.typicode.com/comments";


    const data1=await fetch(usersUrl);
    const data2=await fetch(postsUrl);
    const data3=await fetch(commentsUrl);


    const users=await data1.json();
    const posts=await data2.json();
    const comments=await data3.json();
    
    var table=document.getElementById("table");
   
    users.forEach(element =>  
    {
        let username=element["username"];
        let email=element["email"];
        let companyName=element["company"]["name"];
        let addressLat=element["address"]["geo"]["lat"];
        let addressLng=element["address"]["geo"]["lng"];

        let row=document.createElement("tr"); 

        let col1=document.createElement("td"); 
        let col2=document.createElement("td"); 
        let col3=document.createElement("td"); 
        let col4=document.createElement("td"); 
        let col5=document.createElement("td"); 
        //////////////////////////
        col1.innerText=username;
        col2.innerText=email;
        col3.innerText=companyName;
        col4.innerText=addressLat+" , "+addressLng;
        /////////////////////////

        let filteredPosts = posts.filter(post => element["id"] == post["userId"]);
        let postsTitle=filteredPosts.map(post => post["title"]);

        let filteredComments = filteredPosts.map(post =>{
            const postComments= comments.filter(comment => comment["postId"] == post["id"]);
            return postComments.length;
        });

        console.log(filteredComments);

        let ul=document.createElement("ul");
        let i=0;
        postsTitle.forEach(element => 
        {
            // console.log(filteredComments[element].length);
            let li=document.createElement("li");
            li.innerText=element +": \n This post contains "+filteredComments[i++]+" Comments";  
            ul.appendChild(li);          
        });

        col5.appendChild(ul);

        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        row.appendChild(col4);
        row.appendChild(col5);

        table.appendChild(row);
         
        table.style.color="brown";
        table.style.backgroundColor="rgba(247, 202, 159, 0.6)";
        table.style.borderRadius="5px";
        table.style.margin="10px auto";
    });
}

getUsers();






