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