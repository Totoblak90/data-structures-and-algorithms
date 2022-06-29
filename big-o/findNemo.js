// TIME COMPLEXITY
const items = new Array(1)

/**
 * O(1)
 *
 * @param {*} n
 * @return {*} 
 */
const returnOne = (n) => {
    for (let i = 0; i < 1; i++) {
        console.log('a')
    }
    return n
}

/**
 * O(n)
 *
 * @param {*} array
 * @return {*} 
 */
const countItems = (array) => {
    let counter = 0 // O(1)
    for (let i = 0; i < array.length; i++) { // O(n)
        console.log(counter); // O(n)
        counter++ // O(n)
    }
    return counter // O(1)
}

/**
 * O(n^2)
 *
 * @param {*} numbers
 */
function printAllNumbersThenAllPairSums(numbers) {

    console.log('these are the numbers:'); //o(1)
    numbers.forEach(function (number) {
        console.log(number); // O(n)
    });

    console.log('and these are their sums:'); //O(1)
    numbers.forEach(function (firstNumber) { //O(n)
        numbers.forEach(function (secondNumber) {
            console.log(firstNumber + secondNumber); //O(n^2)
        });
    });
}


// Space complexity 

/**
 * O(1)
 *
 * @param {*} n
 */
function boooo(n) {
    for (let i = 0; i < n; i++) {
        console.log('booooo');
    }
}

/**
 * O(n)
 *
 * @param {*} n
 * @return {*} 
 */
function arrayOfHiNTimes(n) {
    var hiArray = [];
    for (let i = 0; i < n; i++) {
        hiArray[i] = 'hi';
    }
    return hiArray;
}