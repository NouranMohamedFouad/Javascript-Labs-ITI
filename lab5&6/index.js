// // Classes ES6  and function constructor

// // function User(name){
// //     this.name = name
// // }

// // User.prototype.getName = function(){
// //     return this.name
// // }

// // const user = new User('name')

// // console.log(user)

// // syntactic sugar for function constructor

// // class User {
// //     static isPerson = true

// //     constructor(name){
// //         if(User.isPerson){

// //         }
// //         this.name = name;
// //     }

// //     getName(){
// //         return this.name;
// //     }

// //     static sayHello(){
// //         return 'Hello '
// //     }
// // }
// // console.log(User.sayHello())
// // const user = new User('name');

// // class Admin extends User {
// //     constructor(){
// //         super('admin')
// //         this.isAdmin = true;
// //     }
// // }

// // const admin = new Admin();
// // console.log(admin.getName())

// // class User {
// //     constructor(name) {
// //         this.name = name;
// //     }
// //     getName() {
// //         console.log(this.name);
// //     }
// // }

// // class Admin extends User {
// //     constructor() {
// //         super('admin')

// //     }

// //     getName() {
// //         console.log('admin here')
// //     }

// // }

// // const admin = new Admin();





// // Callbacks and callback hell

// // console.log('before')
// // setTimeout(()=>{
// //     console.log('inside timeout');
// // }, 0);
// // console.log('after')


// // function user(name, callback) {
// //     console.log('user '+ name);
// //     callback(name)
// // }

// // function sayHello(doSth){
// //     console.log('say hello')
// //     return doSth
// // }
// // function doSth(){
// //     console.log('last callback')
// // }

// // user('userName', sayHello(doSth))


// // callback hell 
// // synchronous code
// // synchronous code

// // synchronous code

// // setTimeout(()=>{
// //     console.log('first')
// //     setTimeout(()=>{
// //         console.log('second')
// //         setTimeout(()=>{
// //             console.log('third')
// //         }, 3000)

// //         setTimeout(()=>{
// //             console.log('fourth')
// //         }, 500)

// //     }, 2000)
// // },500)


// // function getUser(userId, cb) {
// //     setTimeout(() => {
// //         console.log('fetched user data from server')
// //         cb({ id: userId, name: 'name' })
// //     }, 2000)
// // }
// // function getOrder(user, cb) {
// //     setTimeout(() => {
// //         console.log('Got the orders! for user: ' + user.name)
// //         cb(['order1', 'order2'])
// //     }, 1000)
// // }

// // function sendEmail(orders, cb) {
// //     setTimeout(() => {
// //         console.log('sent Email successfully!')
// //         cb(orders)
// //     }, 1000)
// // }


// // getUser(1, (user) => {
// //     getOrder(user, (orders) => {
// //         sendEmail(orders, () => {
// //             console.log('finished elhamdulallah')
// //         })
// //     })
// // })

// // function handleUser(user){
// //     getOrder(user, handleOrders)
// // }

// // function handleOrders(orders){
// //     sendEmail(orders, handleEmail)   
// // }

// // function handleEmail(){
// //     console.log('finished')
// // }

// // getUser(1, handleUser)














// // Asynchronous programming



// // Promises

// // new Promise()
// // pending // fullfilled // rejected

// // const promise = new Promise((resolve, reject) => {
// //     reject({message: 'error occurres', error: {
// //         err: 'error occurres'
// //     }})
// // })
// // promise.then((data) => {
// //         console.log(data)
// //     }).catch((err)=>{
// //         console.log(err)
// //     }).finally(()=>{
// //         console.log('finally')
// //     })


// // const promise = new Promise((resolve, reject) => {
// //     const state = false;

// //     setTimeout(() => {
// //         if (state) resolve('promise complete')
// //         else reject('promise rejected')
// //     }, 2000)
// // });

// // promise.then((res) => {
// //     console.log(res)
// // }).catch((err) => {
// //     console.log(err)
// // }).finally(() => {
// //     console.log('finally')
// // })
// // console.log('first')
// // const fetchUser = () => {
// //     return new Promise((resolve) => {
// //         setTimeout(() => {
// //             console.log('user')
// //             resolve({ user: 'Ahmed' })
// //         }, 2000)
// //     })
// // }

// // const fetchOrders = (user) => {
// //     return new Promise((_, reject) => {
// //         setTimeout(() => {
// //             console.log('orders')
// //             reject("failed to fetch orders")
// //         }, 1000)
// //     })
// // }

// // const sendEmail= (orders)=>{
// //     return new Promise((resolve) => {
// //         setTimeout(() => {
// //             console.log('email')
// //             resolve(`Email sent with ${orders}`)
// //         }, 1000)
// //     })
// // }
// // fetchUser() // user
// //     .then((user) => fetchOrders(user))
// //     .then((orders) => sendEmail(orders))
// //     .then((data)=>console.log(data))
// //     .catch((err) => console.error(err))

// // console.log('last')

// const promise1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('promise 1 resolver')
//     }, 1000)
// })


// // const promise2 = new Promise((resolve) => {
// //     setTimeout(() => {
// //         resolve('promise 2 resolve')
// //     }, 2000)
// // })
// // const promise3 = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         reject('promise 3 resolveed')
// //     }, 1000)
// // })



// // all resolved or the first rejected
// // Promise.all([promise1, promise2, promise3])
// //     .then((res) => {
// //         const [res1, res2] = res
// //         console.log(res)
// //     })
// //     .catch(console.error)

// // Promise.allSettled([promise1, promise2, promise3])
// //     .then(console.log)
// // .catch(console.error)

// // Promise.race

// // Promise.any // first one fulfilled or all errors

// // const posts = fetch('https://jsonplaceholder.typicode.com/posts')

// // posts
// //     .then((res) => res.json())
// //     .then((data) => console.log(data))
// //     .catch(console.error)
// // Promise.resolve("hello").then(console.log)
// // Promise.reject("hello").catch(console.error)


// // Async Await

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({ error: true, message: 'sth went wrong' })
//     }, 2000)
// })
// // promise2.then().catch()
// console.log('sync')
// console.log('sync')

// async function getPromise() {
//     try {
//         const promise = await promise2
//         console.log(promise)
//     } catch (error) {
//         if(error.message = 'jdsa')
//         console.log({ error })
//     }
//  }

// getPromise()

// console.log('after async function')
