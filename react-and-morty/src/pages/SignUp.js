import Header from "../components/Header";
import { useNavigate } from "react-router-dom";


const createNewUser = (user) => {
    console.log(user);
    return fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };

const SignUp = () => {
  const navigate = useNavigate();

  const onCancel = () => {
    navigate("/");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

   
    const user = {};

    for (let [key, value] of formData.entries()) {
        user[key] = value;
    }
    createNewUser(user)
        .then(() => {
          navigate("/");
        })
        .catch((err) => {
          throw err;
        })
};

  return (
    <div className="loginContainer">
      <Header />
      <form className="loginForm" onSubmit={onSubmit}>
        <h1>Sign up</h1>
        <div>
          <label htmlFor="email">Email:</label>
          <input name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input name="password" id="password" type="password"/>
        </div>
        <div className="buttonContainer">
          <button className="button" type="submit">
            Sign up
          </button>
          <button className="button" type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
