class Flowers{
constructor(name , season, colour , scent , typeOfflower){
    this.name = name,
    this.season = season,
    this.colour = colour,
    this.scent = scent,
    this.typeOfflower = typeOfflower
}

getFlowers() {
        fetch("flowers.json")
            .then(function(response) {
            return response.json();
         })
            .then(function(data) {
            console.log(data);
         })
            .catch(function(error) {
            console.log(error);
         });
}

}
const flower1 = new Flowers("Lilly_Of_The_Valley", "Spring" , "White" , "Floral-oud" , "Typical")
const flower2 = new Flowers("Rose", "Summer" , "Black" , "Fresh-oak" , "Exotic")


//PA0603

class Trees extends Flowers{
    constructor(name, season,scent, type, seasonTime){
        super(name,season, scent,type, );
        this.seasonTime= seasonTime
    }

    displayBio(){
        return this.name + "usually produces fruits during" + this.seasonTime
    }

}

const tree1= new Trees("Apple-Tree","Summer","Sweet","Seasonal")


//PA0604

class Trees extends Flowers{
    constructor(name, season,scent, type, seasonTime){
        super(name,season, scent,type, );
        this.seasonTime= seasonTime
    }

    displayBio(){
        return this.name + "usually produces fruits during" + this.seasonTime
    }

}

const tree2= new Trees("Apple-Tree","Summer","Sweet","Seasonal")

//PA0605////////////////////////////////
class Flowers {

    constructor(name, season, colour, scent, typeOfFlower) {
        this.name = name;
        this.season = season;
        this.colour = colour;
        this.scent = scent;
        this.typeOfFlower = typeOfFlower;
    }

    getFlowers() {
        fetch("flowers.json")
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log(data);
            })
            .catch(function(error) {
                console.log(error);
            });
    }
}

const flower4 = new Flowers(
    "Lily Of The Valley",
    "Spring",
    "White",
    "Floral-oud",
    "Typical"
);

const flower5 = new Flowers(
    "Rose",
    "Summer",
    "Black",
    "Fresh-oak",
    "Exotic"
);


// PA0603

class Trees extends Flowers {

    constructor(name, season, colour, scent, typeOfFlower, seasonTime) {
        super(name, season, colour, scent, typeOfFlower);
        this.seasonTime = seasonTime;
    }

    displayBio() {
        return this.name + " usually produces fruits during " + this.seasonTime;
    }
}

const tree3 = new Trees(
    "Apple Tree",
    "Summer",
    "Green",
    "Sweet",
    "Fruit Tree",
    "Summer"
);


// PA0604

const tree4 = new Trees(
    "Orange Tree",
    "Winter",
    "Green",
    "Citrus",
    "Fruit Tree",
    "Winter"
);

console.log(tree1.displayBio());
console.log(tree2.displayBio());