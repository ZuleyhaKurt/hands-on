// const str1="Hello"
// const str2="world"

// console.log(str1.concat(" ",str2))

// const myName= "Noah Adims";
// console.log(myName.toLocaleUpperCase("tr"))
// console.log(myName.toLocaleLowerCase())

// const word1=prompt("Bir kelime giriniz")
// const word2=prompt("2. kelimeyi giriniz")

// const esitmi =(str1,str2)=>
//    str1.toLocaleUpperCase===str2.toLocaleUpperCase ? "Stringler eşittir" : "Stringler eşit değildir." ;
    


// console.log(esitmi(word1,word2))

// let str = "Mark"
// let str2 = str // creates a copy
// str = "Noah"
// console.log(str) // Noah
// console.log(str2) //

const str6="Full Stack and Ds path"
console.log(str6.charAt(5))
console.log(str6.charAt())  // ilk index döner

console.log(str6.charAt(str6.length-1))

const word = "To be or not to be, that is the question";
console.log(word.includes("to be"))


//* includes() - case sentive
//* ----------------------------------------------------------


console.log(word.includes("")); //? true
console.log(word.includes("to be", 14)); //? false
console.log(word.includes("to be", 13)); //? true

//! NOT: case insentive kullanmak icin str baslangicta kucuk veya
//! buyuk harfe cevirilerek arama yapilabilir.

console.log(word.indexOf("be"))
console.log(word.lastIndexOf("be"))
console.log(word.lastIndexOf("BE"))

