const CharacterListItem = (props) => {
    const content = <div className='characterListItem'>
        <img className="characterImage" src={props.character.image}></img>
        <div className='characterName'>{props.character.name}</div>
    </div>;


    return content
}

export default CharacterListItem

