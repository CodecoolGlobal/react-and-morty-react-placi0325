import textlogo from '../img/textlogo.png'

const Header = (props) => {
    return (
        <div>
            <img src={textlogo} alt='textlogo'></img>
            <button>Home</button>
            <button>Characters</button>
            <button>Locations</button>
        </div>
    )
}

export default Header