import React from "react";
import valueImg from "../assets/value.png"
import "../Components/Values.css"


const Values = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 mt-20">
      <div className="md:col-span-1 semi-circle-container">
        <img src={valueImg} alt="" className="semi-circle-image"/>
      </div>
      <div className="md:col-span-3 justify-center items-center">
        <div className="grid grid-cols gap-8">
          <div className="col-start-2">
            <div className="flex-col leading-snug text-start items-start">
              <h2 className="font-body text-orange text-2xl">Our Value</h2>
              <h2 className="font-body font-bold text-[#1f3e72] text-4xl">
                Value We Give to You
              </h2>
              <p className="text-sm items-start">
                We are always ready to help by providing the best services for
                you. We believe a good place to live can make your life better.
              </p>
            </div>
            <div className="collapse flex flex-col leading-snug gap-4 my-4 text-white font-body font-bold">
              <div className="collapse bg-base-300 collapse-arrow border border-base-300">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-orange text-white-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                  Commitment to Property Value
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                  <p className="text-orange font-bold font-body">
                    Dedicated to Elevating Property Values: Our Promise to
                    Enhance Your Real Estate Investments!
                  </p>
                </div>
              </div>
              <div className="collapse bg-base-300 collapse-arrow border border-base-300">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-[#1f3e72] text-white-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                  Adapting to Market Dynamics
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                  <p className="text-[#1f3e72] font-bold font-body">
                    Embracing Market Dynamics: Our Pledge to Navigate Real
                    Estate Trends for Your Benefit!
                  </p>
                </div>
              </div>
              <div className="collapse bg-base-300 collapse-arrow border border-base-300">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-orange text-white-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                  Strategic Investments
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                  <p className="text-orange font-bold font-body">
                    Strategically Investing in Your Future: Our Commitment to
                    Tailored Real Estate Investment Solutions!
                  </p>
                </div>
              </div>
              <div className="collapse bg-base-300 collapse-arrow border border-base-300">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-[#1f3e72] text-white-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                  Empowering Homebuyers
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                  <p className="text-[#1f3e72] font-bold font-body">
                    Empowering Homeownership Dreams: Our Values Include
                    Providing Guidance and Support Every Step of the Way!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
