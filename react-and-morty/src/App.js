import React from "react";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";

function App () {
  const characters = useCharacters(1);
  //const locations = await useLocations(1);
  console.log(characters)
  

  return (<>
    <div className="App">Take a look at the console! (F12)</div>
    {/* <div>
      {characters.results.map((char)=>
            (<div>{char.name}</div>))}
    </div> */}
  </>)
}         

export default App;
