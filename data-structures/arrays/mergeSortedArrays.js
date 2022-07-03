const mergeSortedArrays = (arr1, arr2) => [...arr1, ...arr2].sort((a, b) => a < b ? -1 : 1);

console.log(
    mergeSortedArrays([5, 3, 6, 8, 1, 7, 12, 0, 16], [3, 9, 65])
)