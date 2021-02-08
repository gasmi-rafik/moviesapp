import React from 'react'
import "./navBar.css"
import Rating from "../Component/Rating"
export default function Navbar({setName , setRatingsearch , ratingSearch}) {
    return (
        <div className="navbar">

<span>
  <h1 className="navbar-brand" >Movie App</h1>
  </span> 
  <span style={{display:"flex"}}>
     <input type="text" placeholder="Search" 
     onChange={(e)=>setName(e.target.value)}/>
   <Rating setRate={setRatingsearch} rate={ratingSearch}/>
 </span>
 </div>
    )
}
