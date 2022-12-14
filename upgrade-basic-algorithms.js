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

// Iteración 3
//Iteración 3 1.1
const multi = 10 * 5;
console.log(multi);

//Iteración 3 1.2
const divi = 10 / 2;
console.log(divi);

//Iteración 3 1.3
const subt = 15 - 9;
console.log(subt);

//Iteración 3 1.4
let y = 10;
let z = 5;
let x = y + z;
console.log(x);

//Iteración 3 1.5
let x = y * z;
console.log(x);

//Iteración 4
//Iteración 4 1.1
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);

//Iteración 4 1.2
avengers [0] = "IRON MAN";
console.log(avengers);

//Iteración 4 1.3
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers.length);

//Iteración 4 1.4
const RickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
RickAndMortyCharacters.push("Morty", "Summer");
console.log(RickAndMortyCharacters[RickAndMortyCharacters.length - 1]);

//Iteración 4 1.5
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters[0], rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);

//Iteración 4 1.6
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.splice(1,1);
console.log(rickAndMortyCharacters);



