import React from "react";
import HelpBackground from "../assets/help_bg.png";
import HelpCard from "./General/HelpCard";
import { HOW_CAN_I_HELP_YOU } from "../utils/data";

const Help = () => {
  return (
    <div className="bg-no-repeat help-container-bg px-5 sm:px-0">
      <div className="container mx-auto py-14  lg:px-0 md:px-0 sm:px-6">
        <div className="mb-14">
          <p className="text-sm">Services</p>
          <h1 className="text-4xl font-bold">
            How can <span className="text-[#ff6d5a]">I help you</span>
          </h1>
        </div>
        <div className="pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 sm:gap-8">
            {HOW_CAN_I_HELP_YOU.map((item, index) => (
              <HelpCard
                key={index}
                itemNumber={index}
                title={item.title}
                description={item.description}
                percentage={item.percentage}
                icon={item.icon}
                width={item.width}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
