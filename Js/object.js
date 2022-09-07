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

const teamFullName=team.map((p)=>({
    fullName:p.name.toUpperCase() + " " + p.surname.toUpperCase(),
    age:p.age + 5,
})
)
  console.log(teamFullName) 

   team.filter(p => p.age <= 22).forEach(p => console.log(p.name))

////

const teamUnder22=team.filter((x)=> x.age <=22).map(p => p.name)
console.log(teamUnder22)

const avgAges= team.reduce((sum,person)=> sum +=person.age ,0) / team.length;
console.log(avgAges)


