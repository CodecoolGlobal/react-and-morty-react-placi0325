import Header from "../components/Header";
import { useLocations } from "../api/useData";
import LocationListItem from "../components/LocationListItem";
import PageSwitcher from "../components/PageSwitcher";
import { useState, useEffect } from "react";

const LocationList = (props) => {
  const [locationPage, setLocationPage] = useState(1);
  const [locations, setLocations] = useState(null);
  const [maxPage, setMaxPage] = useState(null);
  const locationsPromise = useLocations(locationPage);

  useEffect(() => {
    locationsPromise.then((locations) => {
      setMaxPage(locations.info.pages);
      setLocations(locations);
    });
  }, [locationPage]);
  return (
    <>
      <Header />
      <PageSwitcher max={maxPage} setPage={setLocationPage} pageNumber={locationPage} />
      <div className="locations">
        {locations &&
          locations.results.map((location) => (
            <LocationListItem key={location.id} location={location} />
          ))}
      </div>
    </>
  );
};

export default LocationList;
