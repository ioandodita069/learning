var points = [40, 100, 1, 5, 25, 10];

function highestNumber(arr) {
    let len = arr.length;
    let max = -Infinity;
    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
        }
    }
    return max;
}
console.log(highestNumber(points))