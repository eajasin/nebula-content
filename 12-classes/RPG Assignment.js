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
        this.toyValue = 100;
        this.groomingToolValue = 100;
        this.coins = 100;
        this.pet = pet
    }
    introduction() {
        return `Hi, I'm ${this.name}.  I have ${this.foodValue} food, ${this.toys} toys and ${this.groomToolsValue} grooming tools.`
    }

    checkInventoryAndInteractWithPet(){
       
       //START FEED PET PROCESS -->
        
       if(this.foodValue === 0) {
        
        return `${this.name} is out of food and cannot feed ${pet.name}.` 
         
       } else {

          // feed pet start -->

        function feed(pet, foodType){
            let regularFood = PetStore.foodType.regularFood
            let premiumFood = PetStore.foodType.premiumFood

            if(foodType === regularFood){
                let regFoodValue = PetStore.foodType.regularFood.value
                this.foodValue -= 10
                pet.hungerValue += regFoodValue

            } else if (foodType === premiumFood) {
            let premiumFoodValue = PetStore.foodType.premiumFood.value
            this.foodValue -= 10
            pet.hungerValue += premiumFoodValue
            }
            this.coins += 5
            console.log(`${this.name} fed ${pet.name} with ${foodType}`)
       }
            //<--feed pet end
        feed(pet, foodType) 
    }
     
    // <-- END FEED PET PROCESS
    
    // START PLAY WITH PET PROCESS -->     
    
        if(this.toyValue === 0) {
            return `${this.name} is out of toys and cannot play with ${pet.name}.`
        } else {

        function playWith(pet, toyType) {
            let regularToy = PetStore.toyType.regularToy
            let premiumToy = PetStore.toyType.premiumToy

            if(toyType === regularToy){
                let regToyValue = PetStore.toyType.regularToy.value
                this.toyValue -= 10
                pet.boredomValue += regToyValue
            } else if (toyType === premiumToy){
                let premiumToyValue = PetStore.toyType.premiumToy.value
                this.toyValue -= 10
                pet.boredomValue += premiumToyValue
            }
            this.coins += 5
            console.log(`${this.name} played with ${pet.name} with a ${toyType}.`)
        }
        playWith(pet, toyType)
    }    
    // <-- END PLAY WITH PET PROCESS -->  
    
    // START GROOM PET PROCESS -->  
    
        if(this.groomingToolsValue === 0) {
            return `${this.name} is out of grooming tools and cannot groom ${pet.name}.`

        } else {
        
        function groom(pet, groomingToolType) {
            let regularGroomingTool = PetStore.groomingToolType.regularGroomingTool
            let premiumGroomingTool = PetStore.groomingToolType.premiumGroomingTool

            if(groomingToolType === regularGroomingTool){
                let regularGroomingToolValue = PetStore.groomingToolType.regularGroomingTool.value
                this.groomingToolValue -= 10
                pet.ungroomed += regularGroomingToolValue
            } else if (groomingToolType === premiumGroomingTool){
                let premiumGroomingToolValue = PetStore.groomingToolType.premiumGroomingTool.value
                this.groomingToolValue -= 10
                pet.ungroomed += premiumGroomingToolValue
            }
            this.coins += 5
            console.log(`${this.name} groomed ${pet.name} with a ${toyType}.`)
             
        }
        groom(pet, groomingToolType)
       
    }
    // <-- END GROOM PET PROCESS -->  
    }  // END OF checkInventoryAndInteractWithPet function
    


    // ADD TO PURCHASE MODE    
    //   } else {
    //     let price = 0

    //     if (foodType === regularFood){
    //         price = PetStore.foodType.regularFood.price
    //     } else if (foodType === premiumFood){
    //         price = PetStore.foodType.premiumFood.price
    //     } 

    //     this.coin -= price

        // if(this.coins < price){
        //     return `${this.name} does not have enough coins to buy ${foodType}.`
        // } use this in purchase mode
     
        //END WHERE NEED TO ADD IN PURCHASE MODE

       
        //use of food type start (because person has food) -->
        
        //<--use of food type end
        
        //response for pet start -->
        
        
        //<--response for pet end
        
        // response for person start -->
        
    
    purchase(petStoreItem){
        let price = 0

        switch (petStoreItem) {
            case PetStore.foodType.regularFood:
                this.foodValue += petStoreItem.foodValue.regularFood
                this.coins -= petStoreItem.prices.regularFood
                return `${this.name} purchased regular food for ${petStoreItem.prices.regularFood} coins and now has ${this.foodValue} and ${this.coins}.` 

            case PetStore.foodTypepremiumFood:
                this.foodValue += petStoreItem.foodValue.premiumFood
                this.coins -= petStoreItem.prices.premiumFood
                return `${this.name} purchased premium food for ${petStoreItem.prices.premiumFood} coins and now has ${this.foodValue} and ${this.coins}.` 


            case PetStore.toyType.regularToy:
                this.toysValue += petStoreItem.toysValue.regularToys
                this.coins -= petStoreItem.pricess.regularToys
                return `${this.name} purchased regular toys for ${petStoreItem.prices.regularToys} coins and now has ${this.toysValue} and ${this.coins}.` 

            case PetStore.toyType.premiumToy:
                this.toysValue += petStoreItem.toysValue.premiumToys
                this.coins -= petStoreItem.prices.premiumToys
                return `${this.name} purchased premium toys for ${petStoreItem.prices.premiumToys} coins and now has ${this.toysValue} and ${this.coins}.` 

            case PetStore.groomingToolType.regularGroomingTool:
                this.groomToolsValue += petStoreItem.groomToolsValue.regularGroomTools
                this.coins -= petStoreItem.prices.regularGroomTools
                return `${this.name} purchased regular groom tools for ${petStoreItem.prices.regularGroomTools} coins and now has ${this.toysValue} and ${this.coins}.` 

            case PetStore.groomingToolType.premiumGroomingTool:
                this.groomToolsValue += petStoreItem.groomToolsValue.premiumGroomTools
                this.coins -= petStoreItem.prices.premiumGroomTools
                return `${this.name} purchased premium groom tools for ${petStoreItem.prices.premiumGroomTools} coins and now has ${this.toysValue} and ${this.coins}.` 

            case PetStore.petForSale:
                this.newPet += petStoreItem.newPet
                this.coins -= petStoreItem.prices.newPet
                return `${this.name} purchased a new pet for ${petStoreItem.prices.newPet} coins and now has ${this.toysValue} and ${this.coins}.` 
        }
    }    
  
    // showStatus(){
    //     return `${this.name} has ${this.food.Value} hunger, ${this.toys} boredom and ${this.groomTools.Value}.`
    // }   //SHOW STATUS AT ALL TIMES

    
    
} // END OF PERSON CLASS


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
 // gameOver(){
        //     if(pet.hungerValue === 0 || pet.boredomValue === 0 || pet.ungroomedValue === 0){
        //         return `Game Over! ${this.name} got taken away by Animal Protective Services.  Shame on you, ${Person.name}!`
        //     }
        // }    MOVE TO PET 



} //END OF PET CLASS


let pet1 = new Pets('Rover', 40, 40, 80)
let person1 = new Person('Bob', pet1)
//console.log(pet1.introduction())
// console.log(person1.foodValue)
// console.log(person1.coins)
// console.log(pet1.hungerValue)
// console.log(person1.feed(pet1))
// console.log(person1.foodValue)
// console.log(person1.coins)
// console.log(pet1.hungerValue)
// console.log(person1.feed(pet1))


class PetStore {
    constructor(){ //no parameters needed
        
        this.foodType = {
            regularFood: {value: 10, price: 10},
            premiumFood: {value: 20, price: 20}
        }
        this.toyType = {
            regularToy: {value: 10, price: 10},
            premiumToy: {value: 20, price: 20}
        }
        this.groomingToolType = {
            regularGroomingTool: {value: 10, price: 10},
            premiumGroomingTool: {value: 20, price: 20},
        }
        
        this.petForSale = {
            petA: {price: 100},
            petB: {price: 150}
        }
    }
        
}
