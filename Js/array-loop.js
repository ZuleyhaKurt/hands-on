const dizi = [-5, 15, 22, -4, 45, 78];
let negatifler = []
let pozitifler = []
const dizilereayır = (n) => {
 
  for (let i = 0; i < n.length; i++) {
    if (n[i] < 0) {
        negatifler.push(n[i])
      
    } else {
      pozitifler.push(n[i])
    }
  }

};
dizilereayır(dizi);
console.log(negatifler)
console.log(pozitifler)
console.log(dizi)

const notlar=[55,77,23,89,100];
let toplam=0
for(let i=0; i<notlar.length;i++){
    toplam+= notlar[i];
    
}
console.log(toplam/ notlar.length)
///
///
///
//


const ogrenciler = [
    "ahmet",
    "mehmet",
    "ismet",
    "ahmet",
    "can",
    "mehmet",
    "cem",
  ];
// const findStudents=(arr,search)=>{
//     let counter=0; 
//     for (let i in arr ){
//         if(search=== arr[i]){
//             counter++
//         }
//     }
//     if(counter===0){
//         return`${search} can not be found`;
//     }
//     else{
//         return`${search} found ${counter} times`
//     }

// }
// const name= prompt("Lutfen bir isim giriniz").toLowerCase()
// console.log(findStudents(ogrenciler,name))

const findStudents=(arr,search)=>{
    let counter=0; 
    for (let item of arr ){
        // if(search=== item){
        //     counter++
        // }

        // search=== item ? counter++: null
        search=== item && counter++

    }
   return !counter ? `${search} can not be found` :` ${search} found ${counter} times`
    
}
const name= prompt("Lutfen bir isim giriniz").toLowerCase()
console.log(findStudents(ogrenciler,name))

let names =["ayşe","Mustafa","Züleyha"];
const uppernames= names.map((name)=> name.toUpperCase())
console.log(uppernames,names)
console.log(names.map((name)=>name.toUpperCase()))

////
const euro=18.23
const dolar=18.19
const tlPrices=[100,150,100,50,80];

const euroPrices= tlPrices.map((tl)=>(tl/euro).toPrecision(3))
console.log(euroPricesayse)