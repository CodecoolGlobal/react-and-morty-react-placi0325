import logo from "../img/logo.png";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <img className="logo" src={logo} alt="logo"></img>
      <p>
        On our page you can browse all of the characters and locations of Rick and Morty!
      </p>
      <div className="button-container">
        <button
          className="button"
          onClick={() => {
            navigate("/characters");
          }}
        >
          Characters
        </button>
        <button
          className="button"
          onClick={() => {
            navigate("/locations");
          }}
        >
          Locations
        </button>
      </div>
    </div>
  );
};

export default Home;
