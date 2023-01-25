import Header from './Header'
import { useLocations } from "../api/useData";
import LocationListItem from './LocationListItem'

const LocationList = (props) => {
    let data = useLocations(1);
    return (<>
        <Header setContent={props.setContent}/>
        <div className='locations'>
        {data && data.results.map((location)=>(<LocationListItem location={location}/>))}
    </div>
    </>)
}

export default LocationList