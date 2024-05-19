import React, { useEffect, useState } from "react";

import Circle from "../assets/circle.png";
import CountingAnimation from "./General/CountingAnimation";
import Cup from "../assets/cup.svg";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import { Link as ScrollLink } from "react-scroll";
import UserImg from "../assets/Abu-Sufyan.jpeg";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > window.innerHeight) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }

      if (scrollY > 100 * 2) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className="container-fluid w-full bg-harmonies	  min-h-auto sm:min-h-80  bg-[url('https://devman-react.vercel.app/img/hero/1.jpg')] "
      id="home"
    >
      <div
        className={`container-fluid top-0 left-0 right-0 z-50 ease-in-out duration-300 ${
          sticky ? "bg-harmonies" : ""
        } ${sticky ? "fixed" : ""}`}
      >
        <div className="container mx-auto  ">
          <Navbar />
        </div>
      </div>
      <div className="container mx-auto relative pb-0 sm:pb-14">
        <div className="md:mt-10 lg:mt-14  sm:mt-0 grid grid-col-2 gap-16 sm:gap-8 md:gap-8 lg:gap-8 xl:gap-8  sm:grid-cols-1 lg:grid-cols-2 py-5 sm:py-10 md:py-15 lg:py-20 xl:py-20  px-4 text-white">
          <div className="mb-10 lg:mb-0 md:mb-0 xl:mb-0">
            <h1 className="text-4xl lg:text-7xl md:text-4xl  font-semibold mb-4">
              Abu Sufyan
            </h1>
            <h6 className=" text-lg lg:text-4xl md:text-2xl font-medium mb-4 lg:mb-12 md:mb-10">
              MERN-Stack Developer from Pakistan
            </h6>

            <p className="text-xl mb-4 lg:mb-8 md:mb-6">
              Transforming complex problems into elegant solutions. Embracing
              the art of programming to shape innovative solutions..
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.linkedin.com/in/muhammadabusufyan/ "
                className="bg-red-500   font-bold py-3 px-9 rounded-full mt-4 hover:bg-blue-800 transition duration-300 ease-in-out"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/sufyan468"
                className=" py-3 font-bold rounded-full mt-4 bg-blue-800 px-12 hover:bg-red-600 transition duration-300 ease-in-out"
                rel="noopener noreferrer"
                target="_blank"
              >
                Github
              </Link>
            </div>
          </div>
          <div className="sm:ps-0 lg:ps-44  hidden sm:flex">
            <div className="relative">
              <Image
                src={UserImg}
                alt="Cover"
                style={{
                  borderRadius: "12px",
                  height: "380px",
                  width: "380px",
                  objectFit: "cover",
                  objectPosition: "top center",
                }}
              />
              <div className="absolute  -top-14  -right-1 md:-right-14 lg:-right-14 xl:-right-14 bg-white p-4 rounded-xl">
                <Image src={Cup} alt="Cup" width={45} height={45} />
              </div>
              <div className="absolute bottom-2 lg:bottom-2 -left-1 md:-left-14 lg:-left-14 xl:-left-14 bg-white py-4 px-2 rounded-xl w-156 ">
                <div className="flex items-center gap-2">
                  <CountingAnimation
                    className="text-5xl font-bold text-blue-400 animate-number"
                    finalValue={4}
                    duration={1000}
                  />
                  <h3 className="text-1xl font-bold text-slate-800">
                    Years of <br /> Experience
                  </h3>
                </div>
              </div>
              {/*<div className="absolute -bottom-14 -left-14 d-sm-none">
                <Image src={Circle} alt="Circle" width={120} height={122} />
      </div> */}
              <div className="absolute bottom-8 -right-1 md:-right-14 lg:-right-14 xl:-right-14 bg-white py-4 px-2 rounded-xl w-156 ">
                <div className="flex items-center gap-3">
                  <CountingAnimation
                    className="text-5xl font-bold text-red-400"
                    finalValue={12}
                    duration={1000}
                  />
                  <h3 className="text-1xl font-bold text-slate-800">
                    Projects <br /> Completed
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
