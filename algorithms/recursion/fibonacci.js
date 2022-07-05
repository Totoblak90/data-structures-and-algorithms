// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8
let calculations1 = 0;
let calculations2 = 0;
let calculations3 = 0

function fibonacciIterative(n) { //O(n)
    const fibonacciSequence = [0, 1];
    while (fibonacciSequence.length <= n) {
        calculations3++;
        fibonacciSequence.push(fibonacciSequence[fibonacciSequence.length - 2] + fibonacciSequence[fibonacciSequence.length - 1]);
    }

    return fibonacciSequence[n];
}

fibonacciIterative(5);


// const fibonacciSequence = [0, 1];


function fibonacciRecursive(n) { //O(n^2)
    calculations1++
    if (n < 2) {
        return n;
    }
    // console.log(fibonacciRecursive(n))
    return fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1)
}


function fibonachiMaster() { // O(n) with more space complexity because of the cache
    let cache = {}
    return function fib(n) {
        calculations2++
        if (n in cache) {
            return cache[n]
        } else {
            if (n < 2) {
                return n;
            }
            cache[n] = fib(n - 2) + fib(n - 1);
            return cache[n];
        }
    }
}

const fibCached = fibonachiMaster();
// console.log('calculations fibonacci recursive ', fibonacciRecursive(20), calculations1, 'NEVER USE!!');
// console.log('calculations fibonacci with dynamic programing', fibCached(16742), calculations2);
// console.log('calculations fibonacci iterative ', fibonacciIterative(100000000), calculations3);