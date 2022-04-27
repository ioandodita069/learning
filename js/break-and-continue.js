let text = "";
for (let i = 0; i < 10; i++) {
    if (i === 5)
    // here you can chose between these two
    // { continue } 
    { break; }
    text += "Current number" + i + "<br>";
}

console.log(text)