const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let left = 0;
let right = arr.length - 1;
let mid;
function binarySearch(arr, target) {

    if (left <= right) {
        mid = (left + right) / 2
    }
    else if (target < arr[mid]) {
        right = mid - 1;
    }
    else {
        left = mid + 1;
    }
    return false;
}
let result = binarySearch(arr,5);
console.log(result)