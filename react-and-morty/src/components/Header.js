import textlogo from '../img/textlogo.png'

const Header = (props) => {
    return (
        <div className='header'>
            <img className='header-logo' src={textlogo} alt='textlogo'></img>
            <div className='header-buttons'>
                <button className='header-button' onClick={() => {props.setContent("home")}}>Home</button>
                <button className='header-button' onClick={() => {props.setContent("characters")}}>Characters</button>
                <button className='header-button' onClick={() => {props.setContent("locations")}}>Locations</button>
            </div>
        </div>
    )
}

export default Header