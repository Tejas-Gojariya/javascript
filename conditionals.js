// if-else statement

let age = 25;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// else-if

console.log(testnum(15));

function testnum(a) {
    let result;
    if (a > 0) {
        result = 'positive';
    } else {
        result = 'not positive';
    }
    return result;
}

// nested-if-else

let num = 7;
if (num < 10) {
    if (num < 5) {
        console.log("Number is less then 5");
    } else {
        console.log("Number is greater then 5 but less then 10");
    }
}

// nested-if-else

var temperature = 90;
var time = "morning";

if (temperature > 30) {
    if (time === "morning") {
        console.log("It's hot in the morning!");
    } else {
        console.log("It's hot in the afternoon or evening!");
    }
} else {
    console.log("It's not that hot today.");
}

//switch 

const month = 3
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;

    default:
        console.log("default case match")
        break;
}