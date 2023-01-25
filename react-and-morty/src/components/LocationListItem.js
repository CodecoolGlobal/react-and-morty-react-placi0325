const LocationListItem = (props) => {
    let img;
    switch (props.location.type) {
            case "Planet":
                img = "../img/planet.jpg"
                break;

            default:
                break;
        }
    const content = <div className='locationListItem'>
        <img className="locationImage" src={img} alt={props.location.name}></img>
        <div className='locationName'>{props.location.name}</div>
    </div>;


    return content
}

export default LocationListItem