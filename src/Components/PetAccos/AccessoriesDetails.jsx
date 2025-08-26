import React from 'react';
import { Link } from 'react-router-dom';

const AccessoriesDetails = ({loo}) => {
    return (
        <div>
            
              <div className=" bg-white px-3 py-2 ">
                <form method="dialog">
                    
                  {/* if there is a button in form, it will close the modal */}
                  <Link to="/items" className="btn bg-gray-300 btn-sm btn-circle btn-ghost absolute right-[3rem] md:right-[20rem] top-24 ">
                    ✕ 
                  </Link>
                </form>
                <div className="grid lg:flex gap-2 lg:gap-24 justify-center my-32">
                  {/* card */}
                  <div className="max-w-xs  text-white rounded-xl relative group p-4 ">
                    <span className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
                      -$233
                    </span>

                    <img
                      src="https://amarpet.com/_next/image?url=https%3A%2F%2Famarpet.blob.core.windows.net%2Fproduction%2Fdaa96d9681a21445772454cbddf0cac1%2FLWfJbhYmEbr6VKTOBLTAZWHJsNl11S-metaUGV0LWhhcm5lc3MucG5n-.png&w=640&q=75"
                      alt="Charger"
                      className="rounded-xl mx-auto w-48"
                    />

                    <div className="absolute top-3 right-[-14px] flex flex-col gap-2 opacity-100 transition duration-300">
                     
                      <button className="w-10 h-10 mr-5 md:mr-0 hover:bg-red-500  rounded-full flex items-center justify-center ">
                        <svg
                          width="30"
                          height="30"
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
                    <div className=" mt-4 items-center flex gap-1">
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
           
        </div>
    );
};

export default AccessoriesDetails;