interface Person {
    name: string,
    location: string,
    age: number,
}
let human: Omit<Person, "location" | "age"> = {
    name: "Vali"
}
console.log(human)