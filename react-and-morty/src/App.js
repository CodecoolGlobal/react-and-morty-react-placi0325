import React from "react";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";
import Home from "./components/Home";
import Header from "./components/Header";
import Locations from "./components/Locations";
import CharacterList from "./components/CharacterList";


function App () {


  return (<div className="container">
    <Header/>
    <Home />
  </div>)
}         

export default App;
