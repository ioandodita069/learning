const time = new Date().getHours();
let line;
if (time < 12) {
    line = "Morning"
}
else if (time > 18) {
    line = "Evening"
}
else {
    line = "Afternoon"
}
console.log(line)