import Header from './Header'
import { useLocations } from "../api/useData";
import LocationListItem from './LocationListItem'
import PageSwitcher from './PageSwitcher';
import { useState } from 'react';

const LocationList = (props) => {
    const [locationPage, setLocationPage] = useState(1);
    let data = useLocations(locationPage);
    return (<>
        <Header setContent={props.setContent}/>
        <PageSwitcher max={7} setPage={setLocationPage} pageNumber={locationPage} />
        <div className='locations'>
        {data && data.results.map((location)=>(<LocationListItem location={location}/>))}
    </div>
    </>)
}

export default LocationList