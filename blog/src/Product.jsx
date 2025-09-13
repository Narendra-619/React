import React from "react";

function Product({phone})
{
return(
    <>
    
   <h2>Product={phone.ProdName}</h2> 
    <h2>Price={phone.price}</h2>
    <h2>Availability={phone.avail?"Available":"Not available"}</h2>
  
    </>
)
}
export default Product