import CharacterListItem from "./CharacterListItem";
import { useCharacters, useCharacterCard } from "../api/useData";
import Header from "./Header";
import { useState } from "react";
import PageSwitcher from "./PageSwitcher"
import CharacterCard from "./CharacterCard"

const CharacterList = (props) => {
    const [characterPage, setCharacterPage] = useState(1);

    const characters = useCharacters(characterPage);
    let singleCharacter = useCharacterCard(props.characterCondition)

    if (props.characterCondition === "allCharacter") {
        return (<>
            <Header setContent={props.setContent}/>
            <PageSwitcher max={42} setPage={setCharacterPage} pageNumber={characterPage} />
            <div className="characterListContainer">
                {characters && characters.results.map((char)=>
                    (<CharacterListItem character={char}/>))}
            </div>
        </>)
    } else {
        return <CharacterCard setContent={props.setContent} character={singleCharacter} setLocationCondition={props.setLocationCondition}/>
    }

}

export default CharacterList