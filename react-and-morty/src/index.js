import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./App.css";
import * as serviceWorker from "./serviceWorker";
import Home from "./pages/Home";
import CharacterList from "./pages/CharacterList";
import LocationList from "./pages/LocationList";
import CharacterCard from "./components/CharacterCard";
import LocationCard from "./components/LocationCard";
import Login from "./pages/Login";
import { ClientContextProvider } from "./context/ClientContext";
import SignUp from "./pages/SignUp";

const router = createHashRouter([
  {
    path: "/",
    errorElement: <div />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/characters",
        element: <CharacterList />,
      },
      {
        path: "/characters/:id",
        element: <CharacterCard />,
      },
      {
        path: "/locations",
        element: <LocationList />,
      },
      {
        path: "/locations/:id",
        element: <LocationCard />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ClientContextProvider>
      <RouterProvider router={router} />
    </ClientContextProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
