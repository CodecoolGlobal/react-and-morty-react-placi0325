import React from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const updateUserPassword = (passwords) => {
  console.log(passwords);
  return fetch(`/users/${passwords.id}/password`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(passwords),
  });
};

const UserPage = () => {
  const navigate = useNavigate();

  const onCancel = () => {
    navigate("/");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const passwords = {};

    for (let [key, value] of formData.entries()) {
      passwords[key] = value;
    }

    updateUserPassword(passwords)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <div className="loginContainer">
      <Header />
      <form className="loginForm" onSubmit={onSubmit}>
        <h1>User Page</h1>
        <div>
          <label htmlFor="id">Id:</label>
          <input name="id" id="id"/>
        </div>
        <div>
          <label htmlFor="oldPassword">Old Password:</label>
          <input name="oldPassword" id="oldPassword" type="password" />
        </div>
        <div>
          <label htmlFor="newPassword">New Password:</label>
          <input name="newPassword" id="newPassword" type="password" />
        </div>
        <div className="buttonContainer">
          <button className="button" type="submit">
            Update Password
          </button>
          <button className="button" type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserPage;