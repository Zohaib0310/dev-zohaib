import React, { FC } from "react";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  percentage: number | string;
  icon: string;
  width: string;
  itemNumber?: number | undefined;
}

const HelpCard: FC<Props> = ({
  title,
  description,
  percentage,
  icon,
  width,
  itemNumber,
}) => {
  return (
    <div className=" group bg-[linear-gradient(180deg,#fff0 12.5%,#fff)] relative helpCard-shadow rounded-se-xl rounded-ss-xl w-100 transition-all duration-200 ease-in-out transform hover:-translate-y-3 ">
      <div className=" absolute -top-10  left-6 flex items-center p-2 w-14 h-14 shadow-lg bg-white border border-white justify-center rounded-full">
        <Image src={icon} alt="Icon" width={20} height={20} />
      </div>

      <div className="mt-16 px-4">
        <h1 className="font-bold mb-6 text-[28px] text-[#12103e]">{title}</h1>

        <p className=" text-md text-[#767682] text-[16px] font-medium">
          {description}
        </p>
        <div className="mt-10 mb-5 flex items-center justify-between">
          <p className="text-sm text-gray-400 font-medium">Explore</p>
          <div className="w-40 h-1 bg-slate-400 group-hover:bg-orange-500 transition  duration-700 hover:translate-x-3" />
          <div className="flex items-center justify-center w-8 h-8 bg-[#ff6d5a1a] group-hover:bg-orange-500 rounded-full ml-3">
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" group-hover:text-white text-[#ff6d5a] transition-colors duration-200"
            >
              <path
                d="M1 10L10 1"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M1 1H10V10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className=" text-center  px-4 mb-2">
        <p className=" text-sm  font-medium text-[#ff6d5a]">{percentage}</p>
      </div>
      <div className="w-full h-1.5  bg-[#d3d0ee]">
        <div
          className={`${width} h-full text-center text-xs text-white bg-[linear-gradient(59deg,#342ead,#ff6d5a)]`}
        />
      </div>
    </div>
  );
};

export default HelpCard;
