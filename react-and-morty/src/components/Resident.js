import { useCharacterCard } from "../api/useData";

const Resident = (props) => {
    const resident = useCharacterCard(props.link);

    if (resident) {
        return (
        <div className="residentName" >
            <img className="smallCharacterImage" src={resident.image} alt={resident.name} onClick={() => {
                console.log(resident.id)
                props.setContent("characters");
                props.setCharacterCondition("allCharacter");
                //props.setCharacterCondition(resident.id);
            }}></img>
            {resident.name}
        </div>)
    }
}

export default Resident