let wish = () => {
    console.log("I wish you a Happy Birthday !🍥🎂🎂🍰");
}

//? setTimeout() => executes a function after a specified number of milliseconds

//First Method
setTimeout(wish, 2000); // 2 seconds delay

//Second Method
setTimeout(() => {
    console.log("I wish you a Happy Birthday !🍥🎂🎂🍰");
}, 4000); // 3 seconds delay
