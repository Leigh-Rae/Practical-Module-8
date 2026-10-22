// let 
    let name4 = "Leigh";
    console.log(name4);
   

//const
    const age = 20;
    console.log(age);

//Arrow function
    const getSurname = ()=>{
        console.log("Booysen");

    };
    getSurname();

//Template literals
    let name5 = "Leigh"
    let surname= "Booysen"
    let fullname = name5+surname

    let volnaam =`${name5} ${surname}`

//Destructuring
    const person={
        age1:12,
        naam: "leigh",
        van: "booysen"
    }

    const{age1,naam,van}= person

//Spread Operators
const topics=["html","css","js"]
const languages=[...topics,"java","python" ]

//Classes 
class Student {
    constructor(name) {
        this.name = name;
    }
}
let s1 = new Student("Leigh");
console.log(s1.name);

//Modules
// File 1: message.js
export const message = "Hello";
// File 2: main.js
import { message } from "./message.js";
console.log(message);


//Promises
let task = new Promise((resolve) => {
    resolve("Done!");
});
task.then((result) => console.log(result));

