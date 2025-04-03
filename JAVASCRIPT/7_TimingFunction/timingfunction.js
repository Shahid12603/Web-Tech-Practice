let wish = () => {
    console.log("I wish you a Happy Birthday !🍥🎂🎂🍰");
}

//? setTimeout() => executes a function after a specified number of milliseconds
//! It will take two parameters, first is the function name and second is the time in milliseconds

//First Method
setTimeout(wish, 2000); // 2 seconds delay

// //Second Method
// setTimeout(() => {
//     console.log("I wish you a Happy Birthday !🍥🎂🎂🍰");
// }, 4000); // 3 seconds delay

//? setInterval() => executes a function repeatedly, with a fixed time delay between each call to that function
//! It will take two parameters, first is the function name and second is the time in milliseconds
let sname = () => {
    console.log("Hari Dhoni");
};

// setInterval(sname,  1000); // 2 seconds delay

// setInterval(() => {
//     console.log("Mohamed Shahid");
// },  4000); // 2 seconds delay

//? clearTimeout() => clears a timeout set by setTimeout()
//! It will take one parameter, first is the function name
clearTimeout(wish); // It will clear the timeout function

//? clearInterval() => clears an interval set by setInterval()
//! It will take one parameter, first is the function name

clearInterval(sname); // It will clear the interval function


