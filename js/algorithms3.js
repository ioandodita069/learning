function bubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                array[j], array[j + 1] = array[j + 1], array[j];

            }
            if (array[j + 1] > array[j]) {
                return array
            }
        }
    }

    return array
}
console.log(bubbleSort([1, 5, 7, 0, 5, 2, 6]))