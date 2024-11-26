// let score = 100
// console.log(score++)  //object
// console.log(++score)
//console.log("Shubham")

// console.log("2" > 1);
// console.log("02" > 1);
// // console.log(true+)  //Error
// const name= "Shubham"
// const repoCount = 50
// console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`)

let myDate = new Date
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

// let customDate = new Date(2023, 0, 23)
// console.log(customDate.toDateString())

// let customDate = new Date("2024-01-14") 
// console.log(customDate.toLocaleString()) 

let timeStamp = Date.now()
// console.log(timeStamp)
// console.log(Math.floor(timeStamp/1000))

// const myArr = [0,1,2,3,4,5]
const myHeors = ["shaktiman", "naagraj"]
// myArr.unshift(10,11)
// console.log(myArr) 

const myArr = [0,1,2,3,4,5]
// console.log("A ", myArr)

// const myn1 = myArr.slice(1,3)
// console.log(myn1)
// console.log("B ", myArr)

// const myn2 = myArr.splice(1,3)
// console.log(myn2)
// console.log("C ", myArr)

const newArr = myArr.join()
// console.log(myArr)
// console.log(newArr);
// console.log(typeof newArr)

const marvel = ["thor", "ironman", "spiderman"]
const dc = ["batman", "flash", "superman"]

//marvel.push(dc)
// console.log(marvel);

// console.log(marvel.concat(dc))
// console.log(marvel);
// console.log(dc);

// const all = [...marvel, ...dc]
// console.log(Array.from("Shubham"));

const sym = Symbol("key1")

const user = {
    name : "Shubham",
    "full name" : "Shubham Kundu",
    [sym]: "",
    age : 24,
    location : "Bangaluru",
    email : "shubham@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(user.email)
// console.log(user[sym])
user.greeting = ()=>{
    console.log("Hello")
}
user.greeting2 = function(){
    console.log(`Hello user, ${this.name}`)
}
// console.log(user.greeting());
// console.log(user.greeting2());

// const tinderUser = new Object()
// console.log(tinderUser);

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@google.com",
    name : {
        userfullname :{
            firstname : "Shubham",
            lastname : "Kundu"
        }
    }
}
// console.log(regularUser.name.userfullname)
// console.log(regularUser.name?.userfullname.firstname) //Shubham

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj4 = {5:"e", 6:"f"}


// const obj3 = {obj1,obj2}
const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "h@gmail.com"
    },
]
// console.log(users[1].email)

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "shubham"
}
//normal way to access
console.log(course.price)    //999

//other way

const {price} = course
// console.log(price)

