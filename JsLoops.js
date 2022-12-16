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
