import React from "react";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";

async function App () {
  const characters = await useCharacters(1);
  //const locations = await useLocations(1);
  console.log(characters.results)

  return (<>
    <div className="App">Take a look at the console! (F12)</div>
    <div>
      {characters.results.map((char)=>
            (<div>{char.name}</div>))}
    </div>
  </>)
}         

export default App;
