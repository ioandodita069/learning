let number = 7
let spaces = ""

for(let i=0;i<number-1;i++){
	spaces+=" "
}

for(let i=1;i<=number;i++){
	let line = ""
	for(let j=0;j<i + i - 1;j++){
		line+=i
	}
	
	console.log(spaces + line)
	spaces = spaces.slice(0, -1)
}
