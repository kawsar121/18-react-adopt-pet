import React, { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { CreatContext } from "../ContextApiSet/Context";
const ShowDetails = () => {
  const petDetails = useLoaderData();
  const allok = petDetails.petData;
  // const {pet_name,pet_details,image} = allok
  console.log(allok);

  //Storage Set
  const {addAdoption} = useContext(CreatContext)
  const navigate = useNavigate()
  const handleAdopt = () => {
    addAdoption(allok);
    navigate("/success");
  };

  return (
    <div className="flex justify-center items-center min-h-screen  p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <figure>
          <img
            src={allok.image}
            alt="Pet Max"
            className="object-cover w-full h-64"
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="text-orange-600 text-lg font-semibold">
            Pet Name: {allok.pet_name}
          </h2>
          <p className="text-sm text-gray-700">{allok.pet_details}</p>

          <div className="flex justify-between text-sm text-blue-500 mt-2">
            <span>Region:{allok.breed}</span>
            <span>Gender: {allok.gender}</span>
          </div>

          <div className="card-actions justify-center mt-4">
            <Link onClick={handleAdopt} className="btn btn-primary btn-sm">Adopt Now</Link>
            <Link to="/" className="btn btn-secondary btn-sm">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
