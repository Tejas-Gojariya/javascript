const user = {
    username : "tejas",
    price : 1000,


welcomemessage: function() {
    console.log(`${this.username}, welcome to website`);
    // console.log(this);
}
}
// user.welcomemessage()
// console.log(this);

function one() {
    let username = "tejas"
    console.log(this.username)
}

one()



const addtwo = (num1, num2)=> (num1+ num2)


console.log(addtwo(3, 4))