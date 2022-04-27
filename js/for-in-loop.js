var person = { fname: "Ioan", lname: "Dodita", heigth: "177 cm", weigth: "72 kg" }

let txt = "";
for (let x in person) {
    txt += "-" + person[x] + "<br>";
}
console.log(txt)