let sname  = "Virat";

let upper = sname.toUpperCase();

console.log(sname);
console.log(upper);

let lname = "KOHLI";

let lower = lname.toLowerCase();

console.log(lname);
console.log(lower);

console.log(lname.includes("O"));

console.log(lname.charAt(2));

console.log(lname.indexOf("H"));

console.log(lname.lastIndexOf("I"));

let fname = sname.concat(" ", lname, " is ", "Best Batsman......");

console.log(fname);

let trimname = "   Hellooo ";
console.log("Before Trimming : ",trimname.length);

console.log("After Trimming : " ,trimname.trim().length);

let str = "Hi How are you...?";

let strArr = str.split(" ");

console.log(strArr);

let sliceStr = "Hello World";

console.log(sliceStr.slice(0, 5));

console.log(sliceStr.slice(6));

console.log(sliceStr.slice(-10));

let spliceStr = "Hello World";
console.log(spliceStr.substring(0, 5));






