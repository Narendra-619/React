import React from "react";
function Car({carname,model,year}){
  return(
    <>
    <h1>Car Component</h1>
    <h2>Car Name:{carname}</h2>
    <h2>Model:{model}</h2>
    <h2>Year:{year}</h2>
    </>
  )
}
export default Car