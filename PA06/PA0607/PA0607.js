// Literal objects

speaker = {
  name: "Leigh",
  gender: "female",
  age: 24,
};

document.getElementById("name"). innerHTML = speaker.name
document.getElementById("gender"). innerHTML = speaker.gender
document.getElementById("age"). innerHTML = speaker.age

class Person{
    constructor(name1, age1, gender1){

        this.name1= name1,
        this.age1= age1,
        this.gender1= gender1

    }

    walk(){
        console.log("Walking")
    }

}

const person1 = new Person("leigh", 22, "female")

document.getElementById("age1").innerHTML = person1.age1
document.getElementById("gender1"). innerHTML = person1.gender1
