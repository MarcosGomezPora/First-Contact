 // Iteración 1 
let myFavoriteHero = "Hulk";
let x = 50;
let h = 5;
let y = 10;
let z = h + y;

// Iteración 2
// Iteración 2 1.1
const character = {name: 'Jack Sparrow', age: 10}

// Iteración 2 1.2
let firstName = 'Jon';
let lastName = 'Snow';
let age = 24;
console.log('Soy ' + firstName + ' ' + lastName + ', tengo ' + age + ' años y me gustan los lobos.');

// Iteración 2 1.3
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
console.log('La suma es ' + (toy1.price + toy2.price));

// Iteración 2 1.4
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
globalBasePrice = 25000;
car1.finalPrice = globalBasePrice + car1.basePrice;
car2.finalPrice = globalBasePrice + car2.basePrice;
console.log(car1);

