import Header from "./Header"

const CharacterCard = (props) => {
    console.log('character card:',props.character)

    const content = <div className="characterCard">
        <Header setContent={props.setContent} setLocationCondition={props.setLocationCondition}/>
        <img className="characterImage" src={props.character.image} alt={props.character.name}></img>
        <div>{props.character.name}</div>
        <div>{props.character.species}</div>
        <div>origin: {props.character.origin.name}</div>
        <div>locations: {props.character.location.name}</div>
        <div>number of appearances: {props.character.episode.length}</div>
    </div>
    return content
}
export default CharacterCard