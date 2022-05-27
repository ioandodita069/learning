
let number = 10
let side = ""

for (let i = 0; i < number; i++) {
	side += "*"
}

for (let i = 0; i < number / 2; i++) {
	process.stdout.write(side + "\n");
}
