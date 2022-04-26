var firstValue = [1, 5, 7, 4, 98, 8]
var secondValue = firstValue.map(raiseToPower);

document.getElementById("demo").innerHTML = secondValue;

function raiseToPower(value, index, array) {
    return value * 3;
}
console.log(secondValue)