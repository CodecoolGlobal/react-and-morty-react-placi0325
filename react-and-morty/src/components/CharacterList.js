import CharacterListItem from "./CharacterListItem";
import { useCharacters } from "../api/useData";
import Header from "./Header";
import { useState } from "react";
import PageSwitcher from "./PageSwitcher"

const CharacterList = (props) => {
    const [characterPage, setCharacterPage] = useState(1);

    const characters = useCharacters(characterPage);
    const content = <>
    <Header setContent={props.setContent}/>
    <PageSwitcher max={42} setPage={setCharacterPage} pageNumber={characterPage} />
    <div className="characterListContainer">
        {characters && characters.results.map((char)=>
            (<CharacterListItem character={char}/>))}
    </div>
    </>
    return content
}

export default CharacterList