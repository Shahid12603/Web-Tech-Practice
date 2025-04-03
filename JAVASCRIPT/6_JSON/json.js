let data = {
    "sname" : "Shahid",
    "number" : 1234
}

console.log(data);

//! JSON.strigify()
//* It will convert any js object into JSON

let str = JSON.stringify(data);

console.log("It is used to convert Object to String",str);

//! JSON.parse()
//* It will convert the json data into javascript object

let obj = JSON.parse(str);

console.log("It is used to convert String to Object",obj);

//! JSON (Javascript Object Notation) is a lightweight data-interchange format.
//! That is easy for humans to read and write ans easy for machines to parse and generate,

//! Advantage of JSON...

//! Human Readable

//! JSON Structure is easy for development to understand and write..

//! Light Weight

//! JSON is a minimal format that reduces the size of the data being transmitted..

//! language = Independent:

//! JSON can be used with many programming languages including JS, Pyhton, Ruby, Java, etc...