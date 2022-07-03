// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n) { //O(n)
    //code here;
    const fibonacciSequence = [0, 1];
    while (fibonacciSequence.length <= n) {
        fibonacciSequence.push(fibonacciSequence[fibonacciSequence.length - 2] + fibonacciSequence[fibonacciSequence.length - 1]);
    }

    return fibonacciSequence[n];
}

fibonacciIterative(5);


// const fibonacciSequence = [0, 1];

function fibonacciRecursive(n) { //O(n^2)
    //code here;


    //  My approach O(n):
    // if (fibonacciSequence.length > n) {
    //     return fibonacciSequence[n]
    // } else {
    //     fibonacciSequence.push(fibonacciSequence[fibonacciSequence.length - 2] + fibonacciSequence[fibonacciSequence.length - 1]);
    //     return fibonacciRecursive(n);
    // }

    // Teachers approach O(n^2):

    if (n < 2) {
        return n;
    }
    // console.log(fibonacciRecursive(n))
    return fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1)
}

fibonacciRecursive(5)