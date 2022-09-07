const team=[
    {name:"josh",surname:"adams", job:"developer",age:30},
    {name:"mary",surname:"bary", job:"tester",age:22},
    {name:"hazel",surname:"nut", job:"data-analiyst",age:20}
]
console.log(team)
console.log(team[2])

team.forEach((person)=> console.log(person.job ))
const ages=team.map((p)=>p.age+1)
console.log(ages)

