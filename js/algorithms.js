const array = [1, 2, 3, 4, 5];
function linearSearch(array, key) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === key) {
            return true
        }
    }
    return false
}
let result = linearSearch(array, 4)

console.log(result)
