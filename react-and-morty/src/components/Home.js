import logo from '../img/logo.png'

const Home = (props) => {
 return (<div className='header'>
    <img className='logo' src={logo} alt='logo'></img>
    <div className='button-container'>
        <button className='button'>Characters</button>
        <button className='button'>Locations</button>
    </div>
 </div>)
}

export default Home

