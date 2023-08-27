//Gigapet inspired!
//I am creating Pet RPG in which person has to feed, play with, and groom pets; person also has to purchase food, toys, groom tools, and a new pet.
// Person earns coins for each interaction with the pets.  Each pet starts with varying levels. 
// Each property of pet 10 drops every x amount of seconds, and person gets a warning when value reaches 50.
//Upon caring for pet, the seconds interval begins again.  If any fall to 0, it's Game Over.
//add money cheat code
//At the pet store, there are two different types of all items, each with their own prices and value added to pet when used.
//need at least one more way to earn coins (outside of competitions)
//randomize just found some coins
//pet mini-games/competitions: racing/physicality, beauty/talent shows; so pet evolution and gain new abilities; another wya to add coins
//pets grow in levels
//need seperate game screen to show pets states and play inventory
//players gains status with wins


class PetStore {
    constructor() { //no parameters needed because each value is fixed

        this.foodType = {
            regularFood: { value: 10, price: 10 },
            premiumFood: { value: 20, price: 20 }
        }
        this.toyType = {
            regularToy: { value: 10, price: 10 },
            premiumToy: { value: 20, price: 20 }
        }
        this.groomingToolType = {
            regularGroomingTool: { value: 10, price: 10 },
            premiumGroomingTool: { value: 20, price: 20 },
        }

        this.petForSale = {
            petA: { price: 100 },
            petB: { price: 150 }
        }

        this.petLessons = {
            //etiquette training (have mini-game)
            //physicality training (have mini-game)

        }

    }

}

let fortunatePets = new PetStore()

class SailingSchool {
    constructor() { 
    this.sailingLessons = {
        package1: {price: 500},
        package2: {price: 800}
        //need two for license
    }
}
}

let happySails = new SailingSchool

class Person {
    constructor(name, pet, numOfPets) {
        this.name = name;
        this.foodValue = 100
        this.toyValue = 100;
        this.groomingToolValue = 100;
        this.coins = 100;
        this.pet = pet;
        this.numOfPets = numOfPets
    }
    introduction() {
        return `Hi, I'm ${this.name}.  I have ${this.foodValue} food, ${this.toys} toys and ${this.groomToolsValue} grooming tools.`
    }

