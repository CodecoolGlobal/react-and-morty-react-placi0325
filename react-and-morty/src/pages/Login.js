import { useNavigate } from "react-router-dom";
import { useClient } from "../context/ClientContext";
import Header from "../components/Header";

const Login = () => {
  const navigate = useNavigate();
  const { client, setClient } = useClient();

  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = {};

    for (let [key, value] of formData.entries()) {
      userData[key] = value;
    }
    handleLogin(userData);
  };

  const onCancel = () => {
    navigate("/");
  };

  const handleLogin = (user) => {
    loginUser(user).then((token) => {
      setClient(token);
      navigate("/");
    });
  };

  const loginUser = (user) => {
    const headers = {
      "Content-Type": "application/json",
    };

    const fetchOptions = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(user),
    };
    return fetch("/auth/login-user", fetchOptions).then(function (res) {
      if (res.status === 404) {
        throw new Error("Username not found!");
      } else if (res.status === 401) { 
        throw new Error("Wrong password!");
      } else {
        const token = res.headers.get("Authorization");
        localStorage.setItem("Token", token);
        return token; 
      }
    });
  };

  return (
    <div className="loginContainer">
      <Header />
      <form className="loginForm" onSubmit={onSubmit}>
        <h1>Log in</h1>
        <div>
          <label htmlFor="username">Username:</label>
          <input name="username" id="username" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input name="password" id="password" type="password"/>
        </div>
        <div className="buttonContainer">
          <button className="button" type="submit">
            Login
          </button>
          <button className="button" type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
