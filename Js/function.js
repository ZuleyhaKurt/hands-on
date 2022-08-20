// default parametre
function selamla(ad,soyad=""){      
    console.log(`Merhaba ${ad} ${soyad}`);

}
selamla("Can","Yılmaz");
selamla("Canan","Öztürk")
selamla("Ayşe")

function yasHesapla(isim,dogumTarihi){
//  const sonuc=`${isim} 'in yaşı ${2022-dogumTarihi}`
const sonuc=`${isim} 'in yaşı ${ new Date().getFullYear() - dogumTarihi} dir`
 return sonuc;
// console.log(`${isim} 'in yaşı ${2022-dogumTarihi}`)
}

const mesaj1= yasHesapla("züü",1993);
console.log(mesaj1);

// console.log(yasHesapla("Veli Canan",1990)

funct