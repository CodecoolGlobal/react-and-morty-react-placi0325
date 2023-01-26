import React, { useState } from "react";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";
import Home from "./components/Home";
import LocationList from "./components/LocationList";
import CharacterList from "./components/CharacterList";
import LocationCard from "./components/LocationCard";

function App () {
  const [content, setContent] = useState("home");
  const [locationCondition, setLocationCondition] = useState("allCharacter")

  const contentOptions = {
    home: <Home setContent={setContent} />,
    characters: <CharacterList setContent={setContent} />,
    locations: <LocationList setContent={setContent} setLocationCondition={setLocationCondition} locationCondition={locationCondition} />,
    locationCard: <LocationCard setContent={setContent} setLocationCondition={setLocationCondition} id={locationCondition[0]} type={locationCondition[1]} name={locationCondition[2]} dimension={locationCondition[3]}/>,
  };

  return (<div className="container">
    {contentOptions[content]}
  </div>)
}         

export default App;
