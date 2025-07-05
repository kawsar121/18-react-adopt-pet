import React from "react";
import { Link } from "react-router-dom";

const ShowPets = ({ petCategory }) => {
  const { image, gender, date_of_birth, breed, pet_name, vaccinated_status } =
    petCategory;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Pet Max" className=" w-full h-64" />
      </figure>
      <div className="card-body text-center">
        <h2 className="text-orange-600 text-lg font-semibold">
          Pet Name: {pet_name}
        </h2>
        <div className="flex justify-between text-sm text-blue-500 mt-2">
          <span>Gender : {gender}</span>
        </div>
        <div className="card-actions justify-center mt-4">
          <Link
            className="btn btn-primary btn-sm"
            to={`/petCategory/${petCategory.petId}`}
          >
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowPets;
