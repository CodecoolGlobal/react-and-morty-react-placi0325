import React from "react";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";

function App () {
  const characters = useCharacters(1);
  const locations = useLocations(1);
  console.log(locations)
  

  return (<div className="container">
    {<div>
      {characters && characters.results.map((char)=>
            (<div>{char.name}</div>))}
    </div>}
    {/*<div>
      {locations && locations.results.map((char)=>
            (<div>{char.name}</div>))}
      </div>*/}
  </div>)
}         

export default App;
