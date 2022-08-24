// console.log("****** 2 - RECURSION ********");

// //? FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, ...
// //! f(n) = f(n-1) + f(n-2)

// const fibo = (n) => {
//   if (n <= 0) {
//     return 0;
//   } else if (n === 1 || n === 2) {
//     return 1;
//   } else {
//     return fibo(n - 1) + fibo(n - 2);
//   }
// };

// const n = +prompt("n terimini giriniz:");
// console.log(`FIBO(${n})= ${fibo(n)}`);


// !scope
let sayi1=5
console.log(sayi1);

const fonks1= function(){
sayi1=22
console.log(sayi1)
}
fonks1()
console.log(sayi1++)

// ----------

let sayi2= 7;
console.log(sayi2);

const fonks2=()=>{
    let sayi2=11;
    console.log(sayi2);
};
fonks2();
console.log(sayi2++)
