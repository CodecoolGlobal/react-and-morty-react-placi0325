import { useNavigate } from "react-router-dom";

const CharacterListItem = (props) => {
  const navigate = useNavigate();

  return (
    <div className="characterListItem">
      <img
        className="characterImage"
        src={props.character.image}
        alt={props.character.name}
        onClick={() => {
          navigate(`/characters/${props.character.id}`);
        }}
      ></img>
      <div className="characterName">{props.character.name}</div>
    </div>
  );
};

export default CharacterListItem;
