// const nums=[1,2,3,4,5];
// const newnums=[...nums,6,7,8,9,10];
// console.log(newnums);
// const [first,...rest]=newnums;
// console.log(first);
// console.log(rest);
const person=[{
    name:"Narendra",
    age:21},
{
    name:"Kumar",
    age:22,
}
]
const newp=[...person,{name:"Kura",age:20}];
console.log(newp);
const key="email";
const email="satyacse@gmail.com"
const dynamic={[key]:key,email}
console.log(dynamic);
