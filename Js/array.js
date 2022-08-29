const isimler =["ahmet","ismet","can","canan"]
console.log(isimler)
console.log(typeof isimler)
console.log(isimler.length)
const diller= new Array ("c++","JS","Assembly","Go","Ruby");
console.log(diller)

const numbers= new Array(3,2,1)
console.log(numbers)

const numbers1= new Array(10)
console.log(numbers1)

const veriler= Array.of(1,2,3)
console.log(veriler)

const veri= Array.of("deneme")
console.log(veri)

const bosDizi=[]
console.log(bosDizi)

console.log(diller[1])
const go =diller[3]
console.log(go)

console.log(isimler[isimler.length-1])

//? at()
console.log(isimler.at(-1))

//--------------------------

isimler[1]="Saffet"
console.log(isimler)