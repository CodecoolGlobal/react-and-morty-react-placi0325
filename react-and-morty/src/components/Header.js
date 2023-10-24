import textlogo from "../img/textlogo.png";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <img
        className="header-logo"
        src={textlogo}
        alt="textlogo"
        onClick={() => {
          navigate("/");
        }}
      ></img>
      <div className="header-buttons">
        <button
          className="header-button"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </button>
        <button
          className="header-button"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
        <button
          className="header-button"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Sign up
        </button>
        <button
          className="header-button"
          onClick={() => {
            navigate("/characters");
          }}
        >
          Characters
        </button>
        <button
          className="header-button"
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

export default Header;
