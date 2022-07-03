//Implement a function that reverses a string using iteration...and then recursion!
function reverseStringIterative(str) {
    const stringToArray = str.split("");
    const arrayReversed = stringToArray.reverse();
    return arrayReversed.join('');
}

function reverseStringRecursion(str) {
    if (str === "") {
        return "";
    } else {
        return reverseStringRecursion(str.substr(1)) + str.charAt(0);
    }
}

console.log(
    reverseStringRecursion('yoyo mastery')
)
//should return: 'yretsam oyoy'