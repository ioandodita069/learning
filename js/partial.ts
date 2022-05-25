interface Point {
    x: number;
    y: number;
    z: string;
}
let pointPart: Partial<Point> = {}
pointPart.x = 12;
pointPart.y = 23;
pointPart.z = "Capre"

console.log(pointPart)