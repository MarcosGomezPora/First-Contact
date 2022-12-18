//Iteración1
function sum(numberOne , numberTwo) {
    if (numberOne > numberTwo) {
        return numberOne;
    } else {
        return numberTwo;
    }
  }

//Iteración2
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
    function findLongestWord(param) {
}

//Iteración3
const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(array) {
    let sumTot = 0;
    for (let i = 0; i < array.length; i++) {
        sumTot += array[i];
    }
    return console.log(sumTot);
}
sumAll(numbers);

//Iteración4
const numbers1 = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
    let sum = 0;
    for (let i = 0; i < param.length; i++) {
        sum += param[i];
    }
    return console.log(sum/numbers1.length);
}
average(numbers1)