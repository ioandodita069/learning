var numbers = new Set(["1", "2", "3"]);

numbers.add("8");

let text = "";
for (var x of numbers.values()) {
    text += x + "<br>";
}
console.log(text)