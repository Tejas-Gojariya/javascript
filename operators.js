1.
/*    Arithmetic Operators

/*These operators are used to perform mathematical calculations 
such as addition, subtraction, multiplication, division, and more.
 For example, the + operator is used for addition, the - operator 
 is used for subtraction, and so on . */

let num1 = 10;
let num2 = 5;
console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)


2. //Assignment Operators

/* These operators are used to assign values to variables. 
 They combine the assignment operation with another operation. 
 For example, the += operator adds the value on the right to the current 
 value of the variable and assigns the result back to the variable.*/

let a = 10;
console.log(a);

a += 5; // a =  a + 5
console.log(a);

a *= 5;
console.log(a);

a += 5;
console.log(a);

a -= 5;
console.log(a);

a /= 10;
console.log(a)

3. //Comparison Operators

// Comparison operators compare two values and return a boolean value, 
// either true or false. For example

let val1 = 16;
let val2 = 50;
console.log(val1 == val2);
console.log(val1 === val2);
console.log(val1 != val2); //checks whether its two operands are not equal, returning a Boolean result
console.log(val1 !== val2);
console.log(val1 > val2);
console.log(val1 >= val2);
console.log(val1 <= val2);

4. //logical operator

//Logical operators perform logical operations and return a boolean value,
// either true or false

let x = 5;
let y = 10;
console.log(x < y) && (y < x)

//logical AND
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); //false

//logical OR
console.log(true || false); // true
console.log(false || false); //false
console.log(true || true); //true

// logical NOT
console.log(!true); // false
console.log(!false); //true

//5. Bitwise Operators

//Bitwise operators perform operations on binary representations of numbers.
let c = 5; // Binary: 0101
let d = 13; // Binary: 0011
let result = c & d;
let result1 = c | d;
let result2 = c ^ d;
let result3 = ~c;
console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);

// 6. conditional operator (ternary operator)

let age = 10;
age > 18 ? console.log("You can vote") : console.log("you can not vote");


// 7. comma operators

let numbers = (12, 1, 10, 545, 184, 2315, 454, 051, 487);
console.log(numbers);