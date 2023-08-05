## RPG Coin Exchange Game with Age and Height

Objective: In this assignment, you will create a simple RPG coin exchange simulation using JavaScript classes. You will learn how to define classes, create objects, and implement interactions between characters.

Instructions:

1. Define the Person class:

   - The Person class should have a constructor that takes four parameters: `name`, `age`, `height`, and `coins`.
   - Add a method `introduction()` to the Person class that returns a string introducing the character with their name, age, height, and current number of coins.

2. Create two instances of the Person class:

   - Create a character named "Player" with age 25, height 180 cm, and 50 coins.
   - Create another character named "NPC" with age 30, height 170 cm, and 30 coins.

3. Implement coin exchange method:

   - Add a `giveCoins(otherPerson, amount)` method to the Person class. This method should reduce the `coins` of the giver (`this`) by the specified `amount` and increase the `coins` of the receiver (`otherPerson`) by the same `amount`.
   - Return a string that indicates the coin exchange, e.g., "Player gives 10 coins to NPC!".

4. Test the coin exchange:

   - Make the "Player" character give 10 coins to the "NPC" character and display the result of the exchange using `console.log()`.

5. Display character introductions:

   - After the coin exchange, display the introduction of character "NPC" using the `introduction()` method.

6. Implement interactions between characters:

   - Make the "NPC" character give 5 coins to the "Player" character and display the result of the exchange using `console.log()`.

7. Display character introductions again:

   - After the second coin exchange, display the introduction of character "Player" using the `introduction()` method.

## Bonus:

Bonus Challenge: Implement Subclasses for Different Character Types

1. Create subclasses for different character types:

   - Define a new class called "Warrior" that extends the Person class.
   - Define a new class called "Mage" that also extends the Person class.

2. Customize the subclasses:

   - For the Warrior class, add a new property called `strength` and set it as a parameter in the constructor. Also, update the `introduction()` method to include the character's strength.
   - For the Mage class, add a new property called `intelligence` and set it as a parameter in the constructor. Also, update the `introduction()` method to include the character's intelligence.

3. Test the subclasses:

   - Create a Warrior named "Conan" with age 35, height 190 cm, 50 coins, and a strength of 8.
   - Create a Mage named "Gandalf" with age 60, height 180 cm, 100 coins, and an intelligence of 10.

4. Display character introductions:

   - Display the introduction of the "Conan" Warrior character using the updated `introduction()` method.
   - Display the introduction of the "Gandalf" Mage character using the updated `introduction()` method.

5. Extra challenge (optional):
   - Implement additional methods or properties for the Warrior and Mage subclasses to enhance their role in the coin exchange simulation. For example, the Warrior could have a method to perform a powerful attack that costs coins, or the Mage could have a method to cast a spell that earns more coins.

Remember to experiment and modify the code to see how the interactions change with different character types and their abilities.
