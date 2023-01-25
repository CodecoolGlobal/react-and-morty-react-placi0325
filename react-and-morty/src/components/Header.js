import textlogo from '../img/textlogo.png'

const Header = (props) => {
    return (
        <div className='header'>
            <img className='header-logo' src={textlogo} alt='textlogo'></img>
            <div className='header-buttons'>
                <button className='header-button'>Home</button>
                <button className='header-button'>Characters</button>
                <button className='header-button'>Locations</button>
            </div>
        </div>
    )
}

export default Header