import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCharacterCard } from "../api/useData";

const Resident = (props) => {
  const navigate = useNavigate();

  const url = props.resident_url;
  const parts = url.split("/");
  const id = parts[parts.length - 1];

  const [character, setCharacter] = useState(null);
  const characterPromise = useCharacterCard(id);

  useEffect(() => {
    characterPromise.then((character) => {
      setCharacter(character);
    });
  }, []);

  return (
    <div className="residentName">
      {character !== null ? (
        <>
          <img
            className="smallCharacterImage"
            src={character.image}
            alt={character.name}
            onClick={() => {
              navigate(`/characters/${id}`);
            }}
          ></img>
          {character.name}
        </>
      ) : null}
    </div>
  );
};

export default Resident;
