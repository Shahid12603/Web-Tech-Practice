console.log("loop in js")

//diff btw "for in " and "for of" loop
//for in loop
//if we traverse any array by using for in loop it will take elements.
//if we traverse object then it will take index

let even=[2,3,4,5,6,7,8,10]

for(let i in even)
{
    console.log(i,even[i])
}

let student={
    sname:"san",
    age:10,
    phno:898,
}

for(let key in student)
{
    console.log(key,student[key])
}


//for of loop
//if we traverse any array by using for of loop it will take elements.
//if we traverse object then it will throw error

for(let ele of even)
{
    console.log(ele);
}

for(let i of student)
{
    console.log(i)
}