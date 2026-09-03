
class Fruits{
    constructor(name, season, flavour){

        this.name= name,
        this.season= season,
        this.flavour= flavour

    }

    grow(){
        console.log("Growing")
    }

}


class Citrus extends Fruits{
    constructor(name,season, flavour){
        super(name);

        this.name = name

    }

}

const Citrus1 = new Citrus("Lime", "Summer", "Sour")
const fruit1 = new Fruits("Orange", "Winter", "Citrus")
