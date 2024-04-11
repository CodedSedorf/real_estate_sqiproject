import React from "react";
import "../Components/Banner.css";
import barnner from "../assets/hero-image.png";
import tower from "../assets/tower.png";
import realty from "../assets/realty.png";
import equinix from "../assets/equinix.png";
import prologis from "../assets/prologis.png";

import { MdLocationOn } from "react-icons/md";
import CountUp from "react-countup";

const Barnner = () => {
  return (
    <>
      <div class="grid grid-cols-1 md:grid-cols-6 pt-6 items-center gap-10">
        <div class="md:col-span-3">
          <h1 className="font-body text-5xl flex-col items-end mb-5 text-start pl-10 leading-snug">
            <span className="text-orange">Discover</span> <br />{" "}
            <span className="text-primary">Most Comfortable</span> <br />{" "}
            <span className="text-primary">Property</span>
          </h1>
          <p className="font-body text-start pl-10 leading-relaxed text-lg z-10">
            Find a variety of properties that suit you very easily <br /> Forget
            all difficultiees in finding a residence for you
          </p>
          <label className="input input-bordered flex items-center gap-2 my-3 w-96 bg-slate-300 ml-0 sm:ml-10">
            <MdLocationOn className="text-[#1f3e72]" />
            <input type="text" className="grow border-none" placeholder="" />
            <button className="h-8 w-auto cursor-pointer bg-[#1f3e72] text-white sm:h-6 w-10">
              Search
            </button>
          </label>

          <div className="flex justify-around items-start">
            <div className="">
              <CountUp
                end={9000}
                duration={5}
                className=" text-3xl text-primary gap-0 font-body"
              />{" "}
              <span className="text-5xl text-orange">+</span>
              <p className="font-body text-10">Premium Product</p>
            </div>
            <div className="">
              <CountUp
                end={2000}
                duration={5}
                className="sm:text-1xl text-primary text-3xl text-primary gap-0 font-body"
              />{" "}
              <span className="text-5xl text-orange">+</span>
              <p>Happy Customers</p>
            </div>
            <div className="">
              <CountUp
                end={35}
                duration={5}
                className="sm:text-1xl text-primary text-3xl text-primary gap-0 font-body"
              />{" "}
              <span className="text-5xl text-orange">+</span>
              <p>Awards Winning</p>
            </div>
          </div>
        </div>
        <div class="image-container md:col-span-3 flex items-center justify-end w-80 md:w-96 h-96 md:h-112 overflow-hidden border-8 border-white border-opacity-30 rounded-b-3xl">
          <img
            src={barnner}
            alt="Your Image"
            class="barnner max-w-full h-auto"
          />
        </div>
      </div>

      <div className="flex lg:flex-row justify-between z-10 mt-5 sm:flex-col items-center">
        <img src={tower} alt="" className="w-28 h-28" />
        <img src={equinix} alt="" className="w-28 h-28" />
        <img src={prologis} alt="" className="w-28 h-28" />
        <img src={realty} alt="" className="w-28 h-28" />
      </div>
    </>
  );
};

export default Barnner;
