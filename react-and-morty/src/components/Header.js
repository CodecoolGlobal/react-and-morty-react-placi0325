import textlogo from '../img/textlogo.png'

const Header = (props) => {
    return (
        <div className='header'>
            <img className='header-logo' src={textlogo} alt='textlogo'></img>
            <div className='header-buttons'>
                <button className='header-button' onClick={() => 
                    {props.setContent("home");
                    props.setCharacterCondition("allCharacter");
                    props.setLocationCondition("allLocation")}}>Home</button>
                <button className='header-button' onClick={() => 
                    {props.setContent("characters");
                    props.setCharacterCondition("allCharacter");
                    props.setLocationCondition("allLocation")}}>Characters</button>
                <button className='header-button' onClick={() => 
                    {props.setContent("locations");
                    props.setCharacterCondition("allCharacter");
                    props.setLocationCondition("allLocation")}}>Locations</button>
            </div>
        </div>
    )
}

export default Header