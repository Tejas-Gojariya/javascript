// const tinderuser = new object{hello}
const tinderuser= {}

tinderuser.id = "123ssd"
tinderuser.name = "tejas"
tinderuser.isloggedIn = false

console.log(tinderuser);

const regularuser ={
    email:"tejas@gmail.com",
    fullname:{
        userfullname :{
            firstname:"tejas",
            lastnmae :"Gojariya",
        }
    }
}
console.log(regularuser.fullname.userfullname.firstname);

// Object Assign 
// The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object.
//  It returns the modified target object.

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4:"d"}
const obj3 = {5: "e", 6:"f"}

const obj4 =Object.assign({}, obj1,obj2,obj3)
console.log(obj4)
