import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeComponentsAccessories = () => {
  const [loading, setLoading] = useState(true);
  const [tem, setTem] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null); // Modal এর জন্য item
  const [showAll, setShowAll] = useState(false); //for show all data
  // data load
  useEffect(() => {
    fetch("/FilterPetIteam.json")
      .then((res) => res.json())
      .then((data) => {
        setTem(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;
  return (
    <div className="mt-20">
      <div>
        <h1 className="text-2xl whitespace-nowrap md:text-5xl text-slate-800 mb-8 font-semibold">
          Pet Food And Accessories
        </h1>
        <img
          src="https://amarpet.com/_next/image?url=https%3A%2F%2Famarpet-space.sgp1.digitaloceanspaces.com%2Fproduction%2Flanding-page%2Fdiscount_banner&w=1920&q=50"
          alt="banner"
          className="w-full"
        />
        <div className="flex justify-between gap-20 lg:0 mt-10">
          <h2 className="text-base md:text-2xl whitespace-nowrap">
            Food & Accessories
          </h2>
          <Link
            onClick={() => setShowAll(!showAll)}
            to="/items"
            className="text-pink-600 font-medium whitespace-nowrap"
          >
            {showAll ? "Show Less◀️ " : "Show All▶️"}
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row p-4 space-x-0 md:space-x-4 space-y-4 md:space-y-0 min-h-screen">
        {/* Card */}
        <div className="grid justify-center md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10">
          {(showAll ? tem : tem.slice(0, 8)).map((dataload) => (
            <div
              key={dataload.id}
              className="max-w-xs w-full bg-white rounded-xl shadow hover:shadow-lg transition p-4 relative group flex flex-col"
            >
              {/* Discount */}
              <span className="absolute top-2 z-20 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
                {dataload.discount_price}
              </span>

              {/* ইমেজ */}
              <img
                src={dataload.accessories_image}
                alt="pet-accessory"
                className="rounded-xl mx-auto w-48 transform scale-110 hover:scale-100 transition-transform duration-500"
              />

              {/* Button icon */}
              <div className="absolute top-8 right-[7px] flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
                {/* Drawer with button start */}

                <div className="drawer drawer-end z-50">
                  <input
                    id="my-drawer-4"
                    type="checkbox"
                    className="drawer-toggle"
                  />
                  <div className="drawer-content">
                    {/* Page content here */}
                    <label
                      htmlFor="my-drawer-4"
                      className="drawer-button w-9 h-9 bg-white border-2 rounded-full flex items-center justify-center"
                    >
                      <svg
                        width="14"
                        height="12"
                        viewBox="0 0 14 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className=""
                      >
                        <path
                          d="M13.375 11.0489L12.3334 1.24894C12.3334 0.632819 11.8561 0.133789 11.2668 0.133789H7.0001H2.73343C2.1441 0.133789 1.66676 0.632819 1.66676 1.24894L0.625164 11.0489C0.609698 11.1253 0.600098 11.2039 0.600098 11.2853C0.600098 11.9014 1.07743 12.4005 1.66676 12.4005H7.0001H12.3334C12.9228 12.4005 13.4001 11.9014 13.4001 11.2853C13.4001 11.2039 13.3905 11.1253 13.375 11.0489ZM9.66676 2.87037V3.47924C9.66676 5.01648 8.4705 6.26712 7.0001 6.26712C5.5297 6.26712 4.33343 5.01648 4.33343 3.47924V2.87037C4.02356 2.75551 3.8001 2.44884 3.8001 2.0853C3.8001 1.62363 4.1585 1.24894 4.6001 1.24894C5.0417 1.24894 5.4001 1.62363 5.4001 2.0853V3.47924C5.4001 4.40147 6.11796 5.15197 7.0001 5.15197C7.88223 5.15197 8.6001 4.40147 8.6001 3.47924V2.0853C8.6001 1.62363 8.9585 1.24894 9.4001 1.24894C9.8417 1.24894 10.2001 1.62363 10.2001 2.0853C10.2001 2.44884 9.97663 2.75551 9.66676 2.87037Z"
                          fill="#1455ac"
                        ></path>
                      </svg>
                    </label>
                  </div>
                  <div className="drawer-side">
                    <label
                      htmlFor="my-drawer-4"
                      aria-label="close sidebar"
                      className="drawer-overlay"
                    ></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-60 p-4">
                      {/* Sidebar content here */}
                      <li>
                        <a>Sidebar Item 1</a>
                      </li>
                      <li>
                        <a>Sidebar Item 2</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Drawer with button End */}

                <button className="w-9 h-9 bg-white border-2 rounded-full flex items-center justify-center ">
                  <svg
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 11.625C6.92001 11.6258 6.84122 11.6056 6.77148 11.5664C6.51953 11.4258 0.671875 8.10352 0.671875 3.89062C0.671875 3.15276 0.904038 2.43359 1.33548 1.835C1.76692 1.23641 2.37576 0.788745 3.07576 0.55541C3.77577 0.322076 4.53144 0.314905 5.23575 0.534913C5.94005 0.754922 6.55728 1.19096 7 1.78125C7.44272 1.19096 8.05995 0.754922 8.76425 0.534913C9.46856 0.314905 10.2242 0.322076 10.9242 0.55541C11.6242 0.788745 12.2331 1.23641 12.6645 1.835C13.096 2.43359 13.3281 3.15276 13.3281 3.89062C13.3281 5.68359 12.291 7.52344 10.2461 9.36328C9.31752 10.1981 8.30646 10.9362 7.22852 11.5664C7.15878 11.6056 7.07999 11.6258 7 11.625ZM4.1875 1.3125C3.50374 1.3125 2.84798 1.58412 2.36449 2.06762C1.881 2.55111 1.60938 3.20686 1.60938 3.89062C1.60938 7.125 5.94531 9.9668 7 10.6113C8.05469 9.9668 12.3906 7.125 12.3906 3.89062C12.3912 3.29462 12.1852 2.71684 11.8078 2.25559C11.4303 1.79433 10.9047 1.47809 10.3204 1.36068C9.73609 1.24326 9.12914 1.33192 8.60282 1.61157C8.0765 1.89122 7.66332 2.34458 7.43359 2.89453C7.39828 2.9805 7.3382 3.05404 7.261 3.10579C7.18379 3.15754 7.09295 3.18517 7 3.18517C6.90706 3.18517 6.81621 3.15754 6.739 3.10579C6.6618 3.05404 6.60172 2.9805 6.56641 2.89453C6.3713 2.42476 6.041 2.02357 5.61744 1.74189C5.19388 1.46022 4.69617 1.31076 4.1875 1.3125Z"
                      fill="#1455ac"
                    ></path>
                  </svg>
                </button>

                {/* adjust Modal */}
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <Link
                  to="/details"
                  className=""
                  // onClick={() => document.getElementById("my_modal_3").showModal()}
                >
                  <button className="w-9 h-9 bg-white border-2 rounded-full flex items-center justify-center ">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.8199 7.52018V7.52268C2.80587 7.57561 2.78154 7.62525 2.74831 7.66877C2.71507 7.71229 2.67359 7.74883 2.62622 7.77631C2.57886 7.80378 2.52654 7.82165 2.47226 7.8289C2.41799 7.83614 2.36282 7.83261 2.3099 7.81852C1.95074 7.72352 2.01407 7.30935 2.01407 7.30935L2.02907 7.25768C2.02907 7.25768 2.05074 7.18768 2.06824 7.13685C2.28209 6.53725 2.5969 5.97865 2.99907 5.48518C3.74657 4.57352 5.00407 3.66602 6.9999 3.66602C8.99574 3.66602 10.2532 4.57352 11.0016 5.48518C11.4037 5.97865 11.7186 6.53725 11.9324 7.13685C11.9503 7.18838 11.967 7.24034 11.9824 7.29268L11.9849 7.30352V7.30685L11.9857 7.30852C12.0122 7.41457 11.9959 7.52676 11.9404 7.62092C11.8848 7.71507 11.7945 7.78363 11.689 7.81184C11.5834 7.84004 11.4709 7.82562 11.3758 7.77169C11.2808 7.71775 11.2107 7.62863 11.1807 7.52351L11.1799 7.52018L11.1732 7.49935C11.126 7.35184 11.0703 7.20716 11.0066 7.06602C10.8367 6.68833 10.6182 6.33449 10.3566 6.01352C9.73824 5.25935 8.70324 4.49935 6.9999 4.49935C5.29657 4.49935 4.2624 5.25935 3.64324 6.01352C3.30365 6.43058 3.03737 6.90229 2.85574 7.40852C2.84544 7.43861 2.83572 7.46889 2.82657 7.49935L2.8199 7.52018ZM6.9999 6.16602C6.44737 6.16602 5.91747 6.38551 5.52676 6.77621C5.13606 7.16691 4.91657 7.69681 4.91657 8.24935C4.91657 8.80188 5.13606 9.33179 5.52676 9.72249C5.91747 10.1132 6.44737 10.3327 6.9999 10.3327C7.55244 10.3327 8.08234 10.1132 8.47304 9.72249C8.86374 9.33179 9.08324 8.80188 9.08324 8.24935C9.08324 7.69681 8.86374 7.16691 8.47304 6.77621C8.08234 6.38551 7.55244 6.16602 6.9999 6.16602ZM5.7499 8.24935C5.7499 7.91783 5.8816 7.59989 6.11602 7.36546C6.35044 7.13104 6.66838 6.99935 6.9999 6.99935C7.33142 6.99935 7.64937 7.13104 7.88379 7.36546C8.11821 7.59989 8.2499 7.91783 8.2499 8.24935C8.2499 8.58087 8.11821 8.89881 7.88379 9.13323C7.64937 9.36765 7.33142 9.49935 6.9999 9.49935C6.66838 9.49935 6.35044 9.36765 6.11602 9.13323C5.8816 8.89881 5.7499 8.58087 5.7499 8.24935Z"
                        fill="#1455ac"
                      ></path>
                    </svg>
                  </button>
                </Link>
              </div>

              {/* টাইটেল */}
              <h3 className="text-base font-semibold text-slate-800 mt-4">
                {dataload.accessories_name}
              </h3>
              {/* <p className="text-gray-600 text-sm">
              Price: {dataload.price} BDT
            </p> */}
              <div className="text-center mt-3">
                <span className="line-through text-gray-500 mr-2">
                  {dataload.discount_price}
                </span>
                <span className="text-md font-bold text-black">
                  {dataload.price}
                </span>
              </div>

              {/* বাটন */}
              <div className="mt-auto">
                <button
                  onClick={() => setSelectedItem(dataload)}
                  className="mt-3  px-6 py-1 bg-blue-600 bg-transparent border-2 border-cyan-500 text-black hover:text-white rounded-lg hover:bg-blue-700"
                >
                  <div className="flex items-center gap-1">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 22.453 20.345"
                        class="text-primary group-hover:text-white text-lg transition delay-150 duration-300 ease-in-out"
                      >
                        <g transform="translate(-.25 -.25)">
                          <circle
                            data-name="Ellipse 51"
                            cx="1.75"
                            cy="1.75"
                            r="1.75"
                            transform="translate(7.731 17.095)"
                            fill="currentColor"
                          ></circle>
                          <circle
                            data-name="Ellipse 52"
                            cx="1.75"
                            cy="1.75"
                            r="1.75"
                            transform="translate(16.309 17.095)"
                            fill="currentColor"
                          ></circle>
                          <path
                            data-name="Path 2189"
                            d="M1 1h3.846l2.578 12.752a1.919 1.919 0 0 0 1.923 1.533h9.347a1.919 1.919 0 0 0 1.923-1.533l1.336-9.208H6.281"
                            fill="rgba(0,0,0,0)"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div>Buy Now</div>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeComponentsAccessories;