    checkInventoryAndInteractWithPet() {
        let regularFood = TownStore.foodType.regularFood
        let premiumFood = TownStore.foodType.premiumFood
        let regularToy = TownStore.toyType.regularToy
        let premiumToy = TownStore.toyType.premiumToy
        let regularGroomingTool = TownStore.groomingToolType.regularGroomingTool
        let premiumGroomingTool = TownStore.groomingToolType.premiumGroomingTool
      


        let regularFoodValue = TownStore.foodType.regularFood.value
        let premiumFoodValue = TownStore.foodType.premiumFood.value
        let regularToyValue = TownStore.toyType.regularToy.value
        let premiumToyValue = TownStore.toyType.premiumToy.value
        let regularGroomingToolValue = TownStore.groomingToolType.regularGroomingTool.value
        let premiumGroomingToolValue = TownStore.groomingToolType.premiumGroomingTool.value


        //START FEED PET PROCESS -->

        if (this.foodValue === 0) {

            return `${this.name} is out of food and cannot feed ${pet.name}.`

        } else {

            // feed pet start -->

            function feed(pet, foodType) {
                if (foodType === regularFood) {
                    this.foodValue -= regularFoodValue
                    pet.hungerValue += regularFoodValue

                } else if (foodType === premiumFood) {

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

        if (this.toyValue === 0) {
            return `${this.name} is out of toys and cannot play with ${pet.name}.`
        } else {

            function playWith(pet, toyType) {


                if (toyType === regularToy) {

                    this.toyValue -= 10
                    pet.boredomValue += regularToyValue
                } else if (toyType === premiumToy) {

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

        if (this.groomingToolsValue === 0) {
            return `${this.name} is out of grooming tools and cannot groom ${pet.name}.`

        } else {

            function groom(pet, groomingToolType) {

                if (groomingToolType === regularGroomingTool) {

                    this.groomingToolValue -= 10
                    pet.ungroomed += regularGroomingToolValue
                } else if (groomingToolType === premiumGroomingTool) {

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



    //when make purcahse, have to know which item to buy, check if have enough coins, if so, can make purchase

    makePurchase(storeItem) {

        if (this.coins === 0) {

            return `${this.name} is out of coins and cannot make any purchases.`

        } else {

            let regularFoodPrice = generalStore.foodType.regularFood.price
            let premiumFoodPrice = generalStore.foodType.premiumFood.price
            let regularToyPrice = generalStore.toyType.regularToy.price
            let premiumToyPrice = generalStore.toyType.premiumToy.price
            let regularGroomingToolPrice = generalStore.groomingToolType.regularGroomingTool.price
            let premiumGroomingToolPrice = generalStore.groomingToolType.premiumGroomingTool.price
            

            let petA = TownStore.petforSale.petA
            let petB = TownStore.petForSale.petB
            let petAForSalePrice = TownStore.petA.price
            let petBForSalePrice = TownStore.petB.price

            switch (storeItem) {
                case regularFood:
                    this.foodValue += regularFoodValue
                    this.coins -= regularFoodPrice
                    return `${this.name} purchased regular food for ${regularFoodPrice} coins and now has ${this.foodValue} and ${this.coins}.`

                case premiumFood:
                    this.foodValue += premiumFoodValue
                    this.coins -= premiumFoodPrice
                    return `${this.name} purchased premium food for ${premiumFoodPrice} coins and now has ${this.foodValue} and ${this.coins}.`


                case regularToy:
                    this.toysValue += regularToyValue
                    this.coins -= regularToyPrice
                    return `${this.name} purchased regular toys for ${regularToyPrice} coins and now has ${this.toysValue} and ${this.coins}.`

                case premiumToy:
                    this.toysValue += premiumToyValue
                    this.coins -= premiumToyPrice
                    return `${this.name} purchased premium toys for ${premiumToyPrice} coins and now has ${this.toysValue} and ${this.coins}.`

                case regularGroomingTool:
                    this.groomToolsValue += regularGroomingToolValue
                    this.coins -= regularGroomingToolPrice
                    return `${this.name} purchased regular groom tools for ${regularGroomingToolPrice} coins and now has ${this.groomingToolValue} and ${this.coins}.`

                case premiumGroomingTool:
                    this.groomToolsValue += premiumGroomingToolValue
                    this.coins -= premiumGroomingToolPrice
                    return `${this.name} purchased premium groom tools for ${premiumGroomingToolPrice} coins and now has ${this.groomingToolValue} and ${this.coins}.`

                case petA:
                    this.newPet += petA
                    this.coins -= petAForSalePrice
                    return `${this.name} purchased a new pet for ${petAForSalePrice} coins and now has ${this.numOfPets} pet(s) and ${this.coins}.`
                case petB:
                    this.newPet += petB
                    this.coins -= petBForSalePrice
                    return `${this.name} purchased a new pet for ${petBForSalePrice} coins and now has ${this.numOfPets} pet(s) and ${this.coins}.`
         
            }
        }

        // showStatus(){
        //     return `${this.name} has ${this.food.Value} hunger, ${this.toys} boredom and ${this.groomTools.Value}.`
        // }   //SHOW STATUS AT ALL TIMES

    }

} // END OF PERSON CLASS


// let person1 = new Person('Bob')
// person1.makePurchase('premiumFood')
// //status should always be showing


class Pets {
    constructor(name, hungerValue, boredomValue, ungroomedValue) {
        this.name = name;
        this.hungerValue = hungerValue;
        this.boredomValue = boredomValue;
        this.ungroomedValue = 100; //should I or should I not have fixed value?

        this.startDecreaseProperties()
    }
    introduction() {
        return `Hi, I'm ${this.name}.  I have ${this.hungerValue} hunger, ${this.boredomValue} boredom and ${this.ungroomedValue} ungroomed.`
    }


    decreaseProperties() {
        this.hungerValue = Math.max(this.hungerValue - 10, 0);
        this.boredomValue = Math.max(this.boredomValue - 20, 0);
        this.ungroomedValue = Math.max(this.ungroomedValue - 30, 0)


    }



    startDecreaseProperties() {

        setInterval(() => {
            this.hungerValue = Math.max(this.hungerValue - 10, 0);
            this.boredomValue = Math.max(this.boredomValue - 10, 0);
            this.ungroomedValue = Math.max(this.ungroomedValue - 10, 0)


            // console.log("ungroomedValue: ", this.ungroomedValue)


            if (this.hungerValue <= 50) {
                console.log(`${this.name}'s hunger is at 50.  You may want to attend to ${this.name}'s need(s).`)
            }

            if (this.boredomValue <= 50) {
                console.log(`${this.name}'s boredom is at 50.  You may want to attend to ${this.name}'s need(s).`)
            }

            if (this.ungroomedValue === 40) {
                console.log(`${this.name}'s ungroomed is less than 40.  You may want to attend to ${this.name}'s need(s) soon.`)
            }
            if (this.hungerValue === 0 || this.boredomValue === 0 || this.ungroomedValue === 0) {
                return `Game Over! ${this.name} got taken away by Animal Protective Services.  Shame on you, ${Person.name}!`
                //need to stop interval here because console logginh mutiple 0s
            }


        }, 1000 * 1);

       
    }

    increaseProperties() {
        //if person feed pet, pet hunger value goes up by 10
        if (Person.feed(foodValue)) {
            this.hungerValue += TownStore.foodType.regularFood.value
            console.log(`${Person.name} just feed ${this.name}.`)
        }
        if (Person.playWith(toysValue)) {
            this.boredomValue += TownStore.toyType.regularToy.value
            console.log(`${Person.name} just played with ${this.name}.`)
        }

        if (Person.groom(groomToolsValue)) {
            this.ungroomedValue += TownStore.groomingToolType.regularGroomingTool.value
            console.log(`${Person.name} just groomed ${this.name}.`)
        }

    }

    showStatus() {
        return `${this.name} has ${this.hunger.Value} hunger, ${this.boredom.Value} boredom and ${this.ungroomed.Value} ungroomed.`
    }
    //status should always be showing

    //maybe can add a return for everytime there is a decrease 
    //what would I console log here?  
    //ad random "thank you" or other statement upon interactions

    // }    MOVE TO PET 



} //END OF PET CLASS


//let pet1 = new Pets('Rover', 40, 40, 80)






//cannot have more than 100 value of anything, pet and person