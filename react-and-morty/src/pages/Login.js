import { useNavigate } from "react-router-dom";
import { useClient } from "../context/ClientContext";
import Header from "../components/Header";

const Login = () => {
  const navigate = useNavigate();
  const {client, setClient} = useClient();

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
    loginUser(user).then((data) => {
      setClient(data)
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
    return fetch("/login", fetchOptions);
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
          <input name="password" id="password" />
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
