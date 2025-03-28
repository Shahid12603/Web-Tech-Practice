let Laptop = {
  brand: "ASUS",
  price: 100000,
  Color: "Black",
  game: () => {
    console.log("Playing PUBG");
  },
};

console.log(Laptop);
Laptop.game();

let Student = {
  sname: "Elangavi",
  age: 21,
  isStudent: true,
  skills: ["HTML", "CSS", "JS", "JAVA", "SQL"],
  Address: {
    city: "Vannikonendal",
    pincode: 627951,
  },
};

console.log(Student);

//! How to Access with the Key
console.log(`Student name is ${Student.sname} and the city is ${Student.Address.city}`);

//! How to modify the Value
Student.sname = "Elangavi S";
console.log(Student);

//! How to Add
Student.ph_no = 9876543210;
console.log(Student);

//! How to Delete
delete Student.isStudent;
console.log(Student);

//! Object Methods

//* 1. Object.keys() => It is used to return all the keys of the object in the form Array

let keys = Object.keys(Student);

console.log(keys);

//* 2. Object.values() => It is used to return all the values of the object in the form Array

let values = Object.values(Student);

console.log(values);

//* 3. Object.entries() => Is is used to return all the key and values in the seperate array inside in the form of array.

let entries = Object.entries(Student);

console.log(entries);

//* 4. Object.freeze() => This Method will make the object frozen so that we can't add/modify/delete any keys from the object...

let freeze = {
    name : "Shahid",
    age : 21
}

console.log(freeze);
Object.freeze(freeze);

freeze.age = 10;
console.log(freeze);

//* 5. Object.isFrozen() => It is used to check wheather the object is frozen or not. If the object is frozen it will return true otherwise it will return false.

console.log(Object.isFrozen(freeze)); //true
console.log(Object.isFrozen(Student)); // false

//* 6. Object.seal() => It is also similar to Object.freeze(ob2) but in this method we cannot add anything. It is used to modify only the values.

let ob2 = {
    obname : "ASUS",
    price : 4000000
}

console.log(ob2);

Object.seal(ob2);

//! Adding is not possible
ob2.Color = "Blue";
console.log(ob2);

//! Only Modification is possible
ob2.price = 5000000;
console.log(ob2);

//* 7. Object.isSealed() => It is used to return true if the object is sealed, Otherwise it will return false.

console.log(Object.isSealed(ob2)); // true
console.log(Object.isSealed(Student)); //false

let Students = [
  {
    sname: "Elangavi",
    age: 21,
    isStudent: true,
    skills: ["HTML", "CSS", "JS", "JAVA", "SQL"],
  },
  {
    sname: "Mohan",
    age: 22,
    isStudent: true,
    skills: ["HTML", "CSS", "JS", "JAVA", "SQL", "PYTHON"],
    Address: {
      city: "Salem",
      pincode: 636008,
    },
  },
  {
    sname: "Ashok",
    age: 22,
    isStudent: true,
    skills: ["HTML", "CSS", "JS", "JAVA", "SQL"],
  },
];

console.log(Students);

console.log(`Student Address ${Students[1].Address.city}`);


