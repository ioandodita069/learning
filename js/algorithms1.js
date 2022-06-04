const arr = [-3, -2, 1, 0, 1, 2, 3];
let left = 0;
let right = arr.length - 1;
let mid;
function binarySearch(arr, target) {
    while (left <= right) {
        mid = (left + right) / 2
    }
    if (arr[mid] === target) {
        return mid;
    }
    else if (target < arr[mid]) {
        right = mid - 1;
    }
    else {
        left = mid + 1;
    }
    return none;
}
let result = binarySearch(arr, 0);
console.log(result)