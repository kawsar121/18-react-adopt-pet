import { useLoaderData } from "react-router-dom";
import HospitalView from "./HospitalView";
import AutoSlider from "./Theme/AutoSlider";

const AnimalHospital = () => {
  const hos = useLoaderData();
  console.log(hos)
  return (

    
    <div className="min-h-screen max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className='mt-12 mb-14'>
                <AutoSlider></AutoSlider>
            </div>
  {/* Title */}
  <h1 className="text-3xl sm:text-4xl font-bold text-center mt-16 mb-5 text-red-500">
    🐾 Animal Treatment & Consultation Center
  </h1>

  {/* Count */}
  <p className="text-center text-gray-600 ">
    Total Hospitals: <span className="font-semibold">{hos.length}</span>
  </p>

  {/* Hospital Grid */}
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {Array.isArray(hos) && hos.map((hospital) => (
      <HospitalView key={hospital.id} pital={hospital} />
    ))}
  </div>
    </div>

  );
};

export default AnimalHospital;
