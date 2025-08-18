import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CreatContext } from "./ContextApiSet/Context";

const Success = () => {
  const { adoptions, deleteAdoption } = useContext(CreatContext);

  return (
    <div className="min-h-screen p-6 mt-32 lg:mt-36">
      <h2 className="text-2xl font-bold text-center text-green-700 mb-6">🎉 Adoption Success Messages</h2>

      {adoptions.length === 0 ? (
        <p className="text-center text-gray-600">No adoptions yet.</p>
      ) : (
        <div className="grid gap-4 max-w-2xl mx-auto">
          {adoptions.map((pet, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-lg font-semibold text-green-600">✅ You adopted: {pet.pet_name}</h3>
              <p className="text-sm text-gray-700">{pet.pet_details}</p>
              <div className="flex justify-between mt-2">
                <span className="text-sm text-blue-500">Breed: {pet.breed}</span>
                <span className="text-sm text-purple-500">Gender: {pet.gender}</span>
              </div>
              <button
                className="btn btn-error btn-xs mt-3"
                onClick={() => deleteAdoption(index)}
              >
                Delete Message
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="text-center mt-6">
        <Link to="/" className="btn btn-primary btn-sm">Back to Home</Link>
      </div>
    </div>
  );
};

export default Success;
