// !n e kadar olan sayıları topla
// const n= Number(prompt("bir sayı giriniz:"))

// let total=0;
// for(let i=1; i<=n; i++){
//     total+=i
//     console.log(total,i)
// }

// console.log(`totals number : ${total}`)

// ! 0ile 100 arasında 10 tane tam sayı yazdır

for(let i =1; i<=10 ;i++){
    const rasgele= Math.round(Math.random()*100)
    console.log(rasgele)
}

//* NOT:
//* Math.floor() =>surekli asagiya yuvarlar
//* Math.ceil() =>sürekli yukariya yuvarlar
//* Math.round() => degerine gore yuvarlar.
//* Math.trunc() => kesirli sayinin tam kismini alir.