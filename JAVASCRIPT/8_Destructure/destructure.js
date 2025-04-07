//? Object destructuring
//? It is a convenient way to extract values from arrays or objects and assign them to variables in a more readable and concise manner.
let ob1 = {
  price: "10",
  color: "blue",
};

console.log(ob1.price); // 10
console.log(ob1.color); // red

let { price, color } = ob1; // destructuring
console.log(price); // 10
console.log(color); // blue

console.log(ob1); // { price: '10', color: 'blue' }

//? Array destructuring
//? It is similar to object destructuring, but it uses square brackets instead of curly braces.

let arr = [10, 20, 30, 40, 50];
let [a, b, c] = arr; // destructuring
console.log(a); // 10
console.log(b); // 20
console.log(c); // 30
console.log(arr); // [ 10, 20, 30, 40, 50 ]

//1.rest parameter
//The rest parameter is used to group the remaining element into an array.
//it collects the rest of the arguments that were not explicitly specified.
//the rest parameter is represented by three dot(...)

function hello(a, b, ...c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
hello(10, 20, 30, 40, 50, 60, 70);

//2.spread operator
//the spread operator in javascript allow to expand an array,object or iterator into individual elements.
//the spread operator is represent by the three dott(...)

let [x, y, ...z] = arr;
console.log(z);
let [p, q, ...s] = arr;
{
  console.log(s);
}
let arr1 = [12, 13, 14];
let arr2 = [15, 16, 17];

let arr3 = [...arr1, ...arr2];
console.log(arr3);

//shallow copy
//A shallow copy of an object is new object that is the copy of the orginal, but its only copies the reference of nested objects instead of creating new instances.
//this means that if the original object contains another object asa aproperty,changes to the nested object in the copy will affect the original and vice versa.

let a3 = [10, 20];
let copy = a3;

copy.push(40);
console.log(copy); //10 20 40
console.log(a3); //10 20 40

//3.deep copy

let a4 = [50, 60];
console.log(a4);
//let copy2=[...a4]
let copy2 = JSON.parse(JSON.stringify(a4));

copy2.push(100);
//console.log(copy2)//50,60,100
