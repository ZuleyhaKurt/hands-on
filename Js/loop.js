// !n e kadar olan sayıları topla
// const n= Number(prompt("bir sayı giriniz:"))

// let total=0;
// for(let i=1; i<=n; i++){
//     total+=i
//     console.log(total,i)
// }

// console.log(`totals number : ${total}`)

// ! 0ile 100 arasında 10 tane tam sayı yazdır

// for(let i =1; i<=10 ;i++){
//     const rasgele= Math.round(Math.random()*100)
//     console.log(rasgele)
// }

//* NOT:
//* Math.floor() =>surekli asagiya yuvarlar
//* Math.ceil() =>sürekli yukariya yuvarlar
//* Math.round() => degerine gore yuvarlar.
//* Math.trunc() => kesirli sayinin tam kismini alir.


//! dışardan girilen sayının  asal olup olmadığını bul
// const sayi =Number(prompt("pozitif bir sayı giriniz"));
// let asal=true;
// if(sayi<=1){
//     alert("sayı 1'den büyük olmalıdır")
// }else{
//     for(let i=2; i<sayi; i++){
//        if(sayi % i ==0) {
//         asal=false;
//         break;
//        }
//     }
//     const sonuc=asal? "Asaldır" :"Asal Değildir"
//     console.log(`${sayi} ${sonuc}`)
// }

console.log("****** WHILE *******");

//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.

let not= +prompt ("lütfen 0 ile 100 arasında bir not giriniz")
while(not<0 || not>100){
    console.log("not 0 ile 100 arasında olmalıdır")
    not= +prompt ("lütfen 0 ile 100 arasında bir not giriniz")
}
console.log("girdiğiniz not:",not)