import React from "react";

const LatestProjects = () => {
  return (
    <div className=" w-100 latest-portfolio-bg py-14">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="px-5 sm:px-0">
            <div className="my-14">
              <p className="text-sm text-[#ff6d5a]">Portfolio</p>
              <h1 className="text-4xl text-white font-bold">
                My latest <br />
                <span className="text-[#ff6d5a]">Projects</span>
              </h1>
            </div>
            <div className="project-1_bg relative">
              <div className="px-8 bottom-4 absolute">
                <p className="text-white font-semibold text-2xl ">
                  Climate Club
                </p>

                <div className="flex flex-row items-center gap-4">
                  <div>
                    <p className="text-[16px] font-semibold text-white under-line">
                      View work{" "}
                    </p>
                  </div>
                  <div>
                    <svg
                      width="5"
                      height="9"
                      viewBox="0 0 5 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0L5 4.5L0 9L0 0Z" fill="white"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="project-2_bg relative px-5 sm:px-0">
            <div className="px-8 bottom-4 absolute">
              <p className="text-white font-semibold text-2xl ">Table Cloth</p>

              <div className="flex flex-row items-center gap-4">
                <div>
                  <p className="text-[16px] font-semibold text-white under-line">
                    View work{" "}
                  </p>
                </div>
                <div>
                  <svg
                    width="5"
                    height="9"
                    viewBox="0 0 5 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0L5 4.5L0 9L0 0Z" fill="white"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="px-5 sm:px-0">
            <div className="project-3_bg relative ">
              <div className="px-8 bottom-4 absolute">
                <p className="text-white font-semibold text-2xl ">
                  High Rewards
                </p>
                <div className="flex flex-row items-center gap-4">
                  <div>
                    <p className="text-[16px] font-semibold text-white under-line">
                      View work{" "}
                    </p>
                  </div>
                  <div>
                    <svg
                      width="5"
                      height="9"
                      viewBox="0 0 5 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0L5 4.5L0 9L0 0Z" fill="white"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-14 px-14">
              <div className="flex flex-row gap-4 items-center mt-8">
                <div>
                  <h1 className="text-2xl text-center text-[#ff6d5a] font-bold">
                    View All Projects
                  </h1>
                </div>
                <div>
                  <svg
                    className="transform transition-transform duration-500 ease-in-out"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 14L14 1"
                      stroke="#ff6d5a"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M1 1H14V14"
                      stroke="#ff6d5a"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProjects;
