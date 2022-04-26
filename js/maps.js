let currency = new Map([
    ["euro", 4.9],
    ["USD", 4.1],
    ["CZH", 2.1],
    ["MD", 0.8],
    ["GBP", 5.9]
]);
let text = "";
currency.forEach(function (value, key) {
    text += key + "=" + value + "<br>"
});
console.log(text)