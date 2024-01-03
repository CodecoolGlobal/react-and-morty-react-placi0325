import { createContext, useCallback, useContext, useEffect, useState } from "react";

const ClientContext = createContext();

export const ClientContextProvider = ({ children }) => {
  const [client, setClient] = useState(undefined);

  const checkAuthState = useCallback(() => {
    const authtoken = localStorage.getItem("Token");
    console.log("token:", authtoken);

    if (authtoken) {
      console.log("set token as client");
      setClient(authtoken);
    }

    //read token from local storage, send req to check auth, save to state
    //useEffect to make it authomatic
    //set null or something!
  }, []);

  useEffect(() => {
    checkAuthState();
  }, [checkAuthState]);

  const logout = () => {
    setClient(null);
    localStorage.removeItem("Token");
  };

  return (
    <ClientContext.Provider value={{ client, setClient, logout }}>
      {children}
    </ClientContext.Provider>
  );
};

export const useClient = () => {
  return useContext(ClientContext);
};

export const fetchWithToken = (method, token, url, body) => {
  const headers = {
    "Content-Type": "application/json",
  };

  const fetchOptions = {
    method: method,
    headers: headers,
  };

  if (body !== null) {
    fetchOptions.body = JSON.stringify(body);
  }

  if (token !== null) {
    headers["Authorization"] = token;
  }

  return fetch(url, fetchOptions);
};