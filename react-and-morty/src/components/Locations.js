import Header from './Header'
import { useLocations } from "../api/useData";

const Locations = (props) => {
    let data = useLocations(1);
    return (<>
        <Header />
        <div className='locations'>
        {data && data.results.map((location)=>{
            return <div>
                {location.name}
            </div>})}
    </div>
    </>)
}

export default Locations