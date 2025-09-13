import React from "react";
import './Product.css' 
function Product({phone})
{
    console.log(phone);
    
const availstyle=
{
    color:phone.avail?"green":"red"
};
return(
    <>
    <div className="Prod1">
    <h2>Product={phone.ProdName}</h2> 
    <h2>Price={phone.price}</h2>    
        <div style={{display: 'flex', alignItems: 'center'}}>
            <h2 style={{margin: 0}}>Availability=</h2>
            <h2  style={{...availstyle, marginLeft: '8px', margin: 0}}>{phone.avail ? "Available" : "Not available"}</h2>
        </div>      
  
    </div>

    </>
)
};
export default Product