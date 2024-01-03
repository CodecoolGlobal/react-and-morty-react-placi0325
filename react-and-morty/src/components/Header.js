import { useEffect } from "react";
import { useClient } from "../context/ClientContext";
import textlogo from "../img/textlogo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { client, setClient, logout } = useClient();

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
        {!client && (
          <button
            className="header-button"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
        )}
        {!client && (
          <button
            className="header-button"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Signup
          </button>
        )}
        {client && (
          <button
            className="header-button"
            onClick={() => {
              logout();
              navigate("/");
            }}
          >
            Logout
          </button>
        )}
        {client && (
          <button
            className="header-button"
            onClick={() => {
              logout();
              navigate("/userpage");
            }}
          >
            Userpage
          </button>
        )}
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
