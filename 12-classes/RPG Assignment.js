//Gigapet inspired!
//I am creating Pet RPG in which person has to feed, play with, and groom pets; person also has to purchase food, toys, groom tools, and a new pet.
// Person earns coins for each interaction with the pets.  Each pet starts with varying levels. 
// Each property of pet 10 drops every x amount of seconds, and person gets a warning when value reaches 50.
//Upon caring for pet, the seconds interval begins again.  If any fall to 0, it's Game Over.
//At the pet store, there are two different types of all items, each with their own prices and value added to pet when used.


class Person {
    constructor(name, pet) {
        this.name = name;
        this.foodValue = 100
        this.toys = 100;
        this.groomToolsValue = 100;
        this.coins = 100;
        this.pet = pet
    }
    introduction() {
        return `Hi, I'm ${this.name}.  I have ${this.foodValue} food, ${this.toys} toys and ${this.groomToolsValue} grooming tools.`
    }

    checkInventory(){
       
       //START FOOD
        
       if(this.foodValue === 0) {
        
        return `${this.name} is out of food and cannot feed ${pet.name}.` 
                      
      } else {
        if(this.foodValue > 0){
        feed(pet, foodType){
        //use of food type start (because person has food) -->
        this.coins += 5
        this.foodValue -= 10
        let price = 0
       
        if (foodType === regularFood){
            price = PetStore.foodType.regularFood.price
        } else if (foodType === premiumFood){
           price = PetStore.foodType.premiumFood.price
        } 
        this.coin -= price
        //<--use of food type end
        
        //response for pet start -->
        pet.hungerValue += 10;
        
        //<--response for pet end
        
        // response for person start -->
        console.log(`${this.name} fed ${pet.name} with ${foodType}`)
            
        }
        }
    }
    }
      // END FOOD
        
       if(this.toys === 0) {
        return `${this.name} is out of toys and cannot play with ${pet.name}.` 
       }
        
       if(this.groomToolsValue === 0) {
        return `${this.name} is out of grooming tools and cannot groom ${pet.name}.` 
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
    }    
  
    showStatus(){
        return `${this.name} has ${this.food.Value} hunger, ${this.toys} boredom and ${this.groomTools.Value}.`
    }   

    gameOver(){
        if(this.foodValue === 0 || this.toysValue === 0 || this.groomToolsValue === 0){
            return `Game Over! ${this.name} got taken away by Animal Protective Services.  Shame on you, ${Person.name}!`
        }
    }
    
}

//let person1 = new Person('Bob')
//status should always be showing


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
        this.hungerValue = Math.max(this.hungerValue - 10, 0);
        this.boredomValue = Math.max(this.boredomValue - 20, 0);
        this.ungroomedValue= Math.max(this.ungroomedValue - 30, 0)
    
        let warning = ""
        if (this.hungerValue <= 50 || this.boredomValue <= 50 || this.ungroomed <= 50){
            warning = `${this.name}'s ${constructor} is at 50.  You may want to attend to ${this.name}'s need(s).`
            
        }  
        console.log(`${this.name}'s properties decreased.`) //can expand on this
        return warning 

    }

    increaseProperties(){
        //if person feed pet, pet hunger value goes up by 10
        if(Person.feed(foodValue)){
            this.hungerValue += 10
        }
        if(Person.playWith(toysValue)){
            this.boredomValue += 10
        }

        if(Person.groom(groomToolsValue)){
            this.ungroomedValue += 10
        }

    }

    showStatus(){
            return `${this.name} has ${this.hunger.Value} hunger, ${this.boredom.Value} boredom and ${this.ungroomed.Value} ungroomed.`
        }    
        //status should always be showing
          
    //maybe can add a return for everytime there is a decrease 
    //what would I console log here?  
    //ad random "thank you" or other statement upon interactions
}


let pet1 = new Pets('Rover', 40, 40, 80)
let person1 = new Person('Bob', pet1)
//console.log(pet1.introduction())
console.log(person1.foodValue)
console.log(person1.coins)
console.log(pet1.hungerValue)
console.log(person1.feed(pet1))
console.log(person1.foodValue)
console.log(person1.coins)
console.log(pet1.hungerValue)
console.log(person1.feed(pet1))



class PetStore {
    constructor(name, newPet){
        this.name = name
        this.newPet = newPet
        this.foodType = {
            regularFood: {value: 10, price: 10},
            premiumFood: {value: 20, price: 20}
        }
    }
        // }
        // this.toysValue = {
        //     regularToys: 10, 
        //     premiumToys: 20,
        // }


        
        // this.groomToolsValue = {
        //     regularGroomTools: 10,
        //     premiumGroomTools: 20,
        // }
        // this.prices = {
            
        //     regularToys: 10,
        //     premiumToys: 20,
        //     regularGroomTools: 10,
        //     premiumGroomTools: 20,
        //     newPet: 50,
        // }
    // }
    // introduction(){
    //     return `Welcome to ${this.name} Pet Store!`
    // }
}
