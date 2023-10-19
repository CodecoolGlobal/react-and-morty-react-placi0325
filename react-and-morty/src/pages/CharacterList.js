import CharacterListItem from "../components/CharacterListItem";
import Header from "../components/Header";
import PageSwitcher from "../components/PageSwitcher";
import { useCharacters } from "../api/useData";

import React, { useState, useEffect } from "react";

const CharacterList = (props) => {
  const [characterPage, setCharacterPage] = useState(1);
  const [characters, setCharacters] = useState(null);
  const [maxPage, setMaxPage] = useState(null);
  const charactersPromise = useCharacters(characterPage);

  useEffect(() => {
    charactersPromise.then((characters) => {
      setMaxPage(characters.info.pages);
      setCharacters(characters);
    });
  }, [characterPage]);

  return (
    <>
      <Header />
      <PageSwitcher max={maxPage} setPage={setCharacterPage} pageNumber={characterPage} />
      <div className="characterListContainer">
        {characters &&
          characters.results.map((character) => (
            <CharacterListItem key={character.id} character={character} />
          ))}
      </div>
    </>
  );
};

export default CharacterList;
