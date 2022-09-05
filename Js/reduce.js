const salaries =[5500,8000,6500,9000,10000,15000,25000];

const sumOfSalaries=salaries.reduce((acc,val)=>acc+val,0)
console.log("sum:",sumOfSalaries)