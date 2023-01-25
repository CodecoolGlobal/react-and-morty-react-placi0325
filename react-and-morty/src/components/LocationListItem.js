import planet from "../img/planet.jpg"
import cluster from '../img/cluster.jpg'
import dream from '../img/dream.jpg'
import menagerie from '../img/menagerie.jpg'
import resort from '../img/resort.webp'
import tv from '../img/tv.jpg'
import spacestation from '../img/spacestation.webp'

const LocationListItem = (props) => {
    let img;
    switch (props.location.type) {
        case "Planet":
            img = planet;
            break;
        case "Cluster":
            img = cluster;
            break;
        case "Dream":
            img = dream;
            break;
        case "Space station":
            img = spacestation;
            break;
        case "Menagerie":
            img = menagerie;
            break;
        case "TV":
            img = tv;
            break;
        case "Resort":
            img = resort;
            break;
        default:
            img=planet
            break;
    }
    const content = <div className='locationListItem'>
        <img className="locationImage" src={img} alt={props.location.name}></img>
        <div className='locationName'>{props.location.name}</div>
    </div>;


    return content
}

export default LocationListItem