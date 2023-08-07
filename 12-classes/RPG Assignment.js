//Gigapet inspired!
//I am creating Pet RPG in which person has to feed, play with, and groom pets; person also has to purchase food, toys, groom tools, and a new pet.
// Person earns coins for each interaction with the pets.  Each pet starts with varying levels. 
// Each property of pet 10 drops every x amount of seconds, and person gets a warning when value reaches 50.
//Upon caring for pet, the seconds interval begins again.  If any fall to 0, it's Game Over.
//At the pet store, there are two different types of all items, each with their own prices and value added to pet when used.


class Person {
    constructor(name, foodValue, toysValue, groomToolsValue, coins) {
        this.name = name;
        this.foodValue = foodValue|| 100;
        this.toys = toysValue || 100;
        this.groomToolsValue = groomToolsValue || 100;
        this.coins = coins || 100;
    }
    introduction() {
        return `Hi, I'm ${this.name}.  I have ${this.foodValue} food, ${this.toysValue} toys and ${this.groomToolsValue} grooming tools.`
    }
    feed(pet){
        if(this.food > 0 && pet.hunger < 50){
            pet.hunger += 10;
            this.foodValue -= 10;
            this.coins += 5
           return `${this.name} fed ${pet.name} with ...` 
        } else {
            return `${this.name} is out of food and cannot feed ${pet.name}.`
        }
        }
    
    playWith(pet) {
        if(this.toys > 0 && pet.boredom < 50){
            pet.boredom += 10;
            this.toysValue -= 10;
            this.coins += 5
           return `${this.name} played with ${pet.name} using the ${this.toy}.` 
        } else {
            return `${this.name} is out of toys and cannot play with ${pet.name}.`
        }
    }
        
    groom(pet){
        if(this.groom > 0 && pet.ungroomed < 50){
            pet.ungroomed += 10;
            this.groomToolsValue -= 10;
            this.coins += 5
           return `${this.name} groomed ${this.petname} using the ${this.groomTool}.` 
        } else {
            return `${this.name} is out of grooming tools and cannot groom ${pet.name}.`
        }
        }
    
    purchase(petStoreItem){
        switch (petStoreItem) {
            case PetStore.regularFood:
                this.foodValue += petStoreItem.foodValue.regularFood
                this.coins -= petStoreItem.prices.regularFood
                return `${this.name} purchased regular food for ${petStoreItem.prices.regularFood} coins and now has ${this.foodValue} and ${this.coins}.` 

            case PetStore.premiumFood:
                this.foodValue += petStoreItem.foodValue.premiumFood
                this.coins -= petStoreItem.prices.premiumFood
                return `${this.name} purchased premium food for ${petStoreItem.prices.premiumFood} coins and now has ${this.foodValue} and ${this.coins}.` 


            case PetStore.regularToys:
                this.toysValue += petStoreItem.toysValue.regularToys
                this.coins -= petStoreItem.pricess.regularToys
                return `${this.name} purchased regular toys for ${petStoreItem.prices.regularToys} coins and now has ${this.toysValue} and ${this.coins}.` 

            case PetStore.premiumToys:
                this.toysValue += petStoreItem.toysValue.premiumToys
                this.coins -= petStoreItem.prices.premiumToys
                return `${this.name} purchased premium toys for ${petStoreItem.prices.premiumToys} coins and now has ${this.toysValue} and ${this.coins}.` 

            case PetStore.regularGroomTools:
                this.groomToolsValue += petStoreItem.groomToolsValue.regularGroomTools
                this.coins -= petStoreItem.prices.regularGroomTools
                return `${this.name} purchased regular groom tools for ${petStoreItem.prices.regularGroomTools} coins and now has ${this.toysValue} and ${this.coins}.` 

            case PetStore.premiumGroomTools:
                this.groomToolsValue += petStoreItem.groomToolsValue.premiumGroomTools
                this.coins -= petStoreItem.prices.premiumGroomTools
                return `${this.name} purchased premium groom tools for ${petStoreItem.prices.premiumGroomTools} coins and now has ${this.toysValue} and ${this.coins}.` 

            case PetStore.newPet:
                this.newPet += petStoreItem.newPet
                this.coins -= petStoreItem.prices.newPet
                return `${this.name} purchased a new pet for ${petStoreItem.prices.newPet} coins and now has ${this.toysValue} and ${this.coins}.` 
        }
        
  
    
    gameOver(){
        if(this.foodValue === 0 || this.toysValue === 0 || this.groomToolsValue === 0){
            return `Game Over! ${this.name} got taken away by Animal Protective Services.  Shame on you, ${Person.name}!`
        }
    }
    }
}


let person1 = new Person('Bob', 10, 10, 10, 50)
//console.log(person1.introduction())


class Pets {
    constructor(name, hungerValue, boredomValue, ungroomedValue) {
        this.name = name;
        this.hungerValue = hungerValue;
        this.boredomValue = boredomValue;
        this.ungroomedValue = ungroomedValue;
        
    }
    introduction(){
        return `Hi, I'm ${this.name}.  I have ${this.hungerValue} hunger, ${this.boredomValue} boredom and ${this.ungroomedValue} ungroomed.`
    }

    
    decreaseProperties(){
        this.hungerValue = Math.max(this.hunger - 10, 0);
        this.boredomValue = Math.max(this.boredom - 20, 0);
        this.ungroomedValue= Math.max(this.ungroomed - 30, 0)
    
        let warning = ""
        if (this.hungerValue <= 50 || this.boredomValue <= 50 || this.ungroomed <= 50){
            warning = `${this.name}'s ${constructor} is at 50.  You may want to attend to ${this.name}'s need(s).`
            
        }  
        console.log(`${this.name}'s properties decreased.`) //can expand on this
        return warning 

    }

    showStatus(){
            return `${this.name} has ${this.hunger.Value} hunger, ${this.boredom.Value} boredom and ${this.ungroomed.Value} ungroomed.`
        }    

          
    //maybe can add a return for everytime there is a decrease 
    //what would I console log here?  
    //ad random "thank you" upon interactions
}


//let pet1 = new Pets('Rover', 50, 40, 80)
console.log(pet1.introduction())



class PetStore {
    constructor(name, newPet){
        this.name = name
        this.newPet = newPet
        this.toysValue = {
            regularToys: 10, 
            premiumToys: 20,
        }
        this.foodValue = {
            regularFood: 10,
            premiumFood: 20,
        }
        this.groomToolsValue = {
            regularGroomTools: 10,
            premiumGroomTools: 20,
        }
        this.prices = {
            regularFood: 10,
            premiumFood: 20,
            regularToys: 10,
            premiumToys: 20,
            regularGroomTools: 10,
            premiumGroomTools: 20,
            newPet: 50,
        }
    }
    introduction(){
        return `Welcome to ${this.name} Pet Store!`
    }
}
