import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Prac from './Prac.jsx'
import Product from './Product.jsx'
import Greeting from './Greeting.jsx' 
const person={
  name:"Narendra",
  age:21 
}
const phone=
{
   ProdName:"Iphone 17",
 price:120000,
 avail:true
}
function App() {
 return(
<>
  
  <Prac/>

  <Greeting person={person}/>
  <Product phone={phone} />
  </>
  
 )
}

export default App
