// 1.   Create an object for your dream vehicle
//      Give it a minimum of 6 key-value pairs
//      This object should contain many datatypes (string, number, boolean, null, array)

        const dreamVehicle = {
            model: "DMC",
            make: "DeLorean", 
            year: 1981, 
            color: "gray",
            price: 12000,
            topSpeed: 88,
            moveieAppearances: ["Back to the Future", "Back to the Future 2"] 

        }
console.log(dreamVehicle)

// 2.   Using dot-notation Log to the console 3 properties from the previous object

console.log(dreamVehicle.model)
console.log(dreamVehicle.make)
console.log(dreamVehicle.year)

// 3.   Using bracket-notation Log to the console 3 properties from the previous object

console.log(dreamVehicle['color'])
console.log(dreamVehicle['price'])
console.log(dreamVehicle['topSpeed'])

// 4.   Try and log a property that doesn't already exist - what output do we get?

//console.log(dreamVehicle.canAfford)
//output is undefined

// 5.   Add a new key-value pair to the vehicle. 

dreamVehicle.driver = "Marty McFly"
//console.log(dreamVehicle)

// 6.   Using bracket-notation update a property on the vehicle. 

dreamVehicle['color'] = "silver" 
console.log(dreamVehicle)

// 7.   Using dot-notation update a property on the vehicle. 

dreamVehicle.price = "priceless"
dreamVehicle.canAfford = false
console.log(dreamVehicle)

// 8.   Create a method for turning your vehicle on

function turnOn(){
    console.log("Vroom Vroom!")
}

dreamVehicle.start = turnOn(dreamVehicle)




// 9.   Create a method for turning your vehicle off

function turnOff(){
    console.log("Ping")
}

dreamVehicle.start = turnOff(dreamVehicle)

//10.   
//      a. Check if your vehicle is on (it should be off)
//      b. Start your vehicle
//      c. Check if your vehicle is on (it should be on)
//      d. Stop your vehicle
//      e. Check if your vehicle is on (it should be on)




