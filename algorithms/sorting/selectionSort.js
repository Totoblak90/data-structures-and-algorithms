const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    let smallestValue = array[0];
    let smallestValueIndex = 0;

    for (let i = 0; i < array.length - 1; i++) {

        for (let j = i; j < array.length; j++) {
            if (array[j] < smallestValue) {
                smallestValue = array[j]
                smallestValueIndex = j;
            }
        }

        let temp = array[i];
        array[i] = smallestValue;
        array[smallestValueIndex] = temp;
        smallestValue = array[i + 1];

    }
}

selectionSort(numbers);
console.log(numbers);