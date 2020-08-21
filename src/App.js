import React, {useState} from 'react';
import './App.css';
import './component/style.css'
import Nav from './component/navbar'
import Car from './component/caroussel'
import Af from './component/aff'
import { moviesData} from "./component/donnée"
import Fil from './component/filter'
import Lat from './component/latest'
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom'

function App() {
  const [movies, setMovies] = useState(moviesData)
  const [input, setInput] = useState("");
  const [star, setStar] = useState(0)
  const handleFilter = (input) => {
    setInput(input);
  };
  const handleStar = (star) => {
  setStar(star)
}
  return (
    <Router>
    <div className="App">
        
      <Nav/>
      <Car/>
      <Fil handleFilter={handleFilter} handleStar={handleStar}/>
      <Switch>
      <Route path='/latest' component={Lat}/>
      <Af movies={movies} input={input}  star={star} />
      <Route path='/home' component={Car,Af}/>
  </Switch>
    
    </div>
    </Router>
  );
}

export default App;
