// array 

// array is object is js that is capable of store collection of multiple items  
// it can be same data type or different data type
// resizable
// JavaScript arrays are not associative arrays
// 1st elm index 0 , last index length-1
// array copy operation perform shallow copy


let fruitList = ["apple", "banana", "kiwi", ];


// push - add a new items to the end of an array 
console.log(fruitList.push("watermelon"));
console.log(fruitList);


// pop - removes the last element of an array
console.log(fruitList.pop());
console.log(fruitList);


// swift - remove 1st(0th index) element and return it , change og array
console.log(fruitList.shift());
console.log(fruitList);


// unswift - adds new elements to the beginning of an array. 
console.log(fruitList.unshift("mango"));
console.log(fruitList);
console.log(fruitList.unshift("greps"));
console.log(fruitList);


// includes 
nums = [3, 5, 12, 6, 7, 8];
console.log(nums.includes(5));
console.log(nums.includes(5, 2)); //(key,startIndex)


// indexOf() - return first index if found else -1 (use ===)
arr1 = ["IND", "USA", "UK", "IND"];
console.log(arr1.indexOf("UK"));
console.log(arr1.indexOf("CN"));
console.log(arr1.indexOf("IND")); // only return 0 (first index)
console.log(arr1.indexOf("IND", 2)); // start searching from index 2

// join - not change og array , convert array into string
fruitList = ["apple", "banana", "kiwi", "greps"];
console.log(fruitList.join("_")); // in "" give ant delimiter
console.log(fruitList);


// concat() - merge to or more array not modify og array , return shallow copy
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);


// flat
let arr = ["a","b", "c", ["d", "e", "f", ["g", "h", "i", ["tejas", ["abc", ["def"]]]]],
  ];
  
  console.log(arr.flat()); // return new array
  console.log(arr.flat(2)); // 2 level
  console.log(arr.flat(3));
  console.log(arr.flat(Infinity));
  