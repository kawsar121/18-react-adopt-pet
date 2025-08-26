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

import Pet from "./Components/Pets/Pet.jsx";
import ShowDetails from "./Components/Pets/ShowDetails.jsx";
import Context from "./Components/ContextApiSet/Context.jsx";
import PrivateRoute from "./Components/Private/PrivateRoute.jsx";
import AnimalHospital from "./Components/Hospital/AnimalHospital.jsx";
import AccessoriesIteams from "./Components/PetAccos/AccessoriesIteams.jsx";
import Accessories from "./Components/PetAccos/HomeComponentsAccessories.jsx";
import AccessoriesDetails from "./Components/PetAccos/AccessoriesDetails.jsx";
import Home from "./Components/LayOuts/Home.jsx";
import Root from "./Components/LayOuts/Root.jsx";
import Register from "./Components/Pages/Register.jsx";
import Login from "./Components/Pages/Login.jsx";
import Success from "./Components/Pages/Success.jsx";
import About from "./Components/Pages/About.jsx";
import HomeComponentsAccessories from "./Components/PetAccos/HomeComponentsAccessories.jsx";


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
          
        ],
        
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
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path:"/hospital",
        element: <AnimalHospital></AnimalHospital> ,
        loader: ()=> fetch('/pethosipital.json')
      },
      {
        path:"/items",
        element: <AccessoriesIteams></AccessoriesIteams>,
      },
      {
        path:"/details",
        element: <PrivateRoute><AccessoriesDetails></AccessoriesDetails></PrivateRoute>
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
      {
        path: "hacc",
        element: <HomeComponentsAccessories></HomeComponentsAccessories>
      }
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
