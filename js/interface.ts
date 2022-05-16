interface Building {
    height: number,
    with: number
};
interface RenovatedBuilding extends Building {
    color: string
}

const renovatedBuiding: RenovatedBuilding = {
    height: 40,
    with: 130,
    color: "white"
};
console.log(renovatedBuiding)