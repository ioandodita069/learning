test("Ana are ce nu are Maria");
function test(e) {
    var words = e
        .toLowerCase()
        .split("")

    var consonant = words
        .filter(el => !"aiueo"
            .split("")
            .includes(el)
        ).sort((a, b) =>
            a.localeCompare(b)
        ).join('')

    console.log(consonant)
}
