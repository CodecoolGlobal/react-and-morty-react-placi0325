import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import LocationList from "./components/LocationList";
import CharacterList from "./components/CharacterList";


function App () {
  const [content, setContent] = useState("home");
  const [locationCondition, setLocationCondition] = useState("allLocation")
  const [characterCondition, setCharacterCondition] = useState("allCharacter")

  const contentOptions = {
    home: <Home setContent={setContent} />,
    characters: <CharacterList setContent={setContent} setCharacterCondition={setCharacterCondition} characterCondition={characterCondition} />,
    locations: <LocationList setContent={setContent} setLocationCondition={setLocationCondition} locationCondition={locationCondition} />,
  };

  return (<div className="container">
    {contentOptions[content]}
  </div>)
}         

export default App;
