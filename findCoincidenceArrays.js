// O^2
const findCoincidence = (array1, array2) => {
    let result = false;
    array1.forEach(i => {
        array2.forEach(j => {
            if (i === j) {
                result = true;
            }
        })
    })
    return result;
}

console.log(
    findCoincidence(['a', 'b', 'c'], ['d', 'e', 'f']),
    findCoincidence(['a', 'b', 'c'], ['d', 'e', 'a'])
)

// O(n)
const findCoincidence2 = (array1, array2) => {
    const obj = {};

    array1.forEach(item => obj[item] = 1);
    array2.forEach(item => obj[item] ? obj[item]++ : obj[item] = 1);

    let result = false

    for (key in obj) {
        if (obj[key] > 1) {
            result = true
        }
    }

    return result;
}

console.log(
    findCoincidence2(['a', 'b', 'c'], ['d', 'e', 'f']),
    findCoincidence2(['a', 'b', 'c'], ['d', 'e', 'a'])
)

// 0(n) more readable
const findCoincidence2Improved = (arr1, arr2) => {
    let result = false;
    const obj = {};
    arr1.forEach(item => obj[item] = 1);

    arr2.forEach(item => {
        if (obj[item]) {
            result = true
        }
    })
    return result;
}

console.log(
    findCoincidence2Improved(['a', 'b', 'c'], ['d', 'e', 'f']),
    findCoincidence2Improved(['a', 'b', 'c'], ['d', 'e', 'a'])
)

// O(n) better Space complexity
const findCoincidenceWithSet = (arr1, arr2) => {
    let result = false;
    const mySet = new Set();

    arr1.forEach(item => mySet.add(item));

    arr2.forEach(item => {
        if (mySet.has(item)) {
            result = true
        }
    })

    return result
}

console.log(
    findCoincidenceWithSet(['a', 'b', 'c'], ['d', 'e', 'f']),
    findCoincidenceWithSet(['a', 'b', 'c'], ['d', 'e', 'a'])
)