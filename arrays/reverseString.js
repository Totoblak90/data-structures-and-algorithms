const reverseString = (str) => {

    if (typeof str !== 'string') {
        return new Error('Must provide a string')
    }

    if (str.length < 2) {
        return new Error('Must have at least two letters')
    }

    const stringToArray = str.split("");
    const arrayReversed = stringToArray.reverse();
    return arrayReversed.join('');
}

console.log(
    reverseString('b')
)


console.log(
    reverseString(3)
)

console.log(
    reverseString(null)
)

console.log(
    reverseString('hola como andas?')
)