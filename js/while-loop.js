const cars = ["Audi", "Volvo", "Saab", "Ford"];

let i = 0;
let text = "";

while (cars[i]) {
    text += cars[i] + "<br>"; i++;
}
console.log(text)