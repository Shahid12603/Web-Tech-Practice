//? Object destructuring
//? It is a convenient way to extract values from arrays or objects and assign them to variables in a more readable and concise manner.
let ob1 = {
    price : "10",
    color : "blue",
}

console.log(ob1.price); // 10
console.log(ob1.color); // red

let {price, color} = ob1; // destructuring
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
