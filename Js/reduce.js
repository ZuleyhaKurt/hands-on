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

worker["language"].forEach((l)=>console.log(l))

worker.dob="1990"
console.log(worker)
worker.email="can@gmail.com"


console.log(worker.language[2])

worker["salary"]=1.1 * worker.salary
console.log(worker)

const person = worker
console.log(person)
person.dob=2000

console.log(person)
console.log(worker)

const personel={
    ad:"Can",
    surname:"Canan",
    age:33,
    job :"developer",
    salary:"140000",
    drivingLicense:true,
    calculateAge :function (){
        return new Date().getFullYear()- this.dob
    }
}