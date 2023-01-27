import planet from "../img/planet.jpg"
import cluster from '../img/cluster.jpg'
import dream from '../img/dream.jpg'
import menagerie from '../img/menagerie.jpg'
import resort from '../img/resort.webp'
import tv from '../img/tv.jpg'
import spacestation from '../img/spacestation.webp'
import Header from "./Header"
import Resident from "./Resident"

const LocationCard = (props) => {

    //let data = useLocationCard(props.id);


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
            img = planet
            break;
    }


    const content = <>
        <Header setContent={props.setContent} setLocationCondition={props.setLocationCondition} setCharacterCondition={props.setCharacterCondition}/>
        <div className="locationCardContainer">
            <img className="locationCardImage" src={img} alt={props.location.name}></img>
            <div className="locationData">
                <div className='locationName'>Name:&nbsp;{props.location.name}</div>
                <div>Type:&nbsp;{props.location.type}</div>
                <div className='locationDimension'>Dimension:&nbsp;{props.location.dimension}</div>
                <div>Residents:</div>
                {props.location.residents.map((resident)=> (<Resident link={resident} setContent={props.setContent} setLocationCondition={props.setLocationCondition} setCharacterCondition={props.setCharacterCondition}/>))}
            </div>
        </div>
    </>
    return content
}
export default LocationCard