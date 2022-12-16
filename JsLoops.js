//Iteración 1
const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];

for (const product of products) {
    
    if (product.includes('Camiseta')) {
        console.log(product)
    }
}

//Iteración 2
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
	{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
	{name: 'Juan Miranda', T1: false, T2: true, T3: true},
	{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
	{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]
for (const alumn of alumns) {
   let T1 = alumn.T1
   let T2 = alumn.T2
   let T3 = alumn.T3
   if (T1 && T2 || T2 & T3 || T1 && T3) {
        alumn.isAproved = true
   } else {
    alumn.isAproved = false
   }
}
console.log(alumns);

//Iteración3
const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']
for (const place of placesToTravel) {
    console.log(place);
}

//Iteración4
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}
for (const key in alien) {
    console.log(alien[key]);
    }

//Iteración5
const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]
for (let i = 0; i < placesToTravel.length; i++) {
    const element = placesToTravel[i];
    if (element.id === 11 || element.id ===40) {
        placesToTravel.splice(i, 1);
    }
    
}
console.log(placesToTravel);