// Write your solution in this file!
// 1. Globally-scoped array
const burgers = ['Hamburger', 'Cheeseburger'];

// 2. Globally-scoped variable
let featuredDrink = 'Strawberry Milkshake';

// 3. Function-scoped variable inside addBurger()
function addBurger() {
  const newBurger = 'Flatburger';
  burgers.push(newBurger);
}

// 4. Block-scoped variable inside if (true) statement
if(true) {
  const anotherNewBurger = 'Maple Bacon Burger';
  burgers.push(anotherNewBurger);
}

// 5. Function to update featuredDrink variable
function changeFeaturedDrink() {
  featuredDrink = 'The JavaShake';
}