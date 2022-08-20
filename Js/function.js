// ! selamlama

// // default parametre
// function selamla(ad,soyad=""){      
//     console.log(`Merhaba ${ad} ${soyad}`);

// }
// selamla("Can","Yılmaz");
// selamla("Canan","Öztürk")
// selamla("Ayşe")


// ! yaş hesapla 
// function yasHesapla(isim,dogumTarihi){
// //  const sonuc=`${isim} 'in yaşı ${2022-dogumTarihi}`
// const sonuc=`${isim} 'in yaşı ${ new Date().getFullYear() - dogumTarihi} dir`
//  return sonuc;
// // console.log(`${isim} 'in yaşı ${2022-dogumTarihi}`)
// }

// const mesaj1= yasHesapla("züü",1993);
// console.log(mesaj1);

// // console.log(yasHesapla("Veli Canan",1990)


// ! tek çift
// function tekCift(sayi){
//     return sayi % 2 ? ` ${sayi} TEKTİR`: `${sayi} CİFTTİR`;
// }
// // const sayi= +prompt("bir sayı giriniz")
// console.log(tekCift(5)) 
// console.log(tekCift(2))
// console.log(tekCift(sayi))

//!ORNEK: 3 sayinin en büyüğünü bulan fonks.
//******************************************************/

const buyukBul= function(n1,n2,n3){
    let enBuyuk;
    if (n1 >= n2 && n1 >= n3) {
        enBuyuk=n1;
      } else if (n2 >= n1 && n2 >= n3) {
        enBuyuk=n2;
      } else if (n3 >= n1 && n3 >= n2) {
        enBuyuk=n3;
      }
      return enBuyuk
};



const n1 = +prompt("Sayi1:");
const n2 = +prompt("Sayi2:");
const n3 = +prompt("Sayi3:");

console.log(`Girilen sayıların en buyugu ${buyukBul(n1,n2,n3)}`)

