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
        <div className="flex justify-center gap-3 lg:gap-9 mt-24 mb-16">
          {nav.map((animalNav) => (
            <NavLink
              // className="bg-blue-400 text-black py-2 px-5 font-bold"
              className={({ isActive }) =>
                isActive ? "bg-slate-500 rounded-lg text-black py-2 px-6 justify-center font-semibold" : "hover:bg-slate-500 rounded-lg text-black py-2 px-5 font-semibold"
              }
              key={animalNav.id}
              to={`/animal/${animalNav.category}`}
            >
              <div className="flex gap-2">
                <img className="w-4" src={animalNav.category_icon} alt="" srcset="" />
                {animalNav.category}
              </div>
            </NavLink>
          ))}
        </div>
        
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Home;
