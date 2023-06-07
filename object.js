/* => all object is instance of a Object

 object is inherits properties from Object.prototype , but they are may be shadowed(override)

 null.prototype is not inherits properties from Object.prototype

 change in Object.prototype is see by all objects using prototype chaining

 
 */


let user = {
    name: "tejas",
    age: 18,
  }
  console.log(user);


//   const obj1 = {
//     name: "tejas",
//     city: "amreli",
//     config: { name: "Tejas Gojariya"}};
//   console.log(obj1);

  //object literals

const mysym = Symbol("key1")

  const jsuser ={
    name :"tejas",
    "full name": "tejas gojariya",
    mysym : "mykey1",
    location:"amreli",
    age:"18",
    email:"tejas@gmail.com",
    isloggedIn:false,
    lastlogindays : ["monday", "saturday"]
  }
  console.log(jsuser["email"])
  console.log(jsuser["full name"])
  console.log(jsuser["mysym"])
  

  // freeze -  When an object is frozen, its properties cannot be added, modified, or removed.
  jsuser.email = "tejas123@gmail.com"
  Object.freeze(jsuser)
  jsuser.email = "tehasgojariya@gmail.com"
  console.log(jsuser)


  