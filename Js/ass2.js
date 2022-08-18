// ! ÖDEV 1 
let sayac=0;
let total=0;
let not1;
let not;

do{
    not=prompt("not giriniz");
    if(not==="q"|| not==="Q"){
        break;
    }
    not1=Number(not);
    sayac++;
    total=total+not1;
}while (true);

let ortalama=total/sayac;
console.log(`Sınıfın ortalaması: ${ortalama}`)

// ! ÖDEV 2

while(true){

    let hak = 5;
    const rastgele = Math.round(Math.random() * 100);
    console.log(rastgele);
    let tahmin;

     do {
    tahmin = Number(prompt("Lutfen 0-100 arasinda bir tahmin giriniz:"));
    hak -= 1;
    if (tahmin === rastgele) {
    console.log(`Tebrikler ${5 - hak} kerede bildiniz.`);
    break;
    } else if (tahmin < rastgele) {
    console.log("ARTTIR ⬆️");
    } else {
    console.log("AZALT ⬇️");
    }
    } while (hak > 0);

    if (tahmin !== rastgele) {
    console.log("Uzgunuz oyunu kaybettiniz 😔😔");
    }
    
    let devam= prompt( "Tekrar oynamak ister misiniz E/H?");
    if(devam==="H"||devam ==="h"){
        break;
    }
    
}


