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
    function findLongestWord(array) {
        let longestWord = array[0];
        for (let i = 1; i < arrray.length; i++) {
            const word = array[i];
            if (word.length > longestWord.length) {
                longestWord = word;
            }
        }
        return longestWord;

}
console.log(findLongestWord(avengers));

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
average(numbers1);

//Iteración5
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(average) {
    let sum1 = 0
    for (let i = 0; i < average.length; i++) {
    if (typeof average[i] === "string") {
        sum1 += average[i].length;
    }
    return console.log(sum1 / average.length);
  }
}
averageWord(mixedElements);

//Iteración6
const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(param) {
    
  }