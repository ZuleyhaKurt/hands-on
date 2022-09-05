const salaries =[5500,8000,6500,9000,10000,15000,25000];

const sumOfSalaries=salaries.reduce((acc,val)=>acc+val,0)
console.log("sum:",sumOfSalaries)


// firma 9000 den az olan kişilere %10 zam yapmak istiyor . zamlı halleriyle toplam kaç tl verildiğini bulan programı yaz

const worker={
    ad:"Can",
    surname:"Canan",
    age:33,
    job :"developer",
    language:["c++","Java","JavaScript","Go"],
    salary:140000,
}
console.log(worker);
console.log(worker.job)
console.log(worker["language"])
