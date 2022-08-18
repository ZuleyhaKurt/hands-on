
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