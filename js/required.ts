interface Person {
    firstName: string;
    lastName: string;
    id?: number;
}
let newPerson: Required<Person> = {
    firstName: "Ioan",
    lastName: "Dodita",
    id: 501021227
}

console.log(newPerson)