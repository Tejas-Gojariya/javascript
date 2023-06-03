/* falsy values in JavaScript are values that are considered false 
when used in a Boolean context. 

There are six falsy values

1. false, 
2. 0, 
3. an empty string (''), 
4. null, 
5. undefined, 
6. and NaN (Not-a-Number).

*/

// An empty string ('')

let name = '';
if (name) {
  console.log('Name is truthy');
} else {
  console.log('Name is falsy');
}

// 0

let quantity = 0;
if (quantity) {
  console.log('Quantity is truthy');
} else {
  console.log('Quantity is falsy');
}

// false

let isLoggedIn = false;
if (isLoggedIn) {
  console.log('User is logged in');
} else {
  console.log('User is not logged in');
}


