import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Header from "./Header";

const Home = () => {
  const [nav, setNav] = useState([]);
  console.log(nav);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
      .then((res) => res.json())
      .then((data) => setNav(data.categories));
  }, []);

  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main>
        <div className="flex justify-center gap-9 mt-24 mb-16">
          {nav.map((animalNav) => (
            <NavLink
              // className="bg-blue-400 text-black py-2 px-5 font-bold"
              className={({ isActive }) =>
                isActive ? "bg-yellow-400 text-black py-2 px-5 font-bold" : "bg-blue-400 text-black py-2 px-5 font-bold"
              }
              key={animalNav.id}
              to={`/animal/${animalNav.category}`}
            >
              {animalNav.category}
            </NavLink>
          ))}
        </div>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Home;
