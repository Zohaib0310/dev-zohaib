import React, { FC } from "react";
import Image from "next/image";
import CountingAnimation from "./General/CountingAnimation";
import { ContributionsType, WorkEthicsType } from "../utils/types";

type WorkEthicsProps = {
  data: WorkEthicsType[];
  contributions: ContributionsType[];
};

const WorkEthics: FC<WorkEthicsProps> = ({ data, contributions }) => {
  return (
    <div id="about">
      <div className="container mx-auto py-14 px-4">
        <div className="grid sm:gap-10 lg:gap-20 md:gap-15 xl:gap-20 py-4 lg:py-14 xl:py-14 md:py-14 grid-col-3  sm:grid-cols-1 lg:grid-cols-3 ">
          {data.length > 0 &&
            data.map((item: WorkEthicsType, index: number) => (
              <div className="mb-10">
                <div
                  key={index + 10}
                  className="flex item-center justify-between pb-8"
                >
                  <div>
                    <p className="text-red-500 text-xl font-semibold">
                      {item.count}
                    </p>
                    <h3 className="text-2xl font-bold text-slate-800">
                      {item.title}
                    </h3>
                  </div>
                  <div>
                    <Image
                      src={item.img}
                      alt="Dedication"
                      height={60}
                      width={60}
                    />
                  </div>
                </div>
                <hr />
                <p className="pt-6 text-slate-800">{item.description}</p>
              </div>
            ))}
        </div>
      </div>
      <div className="w-100 relative ">
        {/*<div className="container px-4 mx-auto py-0 md:py-14 lg:py-14 xl:py-14 ">
          <div className="grid gap-10  md:gap-20 lg:gap-20 xl:gap-20 py-0 md:py-8 lg:py-14 xl:py-14 grid-cols-1  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 ">
            {contributions.length > 0 &&
              contributions.map((item: ContributionsType) => (
                <div key={item.id} className="mb-10">
                  <div className="flex items-start justify-start gap-2 pb-8">
                    <div>
                      <CountingAnimation
                        className="text-red-500 text-7xl font-bold"
                        finalValue={item.count}
                        duration={1000}
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-800">
                        {item.description} <br />
                        {item.secondDescription}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
          </div>
              </div> */}
        <div className="container px-4 mx-auto py-0 md:py-14 lg:py-14 xl:py-14 ">
          <div className="grid gap-10 md:gap-20 lg:gap-20 xl:gap-20 py-0 md:py-8 lg:py-14 xl:py-14 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 ">
            {contributions.length > 0 &&
              contributions.map((item: ContributionsType, index: number) => (
                <div
                  key={index + 1}
                  className={`mb-10 ${
                    index === 2
                      ? "sm:col-start-2 md:col-start-3 lg:colo-start-3 xl:color-start-3 sm:justify-self-center"
                      : ""
                  }`}
                >
                  <div className="flex items-start justify-start gap-2 pb-8">
                    <div>
                      <CountingAnimation
                        className="text-red-500 text-5xl md:text-7xl lg:text-7xl xl:text-7xl  font-bold"
                        finalValue={item.count}
                        duration={1000}
                      />
                    </div>
                    <div>
                      <h3 className="text-md md:text-1xl lg:text-2xl xl:text-2xl font-semibold text-slate-800">
                        {item.description} <br />
                        {item.secondDescription}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="project-shape " />
      </div>
    </div>
  );
};

export default WorkEthics;
