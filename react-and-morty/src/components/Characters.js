import Header from './Header'

const CharacterCard = (props) => {
    const content = <div className='characterListItem'>
        <div className='characterName'>{props.character.name}</div>
        <div></div>
        <div></div>
    </div>;


    return content
}

export default CharacterCard

