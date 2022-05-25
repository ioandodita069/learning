function createPairs<A, Z>(v1: A, v2: Z): [A, Z] {
    return [v1, v2]
}
console.log(createPairs<number, number>(32, 23))