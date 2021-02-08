import React from 'react'
import Moviecard from './Moviecard';
import AddMovie from './AddMovie'
export default function MovieList({movie , name , setName  , ratingSearch , setRatingSearch}) {
 
 
    return (
        <div className="cards">
      {
        movie.filter(
          el=> 
          el.name.toLowerCase().includes(name.toLowerCase().trim()) &&
          el.rate >= ratingSearch
        ).map((film , index)=>(
            <Moviecard  key={index}  film ={film}/>
            
          )
        )
      
      }
      
        </div>
    )
   
}
