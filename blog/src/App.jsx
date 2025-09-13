
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Prac from './Prac.jsx'
import Product from './Product.jsx'
import Greeting from './Greeting.jsx'
import  Car from './Car.jsx' 
import Roll from './Roll.jsx'
import BlogPost from './BlogPost.jsx'
import Clicks from './Clicks.jsx'
import { useState } from 'react'
const person={
  name:"Narendra",
  age:21 
}

const carname="BMW"
const model="X5"
const year=2023

function App() {
  const phone=
{
   ProdName:"Iphone 17",
 price:120000,
 avail:true
}
const phone1=
{
   ProdName:"Samsung S23",
 price:100000,
 avail:false
}
const profile=
{
  name:"Narendra",
  age:20,
  roll:"23VV1A0526",
  branch:"CSE",
  blood:"O+",
  img:"./profile.jpg"
}
const product=[
  {
    ProdName:"Iphone 17",
  price:120000,
  avail:true
  },
  {
    ProdName:"Samsung S23",
  price:100000,
  avail:false
  },
  {
    ProdName:"Oneplus 11",
  price:70000,
  avail:true
  }]
  const books=[{ id:1,author:"Narendra",title:"React",description:"This is a book about React"},
    {id:2,author:"Kumar",title:"JavaScript",description:"This is a book about JavaScript"},
    {id:3,author:"Kura",title:"HTML",description:"This is a book about HTML and CSS"}
      ]
 
 
 const [count,setCount]=useState(0);
 const increment=()=>
 {
 setCount((count)=>count+1)
  console.log(count);
 }
const decrement=()=>
 {
 setCount((count)=>count-1)
  console.log(count);
 }
const reset=()=>
 {
 setCount((count)=>count=0)
  console.log(count);
 }


 return(



  <div className='app'>
  <h2>{count}</h2>
<button onClick={()=>increment(count)}>Increment</button>
<button onClick={()=>decrement(count)}>Decrement</button>
<button onClick={()=>reset(count)}>Reset</button> 
<br/>
<br/>
<Clicks/> 
    
   </div>
 )
  
  

}

export default App
