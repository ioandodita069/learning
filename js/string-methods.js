let text = "Duminica asta merg la Rhema!<br>Rhema e cea mai faina biserica"

function webChange() {
    var text = document.getElementById("demo").innerHTML;
}

console.log(text.replace(/Rhema/g, "Harmony"))
