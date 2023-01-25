import React from "react";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";
import Home from "./components/Home";
import Header from "./components/Header";
import CharacterList from "./components/CharacterList";

function App () {


  return (<div className="container">
    <Header/>
    <Home />
    <CharacterList />
  </div>)
}         

export default App;
