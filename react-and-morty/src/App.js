import React from "react";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";
import Home from "./components/Home";
import Locations from "./components/Locations";
import CharacterList from "./components/CharacterList";

function App () {
  return (<div className="container">
    <CharacterList/>
    <Home />
    <Locations/>
  </div>)
}         

export default App;
