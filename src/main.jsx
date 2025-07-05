import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Root from "./Components/Root.jsx";
import Pet from "./Components/Pet.jsx";
import ShowDetails from "./Components/ShowDetails.jsx";
import Register from "./Components/Register.jsx";
import Context from "./Components/ContextApiSet/Context.jsx";
import Login from "./Components/Login.jsx";
import PrivateRoute from "./Components/Private/PrivateRoute.jsx";
import Success from "./Components/Success.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "",
            element: <Navigate to={`/animal/Cat`}></Navigate>,
          },
          {
            path: "/animal/:id",
            element: <Pet></Pet>,
            loader: ({ params }) =>
              fetch(
                `https://openapi.programming-hero.com/api/peddy/category/${params.id}`
              ),
          },
          {
            path: "/petCategory/:id",
            element: (
              <PrivateRoute>
                <ShowDetails></ShowDetails>
              </PrivateRoute>
            ),
            loader: ({ params }) =>
              fetch(
                `https://openapi.programming-hero.com/api/peddy/pet/${params.id}`
              ),
          },
        ],
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/menu",
        element: <h1 className="mt-44 text-red-600 text-4xl">Menu updating! </h1>,
      },
      {
        path: "/success",
        element: <Success></Success>
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/success",
        element: <Success></Success>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>
  </StrictMode>
);
