import React from "react";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";
import Home from "./components/Home";

function App () {
  const characters = useCharacters(1);
  const locations = useLocations(1);
  console.log(locations)
  

  return (<div className="container">
    <Home />
    {<div>
      {characters && characters.results.map((char)=>
            (<div>{char.name}</div>))}
    </div>}
    {<div>
      {locations && locations.results.map((char)=>
            (<div>{char.name}</div>))}
      </div>}
  </div>)
}         

export default App;
