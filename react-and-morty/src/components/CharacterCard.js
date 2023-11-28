import { useCharacterCard } from "../api/useData";
import { useParams } from "react-router-dom";
import Header from "./Header";
import { useState, useEffect } from "react";

const CharacterCard = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const characterPromise = useCharacterCard(id);

  useEffect(() => {
    characterPromise.then((character) => {
      setCharacter(character);
    })
  }, [])

  return (
    <div className="characterCard">
      <Header />
      {character !== null ? (
        <>
          <img className="characterImage" src={character.image} alt={character.name} />
          <div>{character.name}</div>
          <div>{character.species}</div>
          <div>origin: {character.origin.name}</div>
          <div>location: {character.location.name}</div>
          <div>number of appearances: {character.episode.length}</div>
        </>
      ) : null}
    </div>
  );
};
export default CharacterCard;
