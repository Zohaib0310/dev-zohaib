import React, { FC } from "react";

import ProgressBar from "./General/ProgressBar";
import { SkillsType } from "../utils/types";

type SkillsProps = {
  data: SkillsType[];
  subtitle?: string;
  title: string;
  description?: string;
};

const Skills: FC<SkillsProps> = ({ data, subtitle, title, description }) => {
  return (
    <div className="w-100" id="experience">
      <div className="pt-4 pb-14 text-center font-medium ">
        <p className="text-red-500 font-bold pb-2">{subtitle}</p>
        <h1 className="text-4xl pb-5 font-bold text-slate-800">{title}</h1>
        <p className="text-slate-700">{description}</p>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid  gap-x-28 gap-y-12 pt-8 pb-24 grid-col-2  sm:grid-cols-1 lg:grid-cols-2 ">
          <div className="flex w-full content-between rounded-lg px-8 py-4 text-white shadow-xl bg-blue-600 border-red-500 border-l-2 hover:bg-blue-700 hover:text-white">
            <div className="flex-1">
              <span className="text-xl font-bold">➢ MTBC, Carecloud </span>
              <p>• ReactJS Developer </p>
              <p>• Feb 2023 – Present</p>
            </div>
          </div>

          <div className="flex w-full content-between rounded-lg px-8 py-4 text-white shadow-xl bg-green-600 border-red-500 border-l-2 hover:bg-green-700 hover:text-white">
            <div className="flex-1">
              <span className="text-xl font-bold">➢ Pikes Soft </span>
              <p>• ReactJS Developer </p>
              <p>• Sep 2022 – Feb 2023</p>
            </div>
          </div>

          <div className="flex w-full content-between rounded-lg px-8 py-4 text-white shadow-xl bg-purple-600 border-red-500 border-l-2 hover:bg-purple-700 hover:text-white">
            <div className="flex-1">
              <span className="text-xl font-bold">➢ Devigital Systems </span>
              <p>• MERN Stack Developer </p>
              <p>• Sep 2021 – Sep 2022</p>
            </div>
          </div>

          <div className="flex w-full content-between rounded-lg px-8 py-4 text-white shadow-xl bg-stone-600 border-red-500 border-l-2 hover:bg-stone-700 hover:text-white">
            <div className="flex-1">
              <span className="text-xl font-bold">➢ Argon Tech</span>
              <p>• React Native Developer </p>
              <p>• Mar 2020 – Sep 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
