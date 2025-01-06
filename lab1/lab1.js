console.log("----------------Question 1---------------------------------"); 
//Question 1
function isPalindrome(str) 
{
    if(typeof str!=="string") 
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
    if (typeof price!=='number' || typeof discount!=='number') 
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
console.log("copiedMovies:"+copiedMovies);

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



console.log("---------------Question 4---------------------------------");
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

console.log("----------------Question 6---------------------------------");
//Question 6

var orders=[
    {
      orderId: 'ORD001',
      customer: 'John Doe',
      items: 'item1:2,item2:1,item3:5',
      orderDate: '2023-12-01',
      deliveryDate: '2023-12-05',
      deliveryAddress: '123, Main Street, Springfield, USA',
    },
    {
      orderId: 'ORD002',
      customer: 'Jane Smith',
      items: 'itemA:3,itemB:4',
      orderDate: '2023-11-15',
      deliveryDate: '2023-11-20',
      deliveryAddress: 'Flat 4B, Elmwood Apartments, New York, USA',
    },
    {
      orderId: 'ORD003',
      customer: 'Alice Johnson',
      items: 'itemX:1',
      orderDate: '2023-10-10',
      deliveryDate: '2023-10-15',
      deliveryAddress: '456, Pine Lane, Denver, USA',
    }
];


var quantaties=orders.map(function(order)
{
    var totalItems=order.items.split(',')
    .reduce(function(sum,item){
        var quantity=parseInt(item.split(':')[1]);
        return sum+quantity;
      },0);
    return totalItems;
});

function getTotalItems(index)
{
    return quantaties[index];
}
function getDeliveryDuration(order)
{
    return((new Date(order.deliveryDate)-new Date(order.orderDate))/(1000*60*60*24));
}
// var deliveryDurations=orders.map(function(order)
// {
//     return(new Date(order.deliveryDate)-new Date(order.orderDate)/(1000*60*60*24));
// });

var addressParts=orders.map(function(order)
{
    return order.deliveryAddress.split(',');   
});

function getDeliveryCountry(addressIndex)
{
    return addressParts[addressIndex][3];
}
function getDeliveryCity(addressIndex)
{
    return addressParts[addressIndex][2];
}
function getDeliveryStreet(addressIndex)
{
    return addressParts[addressIndex][1];
}
function getBuildingNumber(addressIndex)
{
    return addressParts[addressIndex][0];
}
const formattedOrders=orders.map(function(order)
{  
    return{
      orderId: order.orderId,
      customer: order.customer,
      totalItems:getTotalItems(orders.indexOf(order)),
      orderDate: order.orderDate,
      deliveryDate: order.deliveryDate,
      deliveryDuration:getDeliveryDuration(order),
      deliveryCountry:getDeliveryCountry(orders.indexOf(order)),
      deliveryCity:getDeliveryCity(orders.indexOf(order)),
      deliveryStreet:getDeliveryStreet(orders.indexOf(order)),
      buildingNumber:isNaN(getBuildingNumber(orders.indexOf(order)))? getBuildingNumber(orders.indexOf(order)):parseInt(getBuildingNumber(orders.indexOf(order)))
    };
});
console.log(formattedOrders);
