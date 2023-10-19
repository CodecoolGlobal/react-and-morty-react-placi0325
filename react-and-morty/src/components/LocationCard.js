import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Header from "./Header";
import Resident from "./Resident";
import { useLocationCard } from "../api/useData";
import getImage from "../api/getImage";

const LocationCard = (props) => {
  const { id } = useParams();
  const [location, setLocation] = useState(null);
  const locationPromise = useLocationCard(id);
  const imgRef = useRef(null); // Using useRef for img

  useEffect(() => {
    locationPromise.then((location) => {
      setLocation(location);
      imgRef.current = getImage(location.type);
    });
  }, []);

  const content = (
    <>
      <Header />
      <div className="locationCardContainer">
        {location !== null ? (
          <>
            <img className="locationCardImage" src={imgRef.current} alt={location.name}></img>
            <div className="locationData">
              <div className="locationName">Name:&nbsp;{location.name}</div>
              <div>Type:&nbsp;{location.type}</div>
              <div className="locationDimension">
                Dimension:&nbsp;{location.dimension}
              </div>
              <div>Residents:</div>
              {location.residents.map((resident_url) => (
                <Resident resident_url={resident_url} key={resident_url}/>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </>
  );
  return content;
};
export default LocationCard;
