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

const yaslar=[22,44,55]
const kisiler=["Ahmet","Can",2022,2022-1990,true,yaslar]

const yas55=kisiler[5][2]
console.log(yas55)

kisiler[5][1]--;
console.log(kisiler)

const arabalar=["BMW","Mercedes","Fiat"]

arabalar.pop()
console.log(arabalar)

arabalar.push("Citroen")
console.log(arabalar)

arabalar.unshift("Audi")
console.log(arabalar)

arabalar.shift()
console.log(arabalar)

arabalar.splice(1,0,"passat")
console.log(arabalar)

arabalar.splice(3,1,"Honda")
console.log(arabalar)

arabalar.reverse()
console.log(arabalar)

//? sort

const sayilar=[2,3,1,5,7,6]
sayilar.sort()
console.log(sayilar)

isimler.sort()
console.log(isimler) //* ASCII tablosuna göre sıralar

sayilar.sort((a,b)=> a-b)
console.log(sayilar)