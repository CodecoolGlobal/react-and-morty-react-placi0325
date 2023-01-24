import logo from '../img/logo.png'

const Home = (props) => {
 return (<div className='header'>
    <img className='logo' src={logo} alt='logo'></img>
    <p>On our page you can browse all of the characters and locations of Rick and Morty!</p>
    <div className='button-container'>
        <button className='button'>Characters</button>
        <button className='button'>Locations</button>
    </div>
 </div>)
}

export default Home

