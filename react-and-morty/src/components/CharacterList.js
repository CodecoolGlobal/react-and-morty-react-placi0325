import CharacterListItem from "./CharacterListItem";
import { useCharacters, useCharacterCard } from "../api/useData";
import Header from "./Header";
import { useEffect, useState } from "react";
import PageSwitcher from "./PageSwitcher"
import CharacterCard from "./CharacterCard"

const CharacterList = (props) => {
    const [characterPage, setCharacterPage] = useState(1);

    console.log('id',props.characterCondition)
    let singleCharacter = useCharacterCard(`https://rickandmortyapi.com/api/character/${props.characterCondition}`)
    console.log("char object",singleCharacter)
    console.log('isznt',props.characterCondition)
    let characters = useCharacters(characterPage);

    console.log("char object",singleCharacter)
    if (props.characterCondition === "allCharacter") {
        return (<>
            <Header setContent={props.setContent} setLocationCondition={props.setLocationCondition} setCharacterCondition={props.setCharacterCondition}/>
            <PageSwitcher max={42} setPage={setCharacterPage} pageNumber={characterPage} />
            <div className="characterListContainer">
                {characters && characters.results.map((char)=>(<CharacterListItem character={char} setContent={props.setContent} setCharacterCondition={props.setCharacterCondition}/>))}
            </div>
        </>)
    } else if (singleCharacter.name) {
        return <CharacterCard setContent={props.setContent} character={singleCharacter} setLocationCondition={props.setLocationCondition} setCharacterCondition={props.setCharacterCondition}/>
    } else {
        return (<div style={{color: "white"}}>hello, something is wrong</div>)
    }

}

export default CharacterList