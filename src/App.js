import React,{ useState}  from "react"
import './App.css';
import AddMovie from "./Component/AddMovie";
import Moviecard from "./Component/Moviecard";
import {moviesData} from "./Component/MovieData"
import MovieList from "./Component/MovieList";
import {BrowserRouter  as Router , Route, Switch} from 'react-router-dom';

import Navbar from "./navBar/Navbar"
import Info from "./Component/Info"

function App() {

  const [movie , setMovie] =  useState(moviesData) ;
  const [name , setName] =  useState("") ;
  const [ratingSearch , setRatingsearch] = useState("");

  const addMv = (e , newmovie)=> {
    e.preventDefault() ;
    return setMovie([...movie, newmovie]) 
  }
  return (
    <div className="App">
      <header className="App-header">
      <Router>
   

      <Route exact path ='/' render ={()=>
      <Navbar setName={setName} setRatingsearch={setRatingsearch} ratingSearch={ratingSearch} />} />
       <Route exact path ='/' render ={()=>
       <MovieList movie={movie} setMovie={setMovie}  name={name} setName={setName} setRatingsearch={setRatingsearch} ratingSearch={ratingSearch} />} />
      <Route exact path ='/' render ={()=>
       <AddMovie addMv={addMv}/> } />
       
         <Route path ='/info/:id' render ={()=><Info movie={movie} setMovie={setMovie} />} />
         
       </Router>
      </header>
    </div>
  );
}

export default App;
