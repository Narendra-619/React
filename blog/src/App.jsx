import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Prac from './Prac.jsx'
import Product from './Product.jsx'
import Greeting from './Greeting.jsx'
import  Car from './Car.jsx' 
import Roll from './Roll.jsx'
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
  age:21,
  roll:"23VV1A0526",
  branch:"CSE",
  blood:"O+",
  img:"./profile.jpg"
}
 return(



  <div className='app'>
    <Roll prof={profile} />
  </div>
 )
  
  

}

export default App
