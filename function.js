//A function is a set of statements that take inputs, do some specific computation, and produce output.

function sayMyname(){
    console.log("t");
    console.log("e");
    console.log("j");
    console.log("a");
    console.log("s");
}
// sayMyname()

function addtwonumber(number1 , number2){
    let result= (number1 + number2);
    return result
}

const result = addtwonumber(3, 5)

console.log("result:",result)


function loginusermessage(username){
    if (username === undefined){
        console.log("please enter a username");
        return
    }
    return`${username} just logged in`
}

console.log(loginusermessage())