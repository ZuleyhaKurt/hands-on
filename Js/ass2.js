
let sayac;
let total=0;
let not1;
let not;

do{
    not=prompt("not giriniz");
    not1=Number(not);
    sayac=sayac+1;
    console.log(sayac);
    total=total+not1;
    console.log(total);
}while (not != "q")

let ortalama=total/sayac;
console.log(`Sınıfın ortalaması: ${ortalama}`)