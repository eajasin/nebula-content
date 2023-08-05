//Gigapet inspired!
//I am creating Pet RPG in which person has to feed, play with, and groom pets; person also has to purchase food, toys, groom tools, and a new pet.
// Person earns coins for each interaction with the pets.  Each pet starts with varying levels. 
// Each property of pet 10 drops every x amount of seconds, and person gets a warning when value reaches 50.
//Upon caring for pet, the seconds interval begins again.  If any fall to 0, it's Game Over.
//At the pet store, there are two different types of all items, each with their own prices and value added to pet when used.


class Person {
    constructor(name, food, toys, groom, coins) {
        this.name = name;
        this.food = food;
        this.toys = toys;
        this.groom = groom;
        this.coins = coins || 100;
    }
    introduction() {
        return `Hi, I'm ${this.name}.  I have ${this.food} food, ${this.toys} toys and ${this.groom} grooming tools.`
    }
    feed(pet){
        if(this.food > 0 && pet.hunger < 50){
            pet.hunger += 10;
            this.food -= 1;
            this.coins += 5
           return `${this.name} fed ${pet.name} with ...` 
        } else {
            return `${this.name} is out of food and cannot feed ${pet.name}.`
        }
        }
    
    playWith(pet) {
        if(this.toys > 0 && pet.boredom < 50){
            pet.boredom += 10;
            this.toys -= 1;
            this.coins += 5
           return `${this.name} played with ${pet.name} using the ${this.toy}.` 
        } else {
            return `${this.name} is out of toys and cannot play with ${pet.name}.`
        }
    }
        
    groom(pet){
        if(this.groom > 0 && pet.ungroomed < 50){
            pet.ungroomed += 10;
            this.groom -= 1;
            this.coins += 5
           return `${this.name} groomed ${this.petname} using the ${this.groomTool}.` 
        } else {
            return `${this.name} is out of grooming tools and cannot groom ${pet.name}.`
        }
        }
    
    // purchase(item, petStore){
    // need to determine how to make purchase of which item
    
    gameOver(){
        if(this.food === 0 || this.toys === 0 || this.groom === 0){
            return `Game Over! ${pet.name} got taken away by Animal Protective Services.  Shame on you, ${this.name}!`

        }
    }


    }


let person1 = new Person('Bob', 10, 10, 10, 50)
//console.log(person1.introduction())


class Pets {
    constructor(name, hunger, boredom, ungroomed) {
        this.name = name;
        this.hunger = hunger;
        this.boredom = boredom;
        this.ungroomed = ungroomed;
        
    }
    introduction(){
        return `Hi, I'm ${this.name}.  I have ${this.hunger} hunger, ${this.boredom} boredom and ${this.ungroomed} ungroomed.`
    }
    decreaseProperties(){
        this.hunger = Math.max(this.hunger - 10, 0);
        this.boredom = Math.max(this.boredom - 20, 0);
        this.ungroomed = Math.max(this.ungroomed - 30, 0)
        
    if(this.hunger <= 50 || this.boredom <= 50 || this.ungroomed <= 50){
        return `${this.name}'s ${constructor} is at 50.  You may want to attend to ${this.name}'s need(s).`
    }         
    //maybe can add a return for everytime there is a decrease 
    //what would I console log here?  
    }
}

//let pet1 = new Pets('Rover', 50, 40, 80)
console.log(pet1.introduction())



class PetStore {
    constructor(name, prices, foodStock, toys, groomTool, newPet){
        this.name = name
        this.prices = prices
        this.toys = toys
        this.foodStock = foodStock
        this.groomTool = groomTool
        this.newPet = newPet
    }
    introduction(){
        return `Welcome to ${this.name} Pet Store!`
    }

}
let prices = {
    food1: 10,
    food2: 20,
    toys1: 10,
    toys2: 20,
    groom1: 10,
    groom2: 20,
    newPet: 50,
};


//let store1 = new PetStore()