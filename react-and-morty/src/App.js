import React, { useState } from "react";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";
import Home from "./components/Home";
import LocationList from "./components/LocationList";
import CharacterList from "./components/CharacterList";

function App () {
  const [content, setContent] = useState("home");

  const contentOptions = {
    home: <Home setContent={setContent} />,
    characters: <CharacterList setContent={setContent} />,
    locations: <LocationList setContent={setContent} />,
  };

  return (<div className="container">
    {contentOptions[content]}
  </div>)
}         

export default App;
