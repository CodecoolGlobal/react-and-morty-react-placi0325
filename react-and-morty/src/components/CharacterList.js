import CharacterListItem from "./CharacterListItem";
import { useCharacters, useCharacterCard } from "../api/useData";
import Header from "./Header";
import { useState } from "react";
import PageSwitcher from "./PageSwitcher"
import CharacterCard from "./CharacterCard"

const CharacterList = (props) => {
    const [characterPage, setCharacterPage] = useState(1);

    let singleCharacter = useCharacterCard(props.characterCondition)
    const characters = useCharacters(characterPage);

    if (props.characterCondition === "allCharacter") {
        return (<>
            <Header setContent={props.setContent}/>
            <PageSwitcher max={42} setPage={setCharacterPage} pageNumber={characterPage} />
            <div className="characterListContainer">
                {characters && characters.results.map((char)=>
                    (<CharacterListItem character={char} setContent={props.setContent} setCharacterCondition={props.setCharacterCondition}/>))}
            </div>
        </>)
    } else {

        console.log(singleCharacter)
        return <CharacterCard setContent={props.setContent} character={singleCharacter} setCharacterCondition={props.setCharacterCondition}/>
    }

}

export default CharacterList