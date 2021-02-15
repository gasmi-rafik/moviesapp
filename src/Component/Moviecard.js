import React from 'react';
import './Moviecss.css';
import Rating from "./Rating"
import {Link , BrowserRouter as Router} from 'react-router-dom'
export default function Moviecard( { index , film: {name , url , rate , id}}) {
    // console.log("rate" , rate)
    return (
        <div className="movie">
            <div className="movie-area">
               <div  key={index} >
               <img src={url}  style={{width: "150px", height: "250px" }} />
              
                   
               <Link to ={`Info/${id}`}> 
               <p>{name}</p>
               </Link>
             
               <Rating rate={rate} />
               

               </div>
            </div>
             
        </div>
    )
}
