import CharacterListItem from "./CharacterListItem";
import { useCharacters } from "../api/useData";

const CharacterList = (props) => {
    const characters = useCharacters(1);
    const content = <div className="characterListContainer">
        {characters && characters.results.map((char)=>
            (<CharacterListItem character={char}/>))}
    </div>
    return content
}

export default CharacterList