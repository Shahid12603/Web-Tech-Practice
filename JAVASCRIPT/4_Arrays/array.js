const arr = [10, 20, 30, 40];
console.log(arr.length); // 4

//! Accessing Elements - push() - It is used to add elements at the end of an array and it will return the length of the array.
arr.push(50); 
console.log(arr);

//! Removing Elements - pop() - It is used to remove the last element of an array.
arr.pop();
console.log(arr);

//! Removing Elements in first - shift() - It is used to remove the first element of an array and return the removed element.
let odd = [1, 3, 5];

odd.shift();
console.log(odd); // [3, 5]

//! Adding Elements in first - unshift() - It is used to add elements in the beginning of an array and return the lenghth of the modified array.
odd.unshift(7);
console.log(odd); // [7, 3, 5]

//! Includes() - It is used to check whether an element is present in an array or not it will return true or else it will return false.
console.log(odd.includes(3)); // true
console.log(odd.includes(2)); // false

//! indexOf() - It is used to find the index of an element in an array.

let arr1 = ["elangavi", "ashok", "mohan"];
console.log(arr1.indexOf("ashok")); // 1
console.log(arr1.indexOf("elangavi")); // 0
console.log(arr1.indexOf("mohan")); // 2

//! concat() - It is used to merge two or more arrays and it will return one new array.

let frontend = ["HTML", "CSS", "JavaScript", "React"];
let backend = ["Node", "Express", "MongoDB"];

let fullstack = frontend.concat(backend, ["SQL"]);
console.log(fullstack);

//! reverse() - It is used to reverse the elements of an array, It will return the reversed array...

let arr2 = [1, 2, 3, 4, 5];
arr2.reverse();
console.log(arr2);

//! join() - It is used to join the elements of an array into a string.

let arr3 = ["I", "love", "JavaScript"];
console.log(arr3.join(" ")); // I love JavaScript

//! Reverse the String using Built-in Methods

let str = "Elangavi is a Java Full Stack Developer";

let strArr = str.split("");

let rev = strArr.reverse();

let revStr = rev.join("");

console.log(revStr);

//! In one line

let x = str.split("").reverse().join("");
console.log(x);

//! Slice Method

let mark = [2,4,565,7,7];
let marks = mark.slice(1,3);
console.log(marks);
console.log(mark);

//! Splice Method

let gun = [10,20,30,40];
gun.splice(2,2,"Shahid");
console.log(gun);


//! Higher Order Array Methods
//? It is used to perform some operations on the array elements and it will return a new array.
//! Map 

let sub = ['html', 'css', 'js'];

let upper = sub.map((ele) => {
    return ele.toUpperCase();
})

console.log(upper);

let lower = sub.map((ele) => {
    return ele.toLowerCase();
})

console.log(lower);


//! Problem Statement Output : [40, 50]

let numbers = [10, 20, 30, 40, 50];

let ans1 = [];

let ans = numbers.map((ele) => {
    return ele > 30 ? ans1.push(ele) : "";
})

console.log(ans1);

//! Filter() => 
//? It is one of the Higher Order Array method.
//? It is used to check the condition and if the condition is matching then it will return the element.
//? It can take 3 parameters (element, index, array)

let evenNumbers = [2, 4, 6, 8, 10, 12, 14, 16];

let evenAns = evenNumbers.filter((ele) => {
    return ele > 10;
})

console.log(evenAns);

//! Problem Statement

let sub1 = ['html', 'css', 'mongoDB', 'React JS'];

let ans3 = sub1.filter((ele) => {
    return ele != 'React JS';
})

console.log(ans3);

//! Reduce() =>
//? It is one of the Higher Order Array method.
//? The Reduce() method executes a reducer function(that you provide) on each element of the array, resulting in a single output value 
// //? It can take 4 parameters (accumulator, element, index, array)
let evenArr = [2,4,6,8];

let ansArr = evenArr.reduce((acc, ele) => {
    console.log(acc);
    return acc+ele;
})
console.log("Sum of the Even Numbers: " ,ansArr);

//! sort()

let arr4 = [6,2,78,1,9,4,5];

//! It is used to sort the elements of an array in ascending order.
let ansArr1 = arr4.sort((a, b) => {
    return a - b;
})
console.log("Ascending Order is: ",ansArr1);

//! It is used to sort the elements of an array in descending order.
let ansArr2 = arr4.sort((a, b) => {
    return b - a;
})
console.log("Descending Order is: ", ansArr2);


