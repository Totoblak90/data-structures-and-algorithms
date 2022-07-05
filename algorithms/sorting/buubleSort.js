const numbers = [99, 44, 6, 2, 1, 0, 63, 87, 283, 4, 5];

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                const biggerValue = array[j]
                array[j] = array[j + 1];
                array[j + 1] = biggerValue;
            }
        }
    }

}

bubbleSort(numbers);
console.log(numbers);