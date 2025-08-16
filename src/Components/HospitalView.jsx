import React from "react";

const HospitalView = ({pital}) => {
    const {hospital_name, hospital_address, phone_number, hospital_image} = pital
  return (
    <div className="card  w-96">
      <figure className="px-10 pt-10">
        <img
          src={hospital_image}
          alt="Shoes"
          className="rounded-xl w-56 h-40"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{hospital_name}</h2>
        <p>{hospital_address}</p>
        <p>Phone : {phone_number}</p>
      </div>
    </div>
  );
};

export default HospitalView;
