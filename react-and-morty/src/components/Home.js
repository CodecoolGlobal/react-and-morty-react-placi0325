import logo from '../img/logo.png'

const Home = (props) => {
 return (<div className='home'>
    <img className='logo' src={logo} alt='logo'></img>
    <p>On our page you can browse all of the characters and locations of Rick and Morty!</p>
    <div className='button-container'>
        <button className='button' onClick={() => {props.setContent("characters")}}>Characters</button>
        <button className='button' onClick={() => {props.setContent("locations")}}>Locations</button>
    </div>
 </div>)
}

export default Home

