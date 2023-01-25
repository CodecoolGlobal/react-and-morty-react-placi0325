import React, { useState } from "react";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";
import Home from "./components/Home";
import Locations from "./components/Locations";
import CharacterList from "./components/CharacterList";

function App () {
  const [content, setContent] = useState("home");

  const contentOptions = {
    home: <Home setContent={setContent} />,
    characters: <CharacterList setContent={setContent} />,
    locations: <Locations setContent={setContent} />,
  };

  return (<div className="container">
    {contentOptions[content]}
  </div>)
}         

export default App;
