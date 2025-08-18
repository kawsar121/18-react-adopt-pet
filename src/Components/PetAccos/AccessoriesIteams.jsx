import React from "react";
import { Link, useLoaderData } from "react-router-dom";


const AccessoriesIteams = () => {
  const items = useLoaderData();
  console.log(items);
  return (
    <div className="justify-center">
      <div>
        <h1 className="text-2xl mb-8 font-semibold">
          Pet Food And Accessories
        </h1>
        <img
          src="https://amarpet.com/_next/image?url=https%3A%2F%2Famarpet-space.sgp1.digitaloceanspaces.com%2Fproduction%2Flanding-page%2Fdiscount_banner&w=1920&q=50"
          alt=""
        />
        <div className="flex justify-between mt-10">
          <h2 className="text-2xl">Food & Accessories</h2>
          <Link className="text-pink-600 font-medium">View All▶ </Link>
        </div>
      </div>









      {/* Card iteam */}
        <div className="grid justify-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-20 mt-10">
        {/* First */}
        <div className="max-w-xs hover:shadow-lg  text-white rounded-xl relative group p-4 w-52">
          <span className="absolute top-2 left-2 z-20 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
            -$233
          </span>

          <div className="">
            <img
            src="https://amarpet.com/_next/image?url=https%3A%2F%2Famarpet.blob.core.windows.net%2Fproduction%2F36ac8e558ac7690b6f44e2cb5ef93322%2FSelf-cleaning-automatique-brush.png&w=640&q=75"
            alt="cat"
            className="rounded-xl mx-auto w-48 transform scale-110 group-hover:scale-100 transition-transform duration-500"
          />
          </div>

          {/* Button icon */}
          <div className="absolute top-8 right-[7px] flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
            <button className="w-9 h-9 bg-white border-2 rounded-full flex items-center justify-center">
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.375 11.0489L12.3334 1.24894C12.3334 0.632819 11.8561 0.133789 11.2668 0.133789H7.0001H2.73343C2.1441 0.133789 1.66676 0.632819 1.66676 1.24894L0.625164 11.0489C0.609698 11.1253 0.600098 11.2039 0.600098 11.2853C0.600098 11.9014 1.07743 12.4005 1.66676 12.4005H7.0001H12.3334C12.9228 12.4005 13.4001 11.9014 13.4001 11.2853C13.4001 11.2039 13.3905 11.1253 13.375 11.0489ZM9.66676 2.87037V3.47924C9.66676 5.01648 8.4705 6.26712 7.0001 6.26712C5.5297 6.26712 4.33343 5.01648 4.33343 3.47924V2.87037C4.02356 2.75551 3.8001 2.44884 3.8001 2.0853C3.8001 1.62363 4.1585 1.24894 4.6001 1.24894C5.0417 1.24894 5.4001 1.62363 5.4001 2.0853V3.47924C5.4001 4.40147 6.11796 5.15197 7.0001 5.15197C7.88223 5.15197 8.6001 4.40147 8.6001 3.47924V2.0853C8.6001 1.62363 8.9585 1.24894 9.4001 1.24894C9.8417 1.24894 10.2001 1.62363 10.2001 2.0853C10.2001 2.44884 9.97663 2.75551 9.66676 2.87037Z"
                  fill="#1455ac"
                ></path>
              </svg>
            </button>
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
            <button
              className=""
              onClick={() => document.getElementById("my_modal_3").showModal()}
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
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className=" bg-white p-10">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn bg-gray-300 btn-sm btn-circle btn-ghost absolute right-[20rem] top-10 ">
                    ✕
                  </button>
                </form>
                <div className="flex gap-24 justify-center my-32">
                  {/* card */}
                  <div className="max-w-xs  text-white rounded-xl relative group p-4 w-52">
                    <span className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
                      -$233
                    </span>

                    <img
                      src="data:image/jpeg;base64,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"
                      alt="Charger"
                      className="rounded-xl mx-auto w-48"
                    />

                    <div className="absolute top-3 right-[-14px] flex flex-col gap-2 opacity-100 transition duration-300">
                      <button className="w-9 h-9 bg-white border-2 rounded-full flex items-center justify-center">
                        <svg
                          width="14"
                          height="12"
                          viewBox="0 0 14 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.375 11.0489L12.3334 1.24894C12.3334 0.632819 11.8561 0.133789 11.2668 0.133789H7.0001H2.73343C2.1441 0.133789 1.66676 0.632819 1.66676 1.24894L0.625164 11.0489C0.609698 11.1253 0.600098 11.2039 0.600098 11.2853C0.600098 11.9014 1.07743 12.4005 1.66676 12.4005H7.0001H12.3334C12.9228 12.4005 13.4001 11.9014 13.4001 11.2853C13.4001 11.2039 13.3905 11.1253 13.375 11.0489ZM9.66676 2.87037V3.47924C9.66676 5.01648 8.4705 6.26712 7.0001 6.26712C5.5297 6.26712 4.33343 5.01648 4.33343 3.47924V2.87037C4.02356 2.75551 3.8001 2.44884 3.8001 2.0853C3.8001 1.62363 4.1585 1.24894 4.6001 1.24894C5.0417 1.24894 5.4001 1.62363 5.4001 2.0853V3.47924C5.4001 4.40147 6.11796 5.15197 7.0001 5.15197C7.88223 5.15197 8.6001 4.40147 8.6001 3.47924V2.0853C8.6001 1.62363 8.9585 1.24894 9.4001 1.24894C9.8417 1.24894 10.2001 1.62363 10.2001 2.0853C10.2001 2.44884 9.97663 2.75551 9.66676 2.87037Z"
                            fill="#1455ac"
                          ></path>
                        </svg>
                      </button>
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
                      <button
                        to="/viewPage"
                        className="w-9 h-9 bg-white border-2 rounded-full flex items-center justify-center "
                      >
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
                    </div>
                  </div>

                  {/* side */}
                  <div>
                    <h2 className="text-black text-xl">
                      15 IN 1 MAKEUP COMBO SET WITH FULL <br /> MAKEUP COVERAGE
                      set
                    </h2>
                    <button className="bg-green-100 text-green-400 px-2 rounded-2xl mt-3">
                      <div className="flex items-center gap-2">
                        <div>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.3206 1.88726C9.08531 1.08527 7.60142 0.757665 6.1433 0.96503C4.68517 1.17239 3.35145 1.9007 2.38873 3.01528C1.42601 4.12987 0.899415 5.55533 0.906317 7.02811C0.913219 8.50089 1.45315 9.92136 2.42627 11.0269C3.39939 12.1324 4.73989 12.8482 6.19989 13.0418C7.65989 13.2355 9.14065 12.894 10.3684 12.0805C11.5961 11.267 12.4877 10.0364 12.8784 8.61638C13.269 7.19635 13.1323 5.68288 12.4935 4.35584"
                              stroke="#43C6B7"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M3.95312 6.23726L6.23884 8.52297L12.3341 2.42773"
                              stroke="#43C6B7"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                        <div>In Stock</div>
                      </div>
                    </button>
                    <div className=" mt-4 items-center flex gap-2">
                      <span className="line-through text-gray-500 mr-2">
                        $118
                      </span>
                      <span className="text-2xl font-bold text-blue-800">
                        $115
                      </span>
                      <button className="bg-red-600 text-sm font-bold text-white px-2 rounded-sm">
                        $0 SAVE
                      </button>
                      <p className="text-xs">(TAX INCLUDED)</p>
                    </div>
                    <div className="mt-6 flex gap-3">
                      <button className="bg-orange-300 px-8 py-3">
                        Buy Now
                      </button>
                      <button className="bg-blue-300 px-8 py-3">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>

          <div className="flex justify-center mt-4 text-gray-400 text-sm">
            <div className="rating rating-xs">
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>{" "}
            (0)
          </div>

          <div className="text-center mt-1 text-gray-500 text-sm">
            Tech Shop
          </div>

          <div className="text-center text-black font-semibold truncate">
            Yuzu Fast Charger 27W...
          </div>

          <div className="text-center mt-1">
            <span className="line-through text-gray-500 mr-2">$118</span>
            <span className="text-lg font-bold text-black">$115</span>
          </div>
        </div>
        {/* Second */}
        <div className="max-w-xs hover:shadow-lg  text-white rounded-xl relative group p-4 w-52">
          <span className="absolute top-2 left-2 z-20 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
            -$233
          </span>

          <div className="">
            <img
            src="https://amarpet.com/_next/image?url=https%3A%2F%2Famarpet.blob.core.windows.net%2Fproduction%2F7d62a275027741d98073d42b8f735c68%2F1.png&w=640&q=75"
            alt="cat"
            className="rounded-xl mx-auto w-48 transform scale-110 group-hover:scale-100 transition-transform duration-500"
          />
          </div>

          {/* Button icon */}
          <div className="absolute top-8 right-[7px] flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
            <button className="w-9 h-9 bg-white border-2 rounded-full flex items-center justify-center">
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.375 11.0489L12.3334 1.24894C12.3334 0.632819 11.8561 0.133789 11.2668 0.133789H7.0001H2.73343C2.1441 0.133789 1.66676 0.632819 1.66676 1.24894L0.625164 11.0489C0.609698 11.1253 0.600098 11.2039 0.600098 11.2853C0.600098 11.9014 1.07743 12.4005 1.66676 12.4005H7.0001H12.3334C12.9228 12.4005 13.4001 11.9014 13.4001 11.2853C13.4001 11.2039 13.3905 11.1253 13.375 11.0489ZM9.66676 2.87037V3.47924C9.66676 5.01648 8.4705 6.26712 7.0001 6.26712C5.5297 6.26712 4.33343 5.01648 4.33343 3.47924V2.87037C4.02356 2.75551 3.8001 2.44884 3.8001 2.0853C3.8001 1.62363 4.1585 1.24894 4.6001 1.24894C5.0417 1.24894 5.4001 1.62363 5.4001 2.0853V3.47924C5.4001 4.40147 6.11796 5.15197 7.0001 5.15197C7.88223 5.15197 8.6001 4.40147 8.6001 3.47924V2.0853C8.6001 1.62363 8.9585 1.24894 9.4001 1.24894C9.8417 1.24894 10.2001 1.62363 10.2001 2.0853C10.2001 2.44884 9.97663 2.75551 9.66676 2.87037Z"
                  fill="#1455ac"
                ></path>
              </svg>
            </button>
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
            <button
              className=""
              onClick={() => document.getElementById("my_modal_3").showModal()}
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
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className=" bg-white p-10">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn bg-gray-300 btn-sm btn-circle btn-ghost absolute right-[20rem] top-10 ">
                    ✕
                  </button>
                </form>
                <div className="flex gap-24 justify-center my-32">
                  {/* card */}
                  <div className="max-w-xs  text-white rounded-xl relative group p-4 w-52">
                    <span className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
                      -$233
                    </span>

                    <img
                      src="data:image/jpeg;base64,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"
                      alt="Charger"
                      className="rounded-xl mx-auto w-48"
                    />

                    <div className="absolute top-3 right-[-14px] flex flex-col gap-2 opacity-100 transition duration-300">
                      <button className="w-9 h-9 bg-white border-2 rounded-full flex items-center justify-center">
                        <svg
                          width="14"
                          height="12"
                          viewBox="0 0 14 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.375 11.0489L12.3334 1.24894C12.3334 0.632819 11.8561 0.133789 11.2668 0.133789H7.0001H2.73343C2.1441 0.133789 1.66676 0.632819 1.66676 1.24894L0.625164 11.0489C0.609698 11.1253 0.600098 11.2039 0.600098 11.2853C0.600098 11.9014 1.07743 12.4005 1.66676 12.4005H7.0001H12.3334C12.9228 12.4005 13.4001 11.9014 13.4001 11.2853C13.4001 11.2039 13.3905 11.1253 13.375 11.0489ZM9.66676 2.87037V3.47924C9.66676 5.01648 8.4705 6.26712 7.0001 6.26712C5.5297 6.26712 4.33343 5.01648 4.33343 3.47924V2.87037C4.02356 2.75551 3.8001 2.44884 3.8001 2.0853C3.8001 1.62363 4.1585 1.24894 4.6001 1.24894C5.0417 1.24894 5.4001 1.62363 5.4001 2.0853V3.47924C5.4001 4.40147 6.11796 5.15197 7.0001 5.15197C7.88223 5.15197 8.6001 4.40147 8.6001 3.47924V2.0853C8.6001 1.62363 8.9585 1.24894 9.4001 1.24894C9.8417 1.24894 10.2001 1.62363 10.2001 2.0853C10.2001 2.44884 9.97663 2.75551 9.66676 2.87037Z"
                            fill="#1455ac"
                          ></path>
                        </svg>
                      </button>
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
                      <button
                        to="/viewPage"
                        className="w-9 h-9 bg-white border-2 rounded-full flex items-center justify-center "
                      >
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
                    </div>
                  </div>

                  {/* side */}
                  <div>
                    <h2 className="text-black text-xl">
                      15 IN 1 MAKEUP COMBO SET WITH FULL <br /> MAKEUP COVERAGE
                      set
                    </h2>
                    <button className="bg-green-100 text-green-400 px-2 rounded-2xl mt-3">
                      <div className="flex items-center gap-2">
                        <div>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.3206 1.88726C9.08531 1.08527 7.60142 0.757665 6.1433 0.96503C4.68517 1.17239 3.35145 1.9007 2.38873 3.01528C1.42601 4.12987 0.899415 5.55533 0.906317 7.02811C0.913219 8.50089 1.45315 9.92136 2.42627 11.0269C3.39939 12.1324 4.73989 12.8482 6.19989 13.0418C7.65989 13.2355 9.14065 12.894 10.3684 12.0805C11.5961 11.267 12.4877 10.0364 12.8784 8.61638C13.269 7.19635 13.1323 5.68288 12.4935 4.35584"
                              stroke="#43C6B7"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M3.95312 6.23726L6.23884 8.52297L12.3341 2.42773"
                              stroke="#43C6B7"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                        <div>In Stock</div>
                      </div>
                    </button>
                    <div className=" mt-4 items-center flex gap-2">
                      <span className="line-through text-gray-500 mr-2">
                        $118
                      </span>
                      <span className="text-2xl font-bold text-blue-800">
                        $115
                      </span>
                      <button className="bg-red-600 text-sm font-bold text-white px-2 rounded-sm">
                        $0 SAVE
                      </button>
                      <p className="text-xs">(TAX INCLUDED)</p>
                    </div>
                    <div className="mt-6 flex gap-3">
                      <button className="bg-orange-300 px-8 py-3">
                        Buy Now
                      </button>
                      <button className="bg-blue-300 px-8 py-3">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>

          <div className="flex justify-center mt-4 text-gray-400 text-sm">
            <div className="rating rating-xs">
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>{" "}
            (0)
          </div>

          <div className="text-center mt-1 text-gray-500 text-sm">
            Tech Shop
          </div>

          <div className="text-center text-black font-semibold truncate">
            Yuzu Fast Charger 27W...
          </div>

          <div className="text-center mt-1">
            <span className="line-through text-gray-500 mr-2">$118</span>
            <span className="text-lg font-bold text-black">$115</span>
          </div>
        </div>
        {/* Third */}
        <div className="max-w-xs hover:shadow-lg  text-white rounded-xl relative group p-4 w-52">
          <span className="absolute top-2 left-2 z-20 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
            -$233
          </span>

          <div className="">
            <img
            src="https://amarpet.com/_next/image?url=https%3A%2F%2Famarpet.blob.core.windows.net%2Fproduction%2F1baff70e2669e8376347efd3a874a341%2Fry5YSH94lLEI6pHxDQwiEqVlKoLfnh-metaUGV0LUhhaXItYnJ1c2gucG5n-.png&w=640&q=75"
            alt="cat"
            className="rounded-xl mx-auto w-48 transform scale-110 group-hover:scale-100 transition-transform duration-500"
          />
          </div>

          {/* Button icon */}
          <div className="absolute top-8 right-[7px] flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
            <button className="w-9 h-9 bg-white border-2 rounded-full flex items-center justify-center">
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.375 11.0489L12.3334 1.24894C12.3334 0.632819 11.8561 0.133789 11.2668 0.133789H7.0001H2.73343C2.1441 0.133789 1.66676 0.632819 1.66676 1.24894L0.625164 11.0489C0.609698 11.1253 0.600098 11.2039 0.600098 11.2853C0.600098 11.9014 1.07743 12.4005 1.66676 12.4005H7.0001H12.3334C12.9228 12.4005 13.4001 11.9014 13.4001 11.2853C13.4001 11.2039 13.3905 11.1253 13.375 11.0489ZM9.66676 2.87037V3.47924C9.66676 5.01648 8.4705 6.26712 7.0001 6.26712C5.5297 6.26712 4.33343 5.01648 4.33343 3.47924V2.87037C4.02356 2.75551 3.8001 2.44884 3.8001 2.0853C3.8001 1.62363 4.1585 1.24894 4.6001 1.24894C5.0417 1.24894 5.4001 1.62363 5.4001 2.0853V3.47924C5.4001 4.40147 6.11796 5.15197 7.0001 5.15197C7.88223 5.15197 8.6001 4.40147 8.6001 3.47924V2.0853C8.6001 1.62363 8.9585 1.24894 9.4001 1.24894C9.8417 1.24894 10.2001 1.62363 10.2001 2.0853C10.2001 2.44884 9.97663 2.75551 9.66676 2.87037Z"
                  fill="#1455ac"
                ></path>
              </svg>
            </button>
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
            <button
              className=""
              onClick={() => document.getElementById("my_modal_3").showModal()}
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
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className=" bg-white p-10">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn bg-gray-300 btn-sm btn-circle btn-ghost absolute right-[20rem] top-10 ">
                    ✕
                  </button>
                </form>
                <div className="flex gap-24 justify-center my-32">
                  {/* card */}
                  <div className="max-w-xs  text-white rounded-xl relative group p-4 w-52">
                    <span className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
                      -$233
                    </span>

                    <img
                      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITERUQEhIVEhUVEhEXExcVFxgVFRYVGRUXFhUSFhUYHSggGBomGxYTITEiJSorLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi8lICYvLS8tLS8tNS0tLS0tNS0tLS0tLS0tLS0tLS0tLS0tLSstNS0vLS0uLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYCAwQHAf/EAEcQAAEDAgMEBgQKBgoDAAAAAAEAAgMEERIhMQUGQVETImFxgZEyUpKhBxQVI0JigpOx0VVywdLT4RYzQ0RTVJSisvAkc+L/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAgMEAQX/xAAiEQEAAgIBBAMBAQAAAAAAAAAAAQIDERIhMTJRE0FhInH/2gAMAwEAAhEDEQA/APcUREBERAREQEREBERARFz1dYyO2K+d7WF1yZ13diNuhFGnbUd7AOJtfID819+V2eq/yH5rnOvt3hb0kUUd8rs9V/kPzWMW243C9nauHDUEg8eYK5zr7OFvSTRa6eYPaHDQ39xt+xbFNEREQEREBERAREQEREBERAREQEREBERAREQEREBVjenascUrWPjlkPR3HRsc4C7iMyNNPcrOoHa+xop58UgvhiYB4ueT+xVZvFZi1y6q1Ht6jLndI2aOwbYEvYdXXNmu7vJbflrZ/rTfeS/vLDbWzoYJQG11HSAxt+bqI4nOPWf84C94Nje3Lqrhxs/S+zPuYP4qy9WrdUl8tbP9ab7yX99aIN5IMw2CZ4D3gOHXuA42OJz7nLmuPpY/0xsz7qn/AIin9m7sU7oWOLmTlwLukYGhj8RLsTQ02Dc8rJ1Jmv2n93qgSU7Hta5oJks1ws4ddwsQpJR2wIAyBsbdGvmA7hK8BSK208YY7eUiIikiIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICqG9W+NLRT9HO/C50bHAfVu4X8wfJdm9O1J2OZT0tuld1nOIDsLNBkcrk39kql7wbozV1Q58xc98bIoy5kvQ3GHpLFoYRkZHZ5arPlvWf5aMVJ8pWHYs1DtEvqhEya2CPFIwEjCC7CCRp1z5qWGwKMf3WH7tv5Ktbq7uy0IfFGCRI7pCHyGQg4Ws9PCPVGVvFT4FV6g9r+Szcpjsumv66RselH93i9hv5KpM+EOgpy6mc4sMUszS0NyFpHWAtwtZWV0VTY5NGXP+SpL/g2a8ukcxznSSSyOd8Zkjze8utga2wtcDwXY693NRH29G3YrmT0zJ4ziZIZXNPMGR6lV51syCsp6cR0zsDaeR8fREiQECz74yA43xlX3Z9WJYmStyDmg24g8WntBuPBa8V4mNR9M+SkxO3QiIrVQiIgIiICIiAiIgIiICIiAiIgIiICIiAhKKF3j2m1kboQ7ruab/Uaci9x4ZXsuWtERuXYjc6cNHVNc58x1lddvPAMowBr6IBtzcVzmaWOeZ75IoopHMc25LpjaJjCMFgG5tJvc9wVel2yWgtg7A6R3DO17/RH/AHJRkrgScRdM7jYkN8TqfcsERMztumIhbp944B9KSQ874fDqWWj+kcf+ET3uc78TdVhokPohrO4Z+a1y0z75ueTbL2mi3nhVnxWQ5UW+PeSLiwt7nuHu0XbHtaN4syYxnhiAe3x4+8KjRU8gFw52ZN755jI/gvt3j0mh3aOqf5pOKxyqvOy45I2SGRzH45nvxR3w2LWgXBzBs3+akN3pgHSRcL9Izudk8D7Qv9tUKj2o5hGB5uT6J9Ly4qf2TthnSCS2F4xBzdA4HUW4G4B8FGk8LbdvXdV5RaaSqZI3Gw3HvB5EcCty3MQiIgIiICIiAiIgIiICIiAiIgIiICItVTO2NjpHmzWNLnHkALkoIveTbQp2BrbGV98AOgA9KR/JrQvP3F0pcS44AbyPPpPdz7+Q4D37KmeSplLzk+XCbH+zi1ji8uu7mSFJUWz8ZDWj5tvo/WPF5WS0zktqGutYx13KOZSOkGBrcMfBvPtdzUjs3YhxFjhYjNuWrDp4g5HwPFWuh2Y1o0XTUUt8Lm2DmG4voQcnMNuBHkQ052WmtIrHRntebSiINhAcEqNlNDm5A5OAvpcvjDfeQrBdYSNadQD394P4geSlLlZ1PVDjYjQLa63PMk3J8yVx1OxBZWVtgLBaKyDG3BfqkjH2t4t8cgewlHNqDJsckY7WBN2cCG8D3nXxtwXJJCb2fk76L/wDvzXpM1OCoTaeygQclXfHFllMk1QOydsSQvxEXI/rG+u0fSH1hr2+a9DpahsjGyMOJrgCD2LzOthw6nC5voOOVxy7SFN7l7TwSfFzkyTE6IerIP6yPu+kP5qrHaazxlZlrExyhdkRFpZhERAREQEREBERAREQEREBERAVW38qx0cdPfKRxdL/AOqIY3jxOEK0qgb3vx1Tm8Gtgi9t/SPPs2VeWdVWYo3ZzbMoOkBL2gue7iPRJzeRy1Dfsq10tG+PrMs4ZdQ2HsOH4HXmFx7Ch6oJ9Uebus73lTgco4Y6bTz266fIKxrrgXa4ek1ws4eHEdouDwJWZetZcqfUbXr6N7jURfHabESJYWhs8TeT4xZsgHMWOXFXKFo2rJMInGAAyW6odaxPbcge8Lnc6pvla2Bnq3DrSYveIezrO14Nj7Zgqo+lp5Wyt0NsnNPqvYesx3YQF33QR7X1V9GW6upzIyDhlo4dZwysQbZaqUDlgobam8UcTjEwGeYWvGwizNM5pD1YhnexOI8AUE9jyucgNfzUDDt5tTJ0VM0vjF8dQR8yCPoxXIMzu1vVHM6KL+T56s3qXB7OEIu2mH6zT1qg56v6uQIYFZaKiazPU2tc8uQHAI6h9p7OwtuCXEHFdxuSePYO4WCrUwLHYmZFpbLH+szO3i24+yvQKqO4VO2lDhcPqvHkXBtvKQrPmj7aMM7iYegUk4kjbI3R7WuHcRdbVDbou/8AFaw6sc9nk4ke4hTKvrO42z2jU6ERF1wREQEREBERAREQEREBERAXn28rbTyHnLf2ad9l6CqbvVB84HcDPED3PaGE/wC4qnN2j/VuHyd+zKiNsQdiFi4gEZi4yIy7l0fKEfrH2Xfktew3Xgbw0/AFdZUsXjBl85fQ6+aLG6+3VitXdsboRSSfGKd7qOpGksOV+yRmj29hCgdo7511G4U1TBA+QguZM1zmskYDb+qAJa++EHO2egXoIVZ3h2FFXPaJBdseJoOhJuMeYztdoFuYd2KNvxZj4xO7RuHDQ7Qq9pRte29LA4G4jcekfa7XYprAtbe9hGAcgcY0Vh2XsKKFoaGjK5AAAaCcyQ0cSeJzK7KKlZFG2KNoaxjQ1oGQAAsAF0KSuX0LCWbDwc79UXX26XRxqNVf+zk9kD8Sq/vEBnkQS0HMaWzsTpe4GSs7VXd5znh54B4l7MvZLvJU5uy/D3VarqZItq0wZIRjdACwF1nB0pa4kDLT8F64qxT7rwyVDKx5fjiwhgBs3qnECeebirOmGsxVHLaJmNCIiuVCIiAiIgIiICIiAiIgIiICgt6KLpI3gall29jm5g9+fuU6tNVHiblqMx38vEXHioZK8q6SpOp2rm7dUHNI0xDEByvmR4Eub9lSrlWS74tMbXwG8keWrdXstrcZm3a9T0kXSWJcejIFmDK/MPcDc58BYc7qrDb6XZY+4fY6hrnFrTe2pA6oPq4tL9mq2hfGsAAAAAAsAMgByA4LIBaFLTWTENDWmznZNPL1n+A99hxWVJAGtAAtkAO4aZrnpvnHdJwOTOyPge9x63dh5KRwqO0pjXRgV8WRCwK6iErQyqbiwG7HXNg7LF2tIydzsDccQFuWMkTXDC4BwOoIuPIro3xquSnpqtjeDXGQ9zbtb+Lx9lSNfN0MR6xN/WN8DPpHEcyLXOZJ1z0WndejJBlcLOlNwDq2MaA9trX7SSs2SeU6hdT+a7WSmZZoHj55/tW1EWiI1GmcREXQREQEREBERAREQEREBERAREQQW3dmYxYHDd2KN3qSa27j+N+YCjdkVxbeOQYbGzh6p0uPqn+XK9tkYCCCLg6qB2tswEh18Lxkx/O+QY/v07fcs+SkxPKF+O/TjLqPu4FcO1HFwEIyx36Q8REPSA7XEhvc4ngtVNVuYejeMJ5HQ9rXf98Vvhja5xeCbuwkh2TgAMmW5ZuPe4rtckT3dmk1ncOunyzX2WtDSQQbDU5ZZE2troPeF8sQo+sdlJ9n/iVZKNI3PVIxzYr5WINiDbkDw7CFrqosbS29tCCNWuBu1w7iAVrpnG7hcmzhmbX9FpzsF0Bp7u9No2jr0aKWfE3MWcCWvHJw1HdoRzBB4rdJIGjE7wHEnkuKrqo4iZNS7C0+rcXsbak52yzt3ZQVdXGU9ZxazQ8HOvkG2+iDy1PuVd8uuyyuP26C74zIS4/MsN3EaPI0Y3m0G2mptyF7hQw2bcixNsvVA0ao/Y2zSA1z24QPQZy+s7t7OH4TK7iprrKGS++kCIiuVCIiAiIgIiICIiAiIgIiICIiAiIgLm2lSCWJ8R+k0jPgeB8DYrpRBSqSSUxgOHStt6Lj84wjIgOOpBuM8+1Y/KLWOLLm7QLseNL6Z8PBSoaGVEsRyxESs7n3x/7w8/aC4W7KimqqjpWNfhMGC4zbeIXIOo8F50xNZ03biY2yi29GMi7D45eTljNtGJzg/pALZXFr2sdbO1zy7zzWFZufC8gNkljyJyfj5a9ICbZ81EzfB48+jVe1E0/g4KUWl2OPtKQbbhhZh6VvDi0Z2zzJJ7uxRlfvezRl3HsBeffZvuK0N+Dh30qv2YgD/wAiuqk3AgwhzpJZLgXBcGt8mALk2d1XvtEsqKioJc1tgDYucbkZXw31GRGQAUpu5sgmrixkvLMUh5DDa1hzxOb7137J2XHA6eGNoawGF1u1zXAnP9UKU3UYHSTzcA5sTfsjE8+0+32V3HE2vCOSYrWdLIiIt7CIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIIHejZMsvRywFokjLh1jYFjtRfncN96qu2ZpYJi+eojpi+OPITRNxBoIxkSW43GXJekKob37n09fM10xkBjjAb0byzJznE3troqMtK+Ur8V57IXY9VNUveYa0PbG1gJa6N+ZLiQTGTbIN481MtpKsf258cX7yx3Z3agoXSMie8h7YnHpH4jcGQXBPDMeSny9vrN8wskx16L+f4g3U1X/j+4/mqzU71SQvdA+rha6NxFnhl7cL2fiHPNvFegGRnrN8wqXV7h0lZPPUPfLd01j0cpa3KNg0HFcjv1d5R6NjtrKuGWaGSB+OUNc8OIAwMbYABp9Y6q77u7ONPTRwuILgCXkaF7iXOI7Lkri3N2NFSRSU8OLCJieu4vdd0cZN3FT624qREcoZct5mdCIiuVCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAqzvLtgU8zb6Pj/4uP7ysy8/+E2KV0kPR0stRZkl+icGlt3NtiBa4m9vcVVnj+JW4dc42i9u7fp5Xtx00s7mtNjGJThbfQ9H28+1R3x6l/wAhU+VV+a5tm7TqKZ7/AJmWmxtblIbl2EnMdVumL3qQO91R65WHcw3cY+nN8Zpf0fU+VV+am9i7zwRRmOOJ0ID3XY/GHBxsSTj62YI8LKMO90/rlQcrqmeWSVtJPU4nDrxvDRcMaMObDoAE6yaiO71zc+u6dk0vAz2HhFGFPqofBjHI2lkEsD6d3xh9mPcHOt0cfWJaB28OCt69DFGqQ8/J5SIiKaAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgKpb77JfO+LA4tIbJe3EXYraq/vdVuhbHK18TDic0mUlrSCL2BHG7R71VmjdJWYp1eFEqd2qthBZAyruCD0krosOlrENde+fkFpdset/RkH+qf/DUhtLelrXMfN0M4s8AQvJIJwm5BFvo6rjdvnTf5d3mFiis+m3l+tXyLW/o2H/Vv/hL7T7q1RBcWCAl18DXmQAWAviwi+h4LE720h1pne2f2FdezN679IIeghZjBAmkdi9BgyFtOrzSaz6It+rh8H9E+GCWN+bhUOPgYolaFXNyat0scr3PjeTNrESWC0bBa545DzVjW7F4Qw5PORERWICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAo/bmyWVMfRPyAcHA2vmLjTuJUgi5MbInSnO3Biys8ZHizLT9ZfDuDH67fu//AKVyRR+OvpP5Le1M/oBH/iN+7H7yzi3BhF7vBvyYB+1XBE+Ovo+S3tHbD2SymjMbDcFxdpbMgD9ikURSiNITOxERdBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf//Z"
                      alt="Charger"
                      className="rounded-xl mx-auto w-48"
                    />

                    <div className="absolute top-3 right-[-14px] flex flex-col gap-2 opacity-100 transition duration-300">
                      <button className="w-9 h-9 bg-white border-2 rounded-full flex items-center justify-center">
                        <svg
                          width="14"
                          height="12"
                          viewBox="0 0 14 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.375 11.0489L12.3334 1.24894C12.3334 0.632819 11.8561 0.133789 11.2668 0.133789H7.0001H2.73343C2.1441 0.133789 1.66676 0.632819 1.66676 1.24894L0.625164 11.0489C0.609698 11.1253 0.600098 11.2039 0.600098 11.2853C0.600098 11.9014 1.07743 12.4005 1.66676 12.4005H7.0001H12.3334C12.9228 12.4005 13.4001 11.9014 13.4001 11.2853C13.4001 11.2039 13.3905 11.1253 13.375 11.0489ZM9.66676 2.87037V3.47924C9.66676 5.01648 8.4705 6.26712 7.0001 6.26712C5.5297 6.26712 4.33343 5.01648 4.33343 3.47924V2.87037C4.02356 2.75551 3.8001 2.44884 3.8001 2.0853C3.8001 1.62363 4.1585 1.24894 4.6001 1.24894C5.0417 1.24894 5.4001 1.62363 5.4001 2.0853V3.47924C5.4001 4.40147 6.11796 5.15197 7.0001 5.15197C7.88223 5.15197 8.6001 4.40147 8.6001 3.47924V2.0853C8.6001 1.62363 8.9585 1.24894 9.4001 1.24894C9.8417 1.24894 10.2001 1.62363 10.2001 2.0853C10.2001 2.44884 9.97663 2.75551 9.66676 2.87037Z"
                            fill="#1455ac"
                          ></path>
                        </svg>
                      </button>
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
                      <button
                        to="/viewPage"
                        className="w-9 h-9 bg-white border-2 rounded-full flex items-center justify-center "
                      >
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
                    </div>
                  </div>

                  {/* side */}
                  <div>
                    <h2 className="text-black text-xl">
                      15 IN 1 MAKEUP COMBO SET WITH FULL <br /> MAKEUP COVERAGE
                      set
                    </h2>
                    <button className="bg-green-100 text-green-400 px-2 rounded-2xl mt-3">
                      <div className="flex items-center gap-2">
                        <div>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.3206 1.88726C9.08531 1.08527 7.60142 0.757665 6.1433 0.96503C4.68517 1.17239 3.35145 1.9007 2.38873 3.01528C1.42601 4.12987 0.899415 5.55533 0.906317 7.02811C0.913219 8.50089 1.45315 9.92136 2.42627 11.0269C3.39939 12.1324 4.73989 12.8482 6.19989 13.0418C7.65989 13.2355 9.14065 12.894 10.3684 12.0805C11.5961 11.267 12.4877 10.0364 12.8784 8.61638C13.269 7.19635 13.1323 5.68288 12.4935 4.35584"
                              stroke="#43C6B7"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M3.95312 6.23726L6.23884 8.52297L12.3341 2.42773"
                              stroke="#43C6B7"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                        <div>In Stock</div>
                      </div>
                    </button>
                    <div className=" mt-4 items-center flex gap-2">
                      <span className="line-through text-gray-500 mr-2">
                        $118
                      </span>
                      <span className="text-2xl font-bold text-blue-800">
                        $115
                      </span>
                      <button className="bg-red-600 text-sm font-bold text-white px-2 rounded-sm">
                        $0 SAVE
                      </button>
                      <p className="text-xs">(TAX INCLUDED)</p>
                    </div>
                    <div className="mt-6 flex gap-3">
                      <button className="bg-orange-300 px-8 py-3">
                        Buy Now
                      </button>
                      <button className="bg-blue-300 px-8 py-3">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>

          <div className="flex justify-center mt-4 text-gray-400 text-sm">
            <div className="rating rating-xs">
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>{" "}
            (0)
          </div>

          <div className="text-center mt-1 text-gray-500 text-sm">
            Tech Shop
          </div>

          <div className="text-center text-black font-semibold truncate">
            Yuzu Fast Charger 27W...
          </div>

          <div className="text-center mt-1">
            <span className="line-through text-gray-500 mr-2">$118</span>
            <span className="text-lg font-bold text-black">$115</span>
          </div>
        </div>
        {/* Fourth */}
        <div className="max-w-xs hover:shadow-lg  text-white rounded-xl relative group p-4 w-52">
          <span className="absolute top-2 left-2 z-20 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
            -$233
          </span>

          <div className="">
            <img
            src="https://amarpet.com/_next/image?url=https%3A%2F%2Famarpet.blob.core.windows.net%2Fproduction%2F63cb524a9f51b7858733e1108bf556fa%2FCat-Self-Grooming-Soft-Face-Scratchers-Brush-Massage-Comb.png&w=640&q=75"
            alt="cat"
            className="rounded-xl mx-auto w-48 transform scale-110 group-hover:scale-100 transition-transform duration-500"
          />
          </div>

          {/* Button icon */}
          <div className="absolute top-8 right-[7px] flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
            <button className="w-9 h-9 bg-white border-2 rounded-full flex items-center justify-center">
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.375 11.0489L12.3334 1.24894C12.3334 0.632819 11.8561 0.133789 11.2668 0.133789H7.0001H2.73343C2.1441 0.133789 1.66676 0.632819 1.66676 1.24894L0.625164 11.0489C0.609698 11.1253 0.600098 11.2039 0.600098 11.2853C0.600098 11.9014 1.07743 12.4005 1.66676 12.4005H7.0001H12.3334C12.9228 12.4005 13.4001 11.9014 13.4001 11.2853C13.4001 11.2039 13.3905 11.1253 13.375 11.0489ZM9.66676 2.87037V3.47924C9.66676 5.01648 8.4705 6.26712 7.0001 6.26712C5.5297 6.26712 4.33343 5.01648 4.33343 3.47924V2.87037C4.02356 2.75551 3.8001 2.44884 3.8001 2.0853C3.8001 1.62363 4.1585 1.24894 4.6001 1.24894C5.0417 1.24894 5.4001 1.62363 5.4001 2.0853V3.47924C5.4001 4.40147 6.11796 5.15197 7.0001 5.15197C7.88223 5.15197 8.6001 4.40147 8.6001 3.47924V2.0853C8.6001 1.62363 8.9585 1.24894 9.4001 1.24894C9.8417 1.24894 10.2001 1.62363 10.2001 2.0853C10.2001 2.44884 9.97663 2.75551 9.66676 2.87037Z"
                  fill="#1455ac"
                ></path>
              </svg>
            </button>
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
            <button
              className=""
              onClick={() => document.getElementById("my_modal_3").showModal()}
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
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className=" bg-white p-10">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn bg-gray-300 btn-sm btn-circle btn-ghost absolute right-[20rem] top-10 ">
                    ✕
                  </button>
                </form>
                <div className="flex gap-24 justify-center my-32">
                  {/* card */}
                  <div className="max-w-xs  text-white rounded-xl relative group p-4 w-52">
                    <span className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
                      -$233
                    </span>

                    <img
                      src="data:image/jpeg;base64,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"
                      alt="Charger"
                      className="rounded-xl mx-auto w-48"
                    />

                    <div className="absolute top-3 right-[-14px] flex flex-col gap-2 opacity-100 transition duration-300">
                      <button className="w-9 h-9 bg-white border-2 rounded-full flex items-center justify-center">
                        <svg
                          width="14"
                          height="12"
                          viewBox="0 0 14 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.375 11.0489L12.3334 1.24894C12.3334 0.632819 11.8561 0.133789 11.2668 0.133789H7.0001H2.73343C2.1441 0.133789 1.66676 0.632819 1.66676 1.24894L0.625164 11.0489C0.609698 11.1253 0.600098 11.2039 0.600098 11.2853C0.600098 11.9014 1.07743 12.4005 1.66676 12.4005H7.0001H12.3334C12.9228 12.4005 13.4001 11.9014 13.4001 11.2853C13.4001 11.2039 13.3905 11.1253 13.375 11.0489ZM9.66676 2.87037V3.47924C9.66676 5.01648 8.4705 6.26712 7.0001 6.26712C5.5297 6.26712 4.33343 5.01648 4.33343 3.47924V2.87037C4.02356 2.75551 3.8001 2.44884 3.8001 2.0853C3.8001 1.62363 4.1585 1.24894 4.6001 1.24894C5.0417 1.24894 5.4001 1.62363 5.4001 2.0853V3.47924C5.4001 4.40147 6.11796 5.15197 7.0001 5.15197C7.88223 5.15197 8.6001 4.40147 8.6001 3.47924V2.0853C8.6001 1.62363 8.9585 1.24894 9.4001 1.24894C9.8417 1.24894 10.2001 1.62363 10.2001 2.0853C10.2001 2.44884 9.97663 2.75551 9.66676 2.87037Z"
                            fill="#1455ac"
                          ></path>
                        </svg>
                      </button>
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
                      <button
                        to="/viewPage"
                        className="w-9 h-9 bg-white border-2 rounded-full flex items-center justify-center "
                      >
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
                    </div>
                  </div>

                  {/* side */}
                  <div>
                    <h2 className="text-black text-xl">
                      15 IN 1 MAKEUP COMBO SET WITH FULL <br /> MAKEUP COVERAGE
                      set
                    </h2>
                    <button className="bg-green-100 text-green-400 px-2 rounded-2xl mt-3">
                      <div className="flex items-center gap-2">
                        <div>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.3206 1.88726C9.08531 1.08527 7.60142 0.757665 6.1433 0.96503C4.68517 1.17239 3.35145 1.9007 2.38873 3.01528C1.42601 4.12987 0.899415 5.55533 0.906317 7.02811C0.913219 8.50089 1.45315 9.92136 2.42627 11.0269C3.39939 12.1324 4.73989 12.8482 6.19989 13.0418C7.65989 13.2355 9.14065 12.894 10.3684 12.0805C11.5961 11.267 12.4877 10.0364 12.8784 8.61638C13.269 7.19635 13.1323 5.68288 12.4935 4.35584"
                              stroke="#43C6B7"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M3.95312 6.23726L6.23884 8.52297L12.3341 2.42773"
                              stroke="#43C6B7"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                        <div>In Stock</div>
                      </div>
                    </button>
                    <div className=" mt-4 items-center flex gap-2">
                      <span className="line-through text-gray-500 mr-2">
                        $118
                      </span>
                      <span className="text-2xl font-bold text-blue-800">
                        $115
                      </span>
                      <button className="bg-red-600 text-sm font-bold text-white px-2 rounded-sm">
                        $0 SAVE
                      </button>
                      <p className="text-xs">(TAX INCLUDED)</p>
                    </div>
                    <div className="mt-6 flex gap-3">
                      <button className="bg-orange-300 px-8 py-3">
                        Buy Now
                      </button>
                      <button className="bg-blue-300 px-8 py-3">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>

          <div className="flex justify-center mt-4 text-gray-400 text-sm">
            <div className="rating rating-xs">
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>{" "}
            (0)
          </div>

          <div className="text-center mt-1 text-gray-500 text-sm">
            Tech Shop
          </div>

          <div className="text-center text-black font-semibold truncate">
            Yuzu Fast Charger 27W...
          </div>

          <div className="text-center mt-1">
            <span className="line-through text-gray-500 mr-2">$118</span>
            <span className="text-lg font-bold text-black">$115</span>
          </div>
        </div>
        {/* Five */}
        <div className="max-w-xs hover:shadow-lg  text-white rounded-xl relative group p-4 w-52">
          <span className="absolute top-2 left-2 z-20 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
            -$233
          </span>

          <div className="">
            <img
            src="https://amarpet.com/_next/image?url=https%3A%2F%2Famarpet.blob.core.windows.net%2Fproduction%2Fb534ba68236ba543ae44b22bd110a1d6%2FNzPdSRgDNNaRO74Xri8G1lT5MGvaVP-metaU21hcnRIZWFydC1BZHVsdC1Eb2ctRm9vZC1DaGlja2VuLSYtRWdnLTNrZy5wbmc%3D-.png&w=640&q=75"
            alt="cat"
            className="rounded-xl mx-auto w-48 transform scale-110 group-hover:scale-100 transition-transform duration-500"
          />
          </div>

          {/* Button icon */}
          <div className="absolute top-8 right-[7px] flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
            <button className="w-9 h-9 bg-white border-2 rounded-full flex items-center justify-center">
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.375 11.0489L12.3334 1.24894C12.3334 0.632819 11.8561 0.133789 11.2668 0.133789H7.0001H2.73343C2.1441 0.133789 1.66676 0.632819 1.66676 1.24894L0.625164 11.0489C0.609698 11.1253 0.600098 11.2039 0.600098 11.2853C0.600098 11.9014 1.07743 12.4005 1.66676 12.4005H7.0001H12.3334C12.9228 12.4005 13.4001 11.9014 13.4001 11.2853C13.4001 11.2039 13.3905 11.1253 13.375 11.0489ZM9.66676 2.87037V3.47924C9.66676 5.01648 8.4705 6.26712 7.0001 6.26712C5.5297 6.26712 4.33343 5.01648 4.33343 3.47924V2.87037C4.02356 2.75551 3.8001 2.44884 3.8001 2.0853C3.8001 1.62363 4.1585 1.24894 4.6001 1.24894C5.0417 1.24894 5.4001 1.62363 5.4001 2.0853V3.47924C5.4001 4.40147 6.11796 5.15197 7.0001 5.15197C7.88223 5.15197 8.6001 4.40147 8.6001 3.47924V2.0853C8.6001 1.62363 8.9585 1.24894 9.4001 1.24894C9.8417 1.24894 10.2001 1.62363 10.2001 2.0853C10.2001 2.44884 9.97663 2.75551 9.66676 2.87037Z"
                  fill="#1455ac"
                ></path>
              </svg>
            </button>
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
            <button
              className=""
              onClick={() => document.getElementById("my_modal_3").showModal()}
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
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className=" bg-white p-10">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn bg-gray-300 btn-sm btn-circle btn-ghost absolute right-[20rem] top-10 ">
                    ✕
                  </button>
                </form>
                <div className="flex gap-24 justify-center my-32">
                  {/* card */}
                  <div className="max-w-xs  text-white rounded-xl relative group p-4 w-52">
                    <span className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
                      -$233
                    </span>

                    <img
                      src="data:image/jpeg;base64,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"
                      alt="Charger"
                      className="rounded-xl mx-auto w-48"
                    />

                    <div className="absolute top-3 right-[-14px] flex flex-col gap-2 opacity-100 transition duration-300">
                      <button className="w-9 h-9 bg-white border-2 rounded-full flex items-center justify-center">
                        <svg
                          width="14"
                          height="12"
                          viewBox="0 0 14 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.375 11.0489L12.3334 1.24894C12.3334 0.632819 11.8561 0.133789 11.2668 0.133789H7.0001H2.73343C2.1441 0.133789 1.66676 0.632819 1.66676 1.24894L0.625164 11.0489C0.609698 11.1253 0.600098 11.2039 0.600098 11.2853C0.600098 11.9014 1.07743 12.4005 1.66676 12.4005H7.0001H12.3334C12.9228 12.4005 13.4001 11.9014 13.4001 11.2853C13.4001 11.2039 13.3905 11.1253 13.375 11.0489ZM9.66676 2.87037V3.47924C9.66676 5.01648 8.4705 6.26712 7.0001 6.26712C5.5297 6.26712 4.33343 5.01648 4.33343 3.47924V2.87037C4.02356 2.75551 3.8001 2.44884 3.8001 2.0853C3.8001 1.62363 4.1585 1.24894 4.6001 1.24894C5.0417 1.24894 5.4001 1.62363 5.4001 2.0853V3.47924C5.4001 4.40147 6.11796 5.15197 7.0001 5.15197C7.88223 5.15197 8.6001 4.40147 8.6001 3.47924V2.0853C8.6001 1.62363 8.9585 1.24894 9.4001 1.24894C9.8417 1.24894 10.2001 1.62363 10.2001 2.0853C10.2001 2.44884 9.97663 2.75551 9.66676 2.87037Z"
                            fill="#1455ac"
                          ></path>
                        </svg>
                      </button>
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
                      <button
                        to="/viewPage"
                        className="w-9 h-9 bg-white border-2 rounded-full flex items-center justify-center "
                      >
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
                    </div>
                  </div>

                  {/* side */}
                  <div>
                    <h2 className="text-black text-xl">
                      15 IN 1 MAKEUP COMBO SET WITH FULL <br /> MAKEUP COVERAGE
                      set
                    </h2>
                    <button className="bg-green-100 text-green-400 px-2 rounded-2xl mt-3">
                      <div className="flex items-center gap-2">
                        <div>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.3206 1.88726C9.08531 1.08527 7.60142 0.757665 6.1433 0.96503C4.68517 1.17239 3.35145 1.9007 2.38873 3.01528C1.42601 4.12987 0.899415 5.55533 0.906317 7.02811C0.913219 8.50089 1.45315 9.92136 2.42627 11.0269C3.39939 12.1324 4.73989 12.8482 6.19989 13.0418C7.65989 13.2355 9.14065 12.894 10.3684 12.0805C11.5961 11.267 12.4877 10.0364 12.8784 8.61638C13.269 7.19635 13.1323 5.68288 12.4935 4.35584"
                              stroke="#43C6B7"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M3.95312 6.23726L6.23884 8.52297L12.3341 2.42773"
                              stroke="#43C6B7"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                        <div>In Stock</div>
                      </div>
                    </button>
                    <div className=" mt-4 items-center flex gap-2">
                      <span className="line-through text-gray-500 mr-2">
                        $118
                      </span>
                      <span className="text-2xl font-bold text-blue-800">
                        $115
                      </span>
                      <button className="bg-red-600 text-sm font-bold text-white px-2 rounded-sm">
                        $0 SAVE
                      </button>
                      <p className="text-xs">(TAX INCLUDED)</p>
                    </div>
                    <div className="mt-6 flex gap-3">
                      <button className="bg-orange-300 px-8 py-3">
                        Buy Now
                      </button>
                      <button className="bg-blue-300 px-8 py-3">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>

          <div className="flex justify-center mt-4 text-gray-400 text-sm">
            <div className="rating rating-xs">
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>{" "}
            (0)
          </div>

          <div className="text-center mt-1 text-gray-500 text-sm">
            Tech Shop
          </div>

          <div className="text-center text-black font-semibold truncate">
            Yuzu Fast Charger 27W...
          </div>

          <div className="text-center mt-1">
            <span className="line-through text-gray-500 mr-2">$118</span>
            <span className="text-lg font-bold text-black">$115</span>
          </div>
        </div>
        {/* Six */}
        <div className="max-w-xs hover:shadow-lg  text-white rounded-xl relative group p-4 w-52">
          <span className="absolute top-2 left-2 z-20 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
            -$233
          </span>

          <div className="">
            <img
            src="https://amarpet.com/_next/image?url=https%3A%2F%2Famarpet.blob.core.windows.net%2Fproduction%2Fdaa96d9681a21445772454cbddf0cac1%2FLWfJbhYmEbr6VKTOBLTAZWHJsNl11S-metaUGV0LWhhcm5lc3MucG5n-.png&w=640&q=75"
            alt="cat"
            className="rounded-xl mx-auto w-48 transform scale-110 group-hover:scale-100 transition-transform duration-500"
          />
          </div>

          {/* Button icon */}
          <div className="absolute top-8 right-[7px] flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
            <button className="w-9 h-9 bg-white border-2 rounded-full flex items-center justify-center">
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.375 11.0489L12.3334 1.24894C12.3334 0.632819 11.8561 0.133789 11.2668 0.133789H7.0001H2.73343C2.1441 0.133789 1.66676 0.632819 1.66676 1.24894L0.625164 11.0489C0.609698 11.1253 0.600098 11.2039 0.600098 11.2853C0.600098 11.9014 1.07743 12.4005 1.66676 12.4005H7.0001H12.3334C12.9228 12.4005 13.4001 11.9014 13.4001 11.2853C13.4001 11.2039 13.3905 11.1253 13.375 11.0489ZM9.66676 2.87037V3.47924C9.66676 5.01648 8.4705 6.26712 7.0001 6.26712C5.5297 6.26712 4.33343 5.01648 4.33343 3.47924V2.87037C4.02356 2.75551 3.8001 2.44884 3.8001 2.0853C3.8001 1.62363 4.1585 1.24894 4.6001 1.24894C5.0417 1.24894 5.4001 1.62363 5.4001 2.0853V3.47924C5.4001 4.40147 6.11796 5.15197 7.0001 5.15197C7.88223 5.15197 8.6001 4.40147 8.6001 3.47924V2.0853C8.6001 1.62363 8.9585 1.24894 9.4001 1.24894C9.8417 1.24894 10.2001 1.62363 10.2001 2.0853C10.2001 2.44884 9.97663 2.75551 9.66676 2.87037Z"
                  fill="#1455ac"
                ></path>
              </svg>
            </button>
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
            <button
              className=""
              onClick={() => document.getElementById("my_modal_3").showModal()}
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
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className=" bg-white p-10">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn bg-gray-300 btn-sm btn-circle btn-ghost absolute right-[20rem] top-10 ">
                    ✕
                  </button>
                </form>
                <div className="flex gap-24 justify-center my-32">
                  {/* card */}
                  <div className="max-w-xs  text-white rounded-xl relative group p-4 w-52">
                    <span className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
                      -$233
                    </span>

                    <img
                      src="data:image/jpeg;base64,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"
                      alt="Charger"
                      className="rounded-xl mx-auto w-48"
                    />

                    <div className="absolute top-3 right-[-14px] flex flex-col gap-2 opacity-100 transition duration-300">
                      <button className="w-9 h-9 bg-white border-2 rounded-full flex items-center justify-center">
                        <svg
                          width="14"
                          height="12"
                          viewBox="0 0 14 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.375 11.0489L12.3334 1.24894C12.3334 0.632819 11.8561 0.133789 11.2668 0.133789H7.0001H2.73343C2.1441 0.133789 1.66676 0.632819 1.66676 1.24894L0.625164 11.0489C0.609698 11.1253 0.600098 11.2039 0.600098 11.2853C0.600098 11.9014 1.07743 12.4005 1.66676 12.4005H7.0001H12.3334C12.9228 12.4005 13.4001 11.9014 13.4001 11.2853C13.4001 11.2039 13.3905 11.1253 13.375 11.0489ZM9.66676 2.87037V3.47924C9.66676 5.01648 8.4705 6.26712 7.0001 6.26712C5.5297 6.26712 4.33343 5.01648 4.33343 3.47924V2.87037C4.02356 2.75551 3.8001 2.44884 3.8001 2.0853C3.8001 1.62363 4.1585 1.24894 4.6001 1.24894C5.0417 1.24894 5.4001 1.62363 5.4001 2.0853V3.47924C5.4001 4.40147 6.11796 5.15197 7.0001 5.15197C7.88223 5.15197 8.6001 4.40147 8.6001 3.47924V2.0853C8.6001 1.62363 8.9585 1.24894 9.4001 1.24894C9.8417 1.24894 10.2001 1.62363 10.2001 2.0853C10.2001 2.44884 9.97663 2.75551 9.66676 2.87037Z"
                            fill="#1455ac"
                          ></path>
                        </svg>
                      </button>
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
                      <button
                        to="/viewPage"
                        className="w-9 h-9 bg-white border-2 rounded-full flex items-center justify-center "
                      >
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
                    </div>
                  </div>

                  {/* side */}
                  <div>
                    <h2 className="text-black text-xl">
                      15 IN 1 MAKEUP COMBO SET WITH FULL <br /> MAKEUP COVERAGE
                      set
                    </h2>
                    <button className="bg-green-100 text-green-400 px-2 rounded-2xl mt-3">
                      <div className="flex items-center gap-2">
                        <div>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.3206 1.88726C9.08531 1.08527 7.60142 0.757665 6.1433 0.96503C4.68517 1.17239 3.35145 1.9007 2.38873 3.01528C1.42601 4.12987 0.899415 5.55533 0.906317 7.02811C0.913219 8.50089 1.45315 9.92136 2.42627 11.0269C3.39939 12.1324 4.73989 12.8482 6.19989 13.0418C7.65989 13.2355 9.14065 12.894 10.3684 12.0805C11.5961 11.267 12.4877 10.0364 12.8784 8.61638C13.269 7.19635 13.1323 5.68288 12.4935 4.35584"
                              stroke="#43C6B7"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M3.95312 6.23726L6.23884 8.52297L12.3341 2.42773"
                              stroke="#43C6B7"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                        <div>In Stock</div>
                      </div>
                    </button>
                    <div className=" mt-4 items-center flex gap-2">
                      <span className="line-through text-gray-500 mr-2">
                        $118
                      </span>
                      <span className="text-2xl font-bold text-blue-800">
                        $115
                      </span>
                      <button className="bg-red-600 text-sm font-bold text-white px-2 rounded-sm">
                        $0 SAVE
                      </button>
                      <p className="text-xs">(TAX INCLUDED)</p>
                    </div>
                    <div className="mt-6 flex gap-3">
                      <button className="bg-orange-300 px-8 py-3">
                        Buy Now
                      </button>
                      <button className="bg-blue-300 px-8 py-3">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>

          <div className="flex justify-center mt-4 text-gray-400 text-sm">
            <div className="rating rating-xs">
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>{" "}
            (0)
          </div>

          <div className="text-center mt-1 text-gray-500 text-sm">
            Tech Shop
          </div>

          <div className="text-center text-black font-semibold truncate">
            Yuzu Fast Charger 27W...
          </div>

          <div className="text-center mt-1">
            <span className="line-through text-gray-500 mr-2">$118</span>
            <span className="text-lg font-bold text-black">$115</span>
          </div>
        </div>
        {/* Seven */}
        <div className="max-w-xs hover:shadow-lg  text-white rounded-xl relative group p-4 w-52">
          <span className="absolute top-2 left-2 z-20 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
            -$233
          </span>

          <div className="">
            <img
            src="https://amarpet.com/_next/image?url=https%3A%2F%2Famarpet.blob.core.windows.net%2Fproduction%2F66e8ba8216a1e152d72653d99a4f03ab%2FBeavis-Professional-Milk-Thistle-Tumeric-Cat-Tabs-100-Tabs.png&w=640&q=75"
            alt="cat"
            className="rounded-xl mx-auto w-48 transform scale-110 group-hover:scale-100 transition-transform duration-500"
          />
          </div>

          {/* Button icon */}
          <div className="absolute top-8 right-[7px] flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
            <button className="w-9 h-9 bg-white border-2 rounded-full flex items-center justify-center">
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.375 11.0489L12.3334 1.24894C12.3334 0.632819 11.8561 0.133789 11.2668 0.133789H7.0001H2.73343C2.1441 0.133789 1.66676 0.632819 1.66676 1.24894L0.625164 11.0489C0.609698 11.1253 0.600098 11.2039 0.600098 11.2853C0.600098 11.9014 1.07743 12.4005 1.66676 12.4005H7.0001H12.3334C12.9228 12.4005 13.4001 11.9014 13.4001 11.2853C13.4001 11.2039 13.3905 11.1253 13.375 11.0489ZM9.66676 2.87037V3.47924C9.66676 5.01648 8.4705 6.26712 7.0001 6.26712C5.5297 6.26712 4.33343 5.01648 4.33343 3.47924V2.87037C4.02356 2.75551 3.8001 2.44884 3.8001 2.0853C3.8001 1.62363 4.1585 1.24894 4.6001 1.24894C5.0417 1.24894 5.4001 1.62363 5.4001 2.0853V3.47924C5.4001 4.40147 6.11796 5.15197 7.0001 5.15197C7.88223 5.15197 8.6001 4.40147 8.6001 3.47924V2.0853C8.6001 1.62363 8.9585 1.24894 9.4001 1.24894C9.8417 1.24894 10.2001 1.62363 10.2001 2.0853C10.2001 2.44884 9.97663 2.75551 9.66676 2.87037Z"
                  fill="#1455ac"
                ></path>
              </svg>
            </button>
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
            <button
              className=""
              onClick={() => document.getElementById("my_modal_3").showModal()}
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
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className=" bg-white p-10">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn bg-gray-300 btn-sm btn-circle btn-ghost absolute right-[20rem] top-10 ">
                    ✕
                  </button>
                </form>
                <div className="flex gap-24 justify-center my-32">
                  {/* card */}
                  <div className="max-w-xs  text-white rounded-xl relative group p-4 w-52">
                    <span className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
                      -$233
                    </span>

                    <img
                      src="data:image/jpeg;base64,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"
                      alt="Charger"
                      className="rounded-xl mx-auto w-48"
                    />

                    <div className="absolute top-3 right-[-14px] flex flex-col gap-2 opacity-100 transition duration-300">
                      <button className="w-9 h-9 bg-white border-2 rounded-full flex items-center justify-center">
                        <svg
                          width="14"
                          height="12"
                          viewBox="0 0 14 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.375 11.0489L12.3334 1.24894C12.3334 0.632819 11.8561 0.133789 11.2668 0.133789H7.0001H2.73343C2.1441 0.133789 1.66676 0.632819 1.66676 1.24894L0.625164 11.0489C0.609698 11.1253 0.600098 11.2039 0.600098 11.2853C0.600098 11.9014 1.07743 12.4005 1.66676 12.4005H7.0001H12.3334C12.9228 12.4005 13.4001 11.9014 13.4001 11.2853C13.4001 11.2039 13.3905 11.1253 13.375 11.0489ZM9.66676 2.87037V3.47924C9.66676 5.01648 8.4705 6.26712 7.0001 6.26712C5.5297 6.26712 4.33343 5.01648 4.33343 3.47924V2.87037C4.02356 2.75551 3.8001 2.44884 3.8001 2.0853C3.8001 1.62363 4.1585 1.24894 4.6001 1.24894C5.0417 1.24894 5.4001 1.62363 5.4001 2.0853V3.47924C5.4001 4.40147 6.11796 5.15197 7.0001 5.15197C7.88223 5.15197 8.6001 4.40147 8.6001 3.47924V2.0853C8.6001 1.62363 8.9585 1.24894 9.4001 1.24894C9.8417 1.24894 10.2001 1.62363 10.2001 2.0853C10.2001 2.44884 9.97663 2.75551 9.66676 2.87037Z"
                            fill="#1455ac"
                          ></path>
                        </svg>
                      </button>
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
                      <button
                        to="/viewPage"
                        className="w-9 h-9 bg-white border-2 rounded-full flex items-center justify-center "
                      >
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
                    </div>
                  </div>

                  {/* side */}
                  <div>
                    <h2 className="text-black text-xl">
                      15 IN 1 MAKEUP COMBO SET WITH FULL <br /> MAKEUP COVERAGE
                      set
                    </h2>
                    <button className="bg-green-100 text-green-400 px-2 rounded-2xl mt-3">
                      <div className="flex items-center gap-2">
                        <div>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.3206 1.88726C9.08531 1.08527 7.60142 0.757665 6.1433 0.96503C4.68517 1.17239 3.35145 1.9007 2.38873 3.01528C1.42601 4.12987 0.899415 5.55533 0.906317 7.02811C0.913219 8.50089 1.45315 9.92136 2.42627 11.0269C3.39939 12.1324 4.73989 12.8482 6.19989 13.0418C7.65989 13.2355 9.14065 12.894 10.3684 12.0805C11.5961 11.267 12.4877 10.0364 12.8784 8.61638C13.269 7.19635 13.1323 5.68288 12.4935 4.35584"
                              stroke="#43C6B7"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M3.95312 6.23726L6.23884 8.52297L12.3341 2.42773"
                              stroke="#43C6B7"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                        <div>In Stock</div>
                      </div>
                    </button>
                    <div className=" mt-4 items-center flex gap-2">
                      <span className="line-through text-gray-500 mr-2">
                        $118
                      </span>
                      <span className="text-2xl font-bold text-blue-800">
                        $115
                      </span>
                      <button className="bg-red-600 text-sm font-bold text-white px-2 rounded-sm">
                        $0 SAVE
                      </button>
                      <p className="text-xs">(TAX INCLUDED)</p>
                    </div>
                    <div className="mt-6 flex gap-3">
                      <button className="bg-orange-300 px-8 py-3">
                        Buy Now
                      </button>
                      <button className="bg-blue-300 px-8 py-3">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>

          <div className="flex justify-center mt-4 text-gray-400 text-sm">
            <div className="rating rating-xs">
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>{" "}
            (0)
          </div>

          <div className="text-center mt-1 text-gray-500 text-sm">
            Tech Shop
          </div>

          <div className="text-center text-black font-semibold truncate">
            Yuzu Fast Charger 27W...
          </div>

          <div className="text-center mt-1">
            <span className="line-through text-gray-500 mr-2">$118</span>
            <span className="text-lg font-bold text-black">$115</span>
          </div>
        </div>
        {/* Eight */}
        <div className="max-w-xs hover:shadow-lg  text-white rounded-xl relative group p-4 w-52">
          <span className="absolute top-2 left-2 z-20 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
            -$233
          </span>

          <div className="">
            <img
            src="https://amarpet.com/_next/image?url=https%3A%2F%2Famarpet.blob.core.windows.net%2Fproduction%2Fe56b06c51e1049195d7b26d043c478a0%2FElyQ3JdDsFgTCK3eHzm7eFOjyH4cxf-metaUGV0LXNob3dlci0mLUdyb29taW5nLUdsb3Zlcy5wbmc%3D-.png&w=640&q=75"
            alt="cat"
            className="rounded-xl mx-auto w-48 transform scale-110 group-hover:scale-100 transition-transform duration-500"
          />
          </div>

          {/* Button icon */}
          <div className="absolute top-8 right-[7px] flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
            <button className="w-9 h-9 bg-white border-2 rounded-full flex items-center justify-center">
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.375 11.0489L12.3334 1.24894C12.3334 0.632819 11.8561 0.133789 11.2668 0.133789H7.0001H2.73343C2.1441 0.133789 1.66676 0.632819 1.66676 1.24894L0.625164 11.0489C0.609698 11.1253 0.600098 11.2039 0.600098 11.2853C0.600098 11.9014 1.07743 12.4005 1.66676 12.4005H7.0001H12.3334C12.9228 12.4005 13.4001 11.9014 13.4001 11.2853C13.4001 11.2039 13.3905 11.1253 13.375 11.0489ZM9.66676 2.87037V3.47924C9.66676 5.01648 8.4705 6.26712 7.0001 6.26712C5.5297 6.26712 4.33343 5.01648 4.33343 3.47924V2.87037C4.02356 2.75551 3.8001 2.44884 3.8001 2.0853C3.8001 1.62363 4.1585 1.24894 4.6001 1.24894C5.0417 1.24894 5.4001 1.62363 5.4001 2.0853V3.47924C5.4001 4.40147 6.11796 5.15197 7.0001 5.15197C7.88223 5.15197 8.6001 4.40147 8.6001 3.47924V2.0853C8.6001 1.62363 8.9585 1.24894 9.4001 1.24894C9.8417 1.24894 10.2001 1.62363 10.2001 2.0853C10.2001 2.44884 9.97663 2.75551 9.66676 2.87037Z"
                  fill="#1455ac"
                ></path>
              </svg>
            </button>
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
            <button
              className=""
              onClick={() => document.getElementById("my_modal_3").showModal()}
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
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className=" bg-white p-10">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn bg-gray-300 btn-sm btn-circle btn-ghost absolute right-[20rem] top-10 ">
                    ✕
                  </button>
                </form>
                <div className="flex gap-24 justify-center my-32">
                  {/* card */}
                  <div className="max-w-xs  text-white rounded-xl relative group p-4 w-52">
                    <span className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
                      -$233
                    </span>

                    <img
                      src="data:image/jpeg;base64,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"
                      alt="Charger"
                      className="rounded-xl mx-auto w-48"
                    />

                    <div className="absolute top-3 right-[-14px] flex flex-col gap-2 opacity-100 transition duration-300">
                      <button className="w-9 h-9 bg-white border-2 rounded-full flex items-center justify-center">
                        <svg
                          width="14"
                          height="12"
                          viewBox="0 0 14 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.375 11.0489L12.3334 1.24894C12.3334 0.632819 11.8561 0.133789 11.2668 0.133789H7.0001H2.73343C2.1441 0.133789 1.66676 0.632819 1.66676 1.24894L0.625164 11.0489C0.609698 11.1253 0.600098 11.2039 0.600098 11.2853C0.600098 11.9014 1.07743 12.4005 1.66676 12.4005H7.0001H12.3334C12.9228 12.4005 13.4001 11.9014 13.4001 11.2853C13.4001 11.2039 13.3905 11.1253 13.375 11.0489ZM9.66676 2.87037V3.47924C9.66676 5.01648 8.4705 6.26712 7.0001 6.26712C5.5297 6.26712 4.33343 5.01648 4.33343 3.47924V2.87037C4.02356 2.75551 3.8001 2.44884 3.8001 2.0853C3.8001 1.62363 4.1585 1.24894 4.6001 1.24894C5.0417 1.24894 5.4001 1.62363 5.4001 2.0853V3.47924C5.4001 4.40147 6.11796 5.15197 7.0001 5.15197C7.88223 5.15197 8.6001 4.40147 8.6001 3.47924V2.0853C8.6001 1.62363 8.9585 1.24894 9.4001 1.24894C9.8417 1.24894 10.2001 1.62363 10.2001 2.0853C10.2001 2.44884 9.97663 2.75551 9.66676 2.87037Z"
                            fill="#1455ac"
                          ></path>
                        </svg>
                      </button>
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
                      <button
                        to="/viewPage"
                        className="w-9 h-9 bg-white border-2 rounded-full flex items-center justify-center "
                      >
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
                    </div>
                  </div>

                  {/* side */}
                  <div>
                    <h2 className="text-black text-xl">
                      15 IN 1 MAKEUP COMBO SET WITH FULL <br /> MAKEUP COVERAGE
                      set
                    </h2>
                    <button className="bg-green-100 text-green-400 px-2 rounded-2xl mt-3">
                      <div className="flex items-center gap-2">
                        <div>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.3206 1.88726C9.08531 1.08527 7.60142 0.757665 6.1433 0.96503C4.68517 1.17239 3.35145 1.9007 2.38873 3.01528C1.42601 4.12987 0.899415 5.55533 0.906317 7.02811C0.913219 8.50089 1.45315 9.92136 2.42627 11.0269C3.39939 12.1324 4.73989 12.8482 6.19989 13.0418C7.65989 13.2355 9.14065 12.894 10.3684 12.0805C11.5961 11.267 12.4877 10.0364 12.8784 8.61638C13.269 7.19635 13.1323 5.68288 12.4935 4.35584"
                              stroke="#43C6B7"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M3.95312 6.23726L6.23884 8.52297L12.3341 2.42773"
                              stroke="#43C6B7"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                        <div>In Stock</div>
                      </div>
                    </button>
                    <div className=" mt-4 items-center flex gap-2">
                      <span className="line-through text-gray-500 mr-2">
                        $118
                      </span>
                      <span className="text-2xl font-bold text-blue-800">
                        $115
                      </span>
                      <button className="bg-red-600 text-sm font-bold text-white px-2 rounded-sm">
                        $0 SAVE
                      </button>
                      <p className="text-xs">(TAX INCLUDED)</p>
                    </div>
                    <div className="mt-6 flex gap-3">
                      <button className="bg-orange-300 px-8 py-3">
                        Buy Now
                      </button>
                      <button className="bg-blue-300 px-8 py-3">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>

          <div className="flex justify-center mt-4 text-gray-400 text-sm">
            <div className="rating rating-xs">
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>{" "}
            (0)
          </div>

          <div className="text-center mt-1 text-gray-500 text-sm">
            Tech Shop
          </div>

          <div className="text-center text-black font-semibold truncate">
            Yuzu Fast Charger 27W...
          </div>

          <div className="text-center mt-1">
            <span className="line-through text-gray-500 mr-2">$118</span>
            <span className="text-lg font-bold text-black">$115</span>
          </div>
        </div>
        {/* Nine */}
        <div className="max-w-xs hover:shadow-lg  text-white rounded-xl relative group p-4 w-52">
          <span className="absolute top-2 left-2 z-20 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
            -$233
          </span>

          <div className="">
            <img
            src="https://amarpet.com/_next/image?url=https%3A%2F%2Famarpet.blob.core.windows.net%2Fproduction%2Fdaa96d9681a21445772454cbddf0cac1%2FLWfJbhYmEbr6VKTOBLTAZWHJsNl11S-metaUGV0LWhhcm5lc3MucG5n-.png&w=640&q=75"
            alt="cat"
            className="rounded-xl mx-auto w-48 transform scale-110 group-hover:scale-100 transition-transform duration-500"
          />
          </div>

          {/* Button icon */}
          <div className="absolute top-8 right-[7px] flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
            <button className="w-9 h-9 bg-white border-2 rounded-full flex items-center justify-center">
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.375 11.0489L12.3334 1.24894C12.3334 0.632819 11.8561 0.133789 11.2668 0.133789H7.0001H2.73343C2.1441 0.133789 1.66676 0.632819 1.66676 1.24894L0.625164 11.0489C0.609698 11.1253 0.600098 11.2039 0.600098 11.2853C0.600098 11.9014 1.07743 12.4005 1.66676 12.4005H7.0001H12.3334C12.9228 12.4005 13.4001 11.9014 13.4001 11.2853C13.4001 11.2039 13.3905 11.1253 13.375 11.0489ZM9.66676 2.87037V3.47924C9.66676 5.01648 8.4705 6.26712 7.0001 6.26712C5.5297 6.26712 4.33343 5.01648 4.33343 3.47924V2.87037C4.02356 2.75551 3.8001 2.44884 3.8001 2.0853C3.8001 1.62363 4.1585 1.24894 4.6001 1.24894C5.0417 1.24894 5.4001 1.62363 5.4001 2.0853V3.47924C5.4001 4.40147 6.11796 5.15197 7.0001 5.15197C7.88223 5.15197 8.6001 4.40147 8.6001 3.47924V2.0853C8.6001 1.62363 8.9585 1.24894 9.4001 1.24894C9.8417 1.24894 10.2001 1.62363 10.2001 2.0853C10.2001 2.44884 9.97663 2.75551 9.66676 2.87037Z"
                  fill="#1455ac"
                ></path>
              </svg>
            </button>
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
            <button
              className=""
              onClick={() => document.getElementById("my_modal_3").showModal()}
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
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className=" bg-white p-10">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn bg-gray-300 btn-sm btn-circle btn-ghost absolute right-[20rem] top-10 ">
                    ✕
                  </button>
                </form>
                <div className="flex gap-24 justify-center my-32">
                  {/* card */}
                  <div className="max-w-xs  text-white rounded-xl relative group p-4 w-52">
                    <span className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
                      -$233
                    </span>

                    <img
                      src="data:image/jpeg;base64,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"
                      alt="Charger"
                      className="rounded-xl mx-auto w-48"
                    />

                    <div className="absolute top-3 right-[-14px] flex flex-col gap-2 opacity-100 transition duration-300">
                      <button className="w-9 h-9 bg-white border-2 rounded-full flex items-center justify-center">
                        <svg
                          width="14"
                          height="12"
                          viewBox="0 0 14 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.375 11.0489L12.3334 1.24894C12.3334 0.632819 11.8561 0.133789 11.2668 0.133789H7.0001H2.73343C2.1441 0.133789 1.66676 0.632819 1.66676 1.24894L0.625164 11.0489C0.609698 11.1253 0.600098 11.2039 0.600098 11.2853C0.600098 11.9014 1.07743 12.4005 1.66676 12.4005H7.0001H12.3334C12.9228 12.4005 13.4001 11.9014 13.4001 11.2853C13.4001 11.2039 13.3905 11.1253 13.375 11.0489ZM9.66676 2.87037V3.47924C9.66676 5.01648 8.4705 6.26712 7.0001 6.26712C5.5297 6.26712 4.33343 5.01648 4.33343 3.47924V2.87037C4.02356 2.75551 3.8001 2.44884 3.8001 2.0853C3.8001 1.62363 4.1585 1.24894 4.6001 1.24894C5.0417 1.24894 5.4001 1.62363 5.4001 2.0853V3.47924C5.4001 4.40147 6.11796 5.15197 7.0001 5.15197C7.88223 5.15197 8.6001 4.40147 8.6001 3.47924V2.0853C8.6001 1.62363 8.9585 1.24894 9.4001 1.24894C9.8417 1.24894 10.2001 1.62363 10.2001 2.0853C10.2001 2.44884 9.97663 2.75551 9.66676 2.87037Z"
                            fill="#1455ac"
                          ></path>
                        </svg>
                      </button>
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
                      <button
                        to="/viewPage"
                        className="w-9 h-9 bg-white border-2 rounded-full flex items-center justify-center "
                      >
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
                    </div>
                  </div>

                  {/* side */}
                  <div>
                    <h2 className="text-black text-xl">
                      15 IN 1 MAKEUP COMBO SET WITH FULL <br /> MAKEUP COVERAGE
                      set
                    </h2>
                    <button className="bg-green-100 text-green-400 px-2 rounded-2xl mt-3">
                      <div className="flex items-center gap-2">
                        <div>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.3206 1.88726C9.08531 1.08527 7.60142 0.757665 6.1433 0.96503C4.68517 1.17239 3.35145 1.9007 2.38873 3.01528C1.42601 4.12987 0.899415 5.55533 0.906317 7.02811C0.913219 8.50089 1.45315 9.92136 2.42627 11.0269C3.39939 12.1324 4.73989 12.8482 6.19989 13.0418C7.65989 13.2355 9.14065 12.894 10.3684 12.0805C11.5961 11.267 12.4877 10.0364 12.8784 8.61638C13.269 7.19635 13.1323 5.68288 12.4935 4.35584"
                              stroke="#43C6B7"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M3.95312 6.23726L6.23884 8.52297L12.3341 2.42773"
                              stroke="#43C6B7"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                        <div>In Stock</div>
                      </div>
                    </button>
                    <div className=" mt-4 items-center flex gap-2">
                      <span className="line-through text-gray-500 mr-2">
                        $118
                      </span>
                      <span className="text-2xl font-bold text-blue-800">
                        $115
                      </span>
                      <button className="bg-red-600 text-sm font-bold text-white px-2 rounded-sm">
                        $0 SAVE
                      </button>
                      <p className="text-xs">(TAX INCLUDED)</p>
                    </div>
                    <div className="mt-6 flex gap-3">
                      <button className="bg-orange-300 px-8 py-3">
                        Buy Now
                      </button>
                      <button className="bg-blue-300 px-8 py-3">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>

          <div className="flex justify-center mt-4 text-gray-400 text-sm">
            <div className="rating rating-xs">
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>{" "}
            (0)
          </div>

          <div className="text-center mt-1 text-gray-500 text-sm">
            Tech Shop
          </div>

          <div className="text-center text-black font-semibold truncate">
            Yuzu Fast Charger 27W...
          </div>

          <div className="text-center mt-1">
            <span className="line-through text-gray-500 mr-2">$118</span>
            <span className="text-lg font-bold text-black">$115</span>
          </div>
        </div>
        {/* Ten */}
        <div className="max-w-xs hover:shadow-lg  text-white rounded-xl relative group p-4 w-52">
          <span className="absolute top-2 left-2 z-20 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
            -$233
          </span>

          <div className="">
            <img
            src="https://amarpet.com/_next/image?url=https%3A%2F%2Famarpet.blob.core.windows.net%2Fproduction%2F66e8ba8216a1e152d72653d99a4f03ab%2FBeavis-Professional-Milk-Thistle-Tumeric-Cat-Tabs-100-Tabs.png&w=640&q=75"
            alt="cat"
            className="rounded-xl mx-auto w-48 transform scale-110 group-hover:scale-100 transition-transform duration-500"
          />
          </div>

          {/* Button icon */}
          <div className="absolute top-8 right-[7px] flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
            <button className="w-9 h-9 bg-white border-2 rounded-full flex items-center justify-center">
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.375 11.0489L12.3334 1.24894C12.3334 0.632819 11.8561 0.133789 11.2668 0.133789H7.0001H2.73343C2.1441 0.133789 1.66676 0.632819 1.66676 1.24894L0.625164 11.0489C0.609698 11.1253 0.600098 11.2039 0.600098 11.2853C0.600098 11.9014 1.07743 12.4005 1.66676 12.4005H7.0001H12.3334C12.9228 12.4005 13.4001 11.9014 13.4001 11.2853C13.4001 11.2039 13.3905 11.1253 13.375 11.0489ZM9.66676 2.87037V3.47924C9.66676 5.01648 8.4705 6.26712 7.0001 6.26712C5.5297 6.26712 4.33343 5.01648 4.33343 3.47924V2.87037C4.02356 2.75551 3.8001 2.44884 3.8001 2.0853C3.8001 1.62363 4.1585 1.24894 4.6001 1.24894C5.0417 1.24894 5.4001 1.62363 5.4001 2.0853V3.47924C5.4001 4.40147 6.11796 5.15197 7.0001 5.15197C7.88223 5.15197 8.6001 4.40147 8.6001 3.47924V2.0853C8.6001 1.62363 8.9585 1.24894 9.4001 1.24894C9.8417 1.24894 10.2001 1.62363 10.2001 2.0853C10.2001 2.44884 9.97663 2.75551 9.66676 2.87037Z"
                  fill="#1455ac"
                ></path>
              </svg>
            </button>
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
            <button
              className=""
              onClick={() => document.getElementById("my_modal_3").showModal()}
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
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className=" bg-white p-10">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn bg-gray-300 btn-sm btn-circle btn-ghost absolute right-[20rem] top-10 ">
                    ✕
                  </button>
                </form>
                <div className="flex gap-24 justify-center my-32">
                  {/* card */}
                  <div className="max-w-xs  text-white rounded-xl relative group p-4 w-52">
                    <span className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
                      -$233
                    </span>

                    <img
                      src="data:image/jpeg;base64,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"
                      alt="Charger"
                      className="rounded-xl mx-auto w-48"
                    />

                    <div className="absolute top-3 right-[-14px] flex flex-col gap-2 opacity-100 transition duration-300">
                      <button className="w-9 h-9 bg-white border-2 rounded-full flex items-center justify-center">
                        <svg
                          width="14"
                          height="12"
                          viewBox="0 0 14 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.375 11.0489L12.3334 1.24894C12.3334 0.632819 11.8561 0.133789 11.2668 0.133789H7.0001H2.73343C2.1441 0.133789 1.66676 0.632819 1.66676 1.24894L0.625164 11.0489C0.609698 11.1253 0.600098 11.2039 0.600098 11.2853C0.600098 11.9014 1.07743 12.4005 1.66676 12.4005H7.0001H12.3334C12.9228 12.4005 13.4001 11.9014 13.4001 11.2853C13.4001 11.2039 13.3905 11.1253 13.375 11.0489ZM9.66676 2.87037V3.47924C9.66676 5.01648 8.4705 6.26712 7.0001 6.26712C5.5297 6.26712 4.33343 5.01648 4.33343 3.47924V2.87037C4.02356 2.75551 3.8001 2.44884 3.8001 2.0853C3.8001 1.62363 4.1585 1.24894 4.6001 1.24894C5.0417 1.24894 5.4001 1.62363 5.4001 2.0853V3.47924C5.4001 4.40147 6.11796 5.15197 7.0001 5.15197C7.88223 5.15197 8.6001 4.40147 8.6001 3.47924V2.0853C8.6001 1.62363 8.9585 1.24894 9.4001 1.24894C9.8417 1.24894 10.2001 1.62363 10.2001 2.0853C10.2001 2.44884 9.97663 2.75551 9.66676 2.87037Z"
                            fill="#1455ac"
                          ></path>
                        </svg>
                      </button>
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
                      <button
                        to="/viewPage"
                        className="w-9 h-9 bg-white border-2 rounded-full flex items-center justify-center "
                      >
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
                    </div>
                  </div>

                  {/* side */}
                  <div>
                    <h2 className="text-black text-xl">
                      15 IN 1 MAKEUP COMBO SET WITH FULL <br /> MAKEUP COVERAGE
                      set
                    </h2>
                    <button className="bg-green-100 text-green-400 px-2 rounded-2xl mt-3">
                      <div className="flex items-center gap-2">
                        <div>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.3206 1.88726C9.08531 1.08527 7.60142 0.757665 6.1433 0.96503C4.68517 1.17239 3.35145 1.9007 2.38873 3.01528C1.42601 4.12987 0.899415 5.55533 0.906317 7.02811C0.913219 8.50089 1.45315 9.92136 2.42627 11.0269C3.39939 12.1324 4.73989 12.8482 6.19989 13.0418C7.65989 13.2355 9.14065 12.894 10.3684 12.0805C11.5961 11.267 12.4877 10.0364 12.8784 8.61638C13.269 7.19635 13.1323 5.68288 12.4935 4.35584"
                              stroke="#43C6B7"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M3.95312 6.23726L6.23884 8.52297L12.3341 2.42773"
                              stroke="#43C6B7"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                        <div>In Stock</div>
                      </div>
                    </button>
                    <div className=" mt-4 items-center flex gap-2">
                      <span className="line-through text-gray-500 mr-2">
                        $118
                      </span>
                      <span className="text-2xl font-bold text-blue-800">
                        $115
                      </span>
                      <button className="bg-red-600 text-sm font-bold text-white px-2 rounded-sm">
                        $0 SAVE
                      </button>
                      <p className="text-xs">(TAX INCLUDED)</p>
                    </div>
                    <div className="mt-6 flex gap-3">
                      <button className="bg-orange-300 px-8 py-3">
                        Buy Now
                      </button>
                      <button className="bg-blue-300 px-8 py-3">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>

          <div className="flex justify-center mt-4 text-gray-400 text-sm">
            <div className="rating rating-xs">
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>{" "}
            (0)
          </div>

          <div className="text-center mt-1 text-gray-500 text-sm">
            Tech Shop
          </div>

          <div className="text-center text-black font-semibold truncate">
            Yuzu Fast Charger 27W...
          </div>

          <div className="text-center mt-1">
            <span className="line-through text-gray-500 mr-2">$118</span>
            <span className="text-lg font-bold text-black">$115</span>
          </div>
        </div>
        {/* Eleven */}
        <div className="max-w-xs hover:shadow-lg  text-white rounded-xl relative group p-4 w-52">
          <span className="absolute top-2 left-2 z-20 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
            -$233
          </span>

          <div className="">
            <img
            src="https://amarpet.com/_next/image?url=https%3A%2F%2Famarpet.blob.core.windows.net%2Fproduction%2F1baff70e2669e8376347efd3a874a341%2Fry5YSH94lLEI6pHxDQwiEqVlKoLfnh-metaUGV0LUhhaXItYnJ1c2gucG5n-.png&w=640&q=75"
            alt="cat"
            className="rounded-xl mx-auto w-48 transform scale-110 group-hover:scale-100 transition-transform duration-500"
          />
          </div>

          {/* Button icon */}
          <div className="absolute top-8 right-[7px] flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
            <button className="w-9 h-9 bg-white border-2 rounded-full flex items-center justify-center">
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.375 11.0489L12.3334 1.24894C12.3334 0.632819 11.8561 0.133789 11.2668 0.133789H7.0001H2.73343C2.1441 0.133789 1.66676 0.632819 1.66676 1.24894L0.625164 11.0489C0.609698 11.1253 0.600098 11.2039 0.600098 11.2853C0.600098 11.9014 1.07743 12.4005 1.66676 12.4005H7.0001H12.3334C12.9228 12.4005 13.4001 11.9014 13.4001 11.2853C13.4001 11.2039 13.3905 11.1253 13.375 11.0489ZM9.66676 2.87037V3.47924C9.66676 5.01648 8.4705 6.26712 7.0001 6.26712C5.5297 6.26712 4.33343 5.01648 4.33343 3.47924V2.87037C4.02356 2.75551 3.8001 2.44884 3.8001 2.0853C3.8001 1.62363 4.1585 1.24894 4.6001 1.24894C5.0417 1.24894 5.4001 1.62363 5.4001 2.0853V3.47924C5.4001 4.40147 6.11796 5.15197 7.0001 5.15197C7.88223 5.15197 8.6001 4.40147 8.6001 3.47924V2.0853C8.6001 1.62363 8.9585 1.24894 9.4001 1.24894C9.8417 1.24894 10.2001 1.62363 10.2001 2.0853C10.2001 2.44884 9.97663 2.75551 9.66676 2.87037Z"
                  fill="#1455ac"
                ></path>
              </svg>
            </button>
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
            <button
              className=""
              onClick={() => document.getElementById("my_modal_3").showModal()}
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
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className=" bg-white p-10">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn bg-gray-300 btn-sm btn-circle btn-ghost absolute right-[20rem] top-10 ">
                    ✕
                  </button>
                </form>
                <div className="flex gap-24 justify-center my-32">
                  {/* card */}
                  <div className="max-w-xs  text-white rounded-xl relative group p-4 w-52">
                    <span className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
                      -$233
                    </span>

                    <img
                      src="data:image/jpeg;base64,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"
                      alt="Charger"
                      className="rounded-xl mx-auto w-48"
                    />

                    <div className="absolute top-3 right-[-14px] flex flex-col gap-2 opacity-100 transition duration-300">
                      <button className="w-9 h-9 bg-white border-2 rounded-full flex items-center justify-center">
                        <svg
                          width="14"
                          height="12"
                          viewBox="0 0 14 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.375 11.0489L12.3334 1.24894C12.3334 0.632819 11.8561 0.133789 11.2668 0.133789H7.0001H2.73343C2.1441 0.133789 1.66676 0.632819 1.66676 1.24894L0.625164 11.0489C0.609698 11.1253 0.600098 11.2039 0.600098 11.2853C0.600098 11.9014 1.07743 12.4005 1.66676 12.4005H7.0001H12.3334C12.9228 12.4005 13.4001 11.9014 13.4001 11.2853C13.4001 11.2039 13.3905 11.1253 13.375 11.0489ZM9.66676 2.87037V3.47924C9.66676 5.01648 8.4705 6.26712 7.0001 6.26712C5.5297 6.26712 4.33343 5.01648 4.33343 3.47924V2.87037C4.02356 2.75551 3.8001 2.44884 3.8001 2.0853C3.8001 1.62363 4.1585 1.24894 4.6001 1.24894C5.0417 1.24894 5.4001 1.62363 5.4001 2.0853V3.47924C5.4001 4.40147 6.11796 5.15197 7.0001 5.15197C7.88223 5.15197 8.6001 4.40147 8.6001 3.47924V2.0853C8.6001 1.62363 8.9585 1.24894 9.4001 1.24894C9.8417 1.24894 10.2001 1.62363 10.2001 2.0853C10.2001 2.44884 9.97663 2.75551 9.66676 2.87037Z"
                            fill="#1455ac"
                          ></path>
                        </svg>
                      </button>
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
                      <button
                        to="/viewPage"
                        className="w-9 h-9 bg-white border-2 rounded-full flex items-center justify-center "
                      >
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
                    </div>
                  </div>

                  {/* side */}
                  <div>
                    <h2 className="text-black text-xl">
                      15 IN 1 MAKEUP COMBO SET WITH FULL <br /> MAKEUP COVERAGE
                      set
                    </h2>
                    <button className="bg-green-100 text-green-400 px-2 rounded-2xl mt-3">
                      <div className="flex items-center gap-2">
                        <div>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.3206 1.88726C9.08531 1.08527 7.60142 0.757665 6.1433 0.96503C4.68517 1.17239 3.35145 1.9007 2.38873 3.01528C1.42601 4.12987 0.899415 5.55533 0.906317 7.02811C0.913219 8.50089 1.45315 9.92136 2.42627 11.0269C3.39939 12.1324 4.73989 12.8482 6.19989 13.0418C7.65989 13.2355 9.14065 12.894 10.3684 12.0805C11.5961 11.267 12.4877 10.0364 12.8784 8.61638C13.269 7.19635 13.1323 5.68288 12.4935 4.35584"
                              stroke="#43C6B7"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M3.95312 6.23726L6.23884 8.52297L12.3341 2.42773"
                              stroke="#43C6B7"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                        <div>In Stock</div>
                      </div>
                    </button>
                    <div className=" mt-4 items-center flex gap-2">
                      <span className="line-through text-gray-500 mr-2">
                        $118
                      </span>
                      <span className="text-2xl font-bold text-blue-800">
                        $115
                      </span>
                      <button className="bg-red-600 text-sm font-bold text-white px-2 rounded-sm">
                        $0 SAVE
                      </button>
                      <p className="text-xs">(TAX INCLUDED)</p>
                    </div>
                    <div className="mt-6 flex gap-3">
                      <button className="bg-orange-300 px-8 py-3">
                        Buy Now
                      </button>
                      <button className="bg-blue-300 px-8 py-3">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>

          <div className="flex justify-center mt-4 text-gray-400 text-sm">
            <div className="rating rating-xs">
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>{" "}
            (0)
          </div>

          <div className="text-center mt-1 text-gray-500 text-sm">
            Tech Shop
          </div>

          <div className="text-center text-black font-semibold truncate">
            Yuzu Fast Charger 27W...
          </div>

          <div className="text-center mt-1">
            <span className="line-through text-gray-500 mr-2">$118</span>
            <span className="text-lg font-bold text-black">$115</span>
          </div>
        </div>
      
        
       
      </div>
      
       

    </div>
  );
};

export default AccessoriesIteams;

{/* <div className="grid justify-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
       
      </div> */}