import Header from './Header'
import { useLocations, useLocationCard } from "../api/useData";
import LocationListItem from './LocationListItem'
import LocationCard from './LocationCard'
import PageSwitcher from './PageSwitcher';
import { useEffect, useState } from 'react';

const LocationList = (props) => {
    const [locationPage, setLocationPage] = useState(1);
    


    let singleCharacter = useLocationCard(props.locationCondition)


    let data = useLocations(locationPage);

    if (props.locationCondition === "allCharacter") {
        return (<>
            <Header setContent={props.setContent} setLocationCondition={props.setLocationCondition} />
            <PageSwitcher max={7} setPage={setLocationPage} pageNumber={locationPage} />
            <div className='locations'>
                {data && data.results.map((location)=>(<LocationListItem location={location} setContent={props.setContent} setLocationCondition={props.setLocationCondition}/>))}
            </div>
        </>)
    } else {
        
        console.log(singleCharacter)
        return <LocationCard setContent={props.setContent} location={singleCharacter} setLocationCondition={props.setLocationCondition}/>
    }
    
}

export default LocationList