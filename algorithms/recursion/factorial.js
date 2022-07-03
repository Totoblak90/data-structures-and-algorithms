// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop
let counter = 0;
let previousValue = 0;
let answer = 0;

function findFactorialRecursive(number) {
    //code here
    number--
    if (number === 1) {
        console.log(answer)
        return answer
    } else {
        if (!answer) {
            answer = (number + 1) * number;
            previousValue = answer;
        } else {
            answer = number * previousValue;
            previousValue = answer;
        }
        return findFactorialRecursive(number);
    }
}

function findFactorialIterative(number) {
    //code here
    let factor = number - 1;
    let previousValue = 0;
    let answer = 0;

    while (factor > 1) {

        if (!answer) {
            answer = factor * number;
            previousValue = answer;
        } else {
            answer = factor * previousValue;
            previousValue = answer;
        }

        factor--
    }

    console.log(answer)
    return answer;
}

findFactorialIterative(5);
findFactorialRecursive(5);