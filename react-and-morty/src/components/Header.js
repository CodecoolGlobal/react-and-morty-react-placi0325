import textlogo from '../img/textlogo.png'

const Header = (props) => {
    return (
        <div className='header'>
            <img className='header-logo' src={textlogo} alt='textlogo'></img>
            <div >
                <button className='button'>Home</button>
                <button className='button'>Characters</button>
                <button className='button'>Locations</button>
            </div>
        </div>
    )
}

export default Header