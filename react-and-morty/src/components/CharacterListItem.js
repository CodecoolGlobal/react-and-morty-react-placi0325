const CharacterListItem = (props) => {
    const content = <div className='characterListItem'>
        <img className="characterImage" src={props.character.image} alt={props.character.name}></img>
        <div className='characterName'>{props.character.name}</div>
    </div>;


    return content
}

export default CharacterListItem

