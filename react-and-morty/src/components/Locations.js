import Header from './Header'
import { useLocations } from "../api/useData";

const Locations = (props) => {
    let data = useLocations(1);
    return (<div className='locations'>
        <Header />
        {data && data.results.map((location)=>{
            return <div>
                {location.name}
            </div>})}
    </div>)
}

export default Locations
