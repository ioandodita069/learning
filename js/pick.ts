interface Person {
    name: string,
    age: number,
    location: string
}
const human: Pick<Person, "name"> = {
    name: "Marius"
}
console.log(human)