import { useNavigate } from "react-router-dom";
import getImage from "../api/getImage";

const LocationListItem = (props) => {
  const navigate = useNavigate();
  let img = getImage(props.location.type);
  
  const content = (
    <div className="locationListItem">
      <img
        className="locationImage"
        src={img} 
        alt={props.location.name}
        onClick={() => {
            navigate(`/locations/${props.location.id}`)
        }}
      ></img>
      <div className="locationName">{props.location.name}</div>
    </div>
  );

  return content;
};

export default LocationListItem;
