import Header from './Header'
import { useLocations, useLocationCard } from "../api/useData";
import LocationListItem from './LocationListItem'
import LocationCard from './LocationCard'
import PageSwitcher from './PageSwitcher';
import { useEffect, useState } from 'react';

const LocationList = (props) => {
    const [locationPage, setLocationPage] = useState(1);

    console.log("loc cond.",props.locationCondition)
    let singleLocation = useLocationCard(props.locationCondition)
    let data = useLocations(locationPage);

    if (props.locationCondition === "allLocation") {
        return (<>
            <Header setContent={props.setContent} setLocationCondition={props.setLocationCondition} setCharacterCondition={props.setCharacterCondition} />
            <PageSwitcher max={7} setPage={setLocationPage} pageNumber={locationPage} />
            <div className='locations'>
                {data && data.results.map((location)=>(<LocationListItem location={location} setContent={props.setContent} setLocationCondition={props.setLocationCondition}/>))}
            </div>
        </>)
    } else if (singleLocation.name) {
        
        console.log(singleLocation)
        return <LocationCard setContent={props.setContent} location={singleLocation} setCharacterCondition={props.setCharacterCondition} setLocationCondition={props.setLocationCondition}/>
    }
    
}

export default LocationList