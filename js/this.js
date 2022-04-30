const person = {
    firstName: "Ioan",
    lastName: "Dodita",
    id: 5010212270831,
    details: function () {
        return this.firstName + "/ " + this.lastName + "/" + this.id;
    }
}
console.log(person.details())