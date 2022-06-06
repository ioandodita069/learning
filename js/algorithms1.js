arr = (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
let left ;
let right = arr.length - 1;
let mid = left + right / 2;
function binarySearch(arr, key) {

    if (key < arr[mid]) {
        right = mid - 1
    }
    else if (key > arr[mid]) {
        right = mid + 1
    }
    else if (key === arr[mid]) {
        return mid
    }
    else {
        return false
    }

}
let result = binarySearch(arr, 5);
console.log(result)
