import React from "react";
import valueImg from "../assets/contact.jpg";
import "../Components/Values.css";
import { IoIosCall } from "react-icons/io";
import "../Components/Contactus.css";
import { TfiEmail } from "react-icons/tfi";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";

const Contactus = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-5 mt-20">
        <div className="md:col-span-3 justify-center items-center">
          <div className="grid grid-cols gap-8">
            <div className="col-start-2">
              <div className="flex-col leading-snug text-start items-start">
                <h2 className="font-body text-orange text-2xl">Our Contact</h2>
                <h2 className="font-body font-bold text-[#1f3e72] text-4xl">
                  Feel free to contact us
                </h2>
                <p className="text-sm items-start">
                We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better
                </p>
              </div>
              <div className="collapse flex flex-col leading-snug gap-4 my-4 text-white font-body font-bold">
                <div className="collapse bg-base-300 collapse-arrow border border-base-300">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title bg-[#1f3e72] text-white-content peer-checked:bg-secondary peer-checked:text-secondary-content hover:scale-105 transition-all direction-200">
                    <div className="flex gap-4 justify-center items-center text-5xl hover:scale-105 transition-all direction-200">
                      <IoIosCall />
                      <h6>Call</h6>
                    </div>
                  </div>
                  <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p className="text-[#1f3e72] text-2xl font-bold font-body bg-yellow-50">
                      <span>+234 (703) 256 6192</span> <br />
                      <span>+234 (703) 256 6192</span> <br />
                      <span>+234 (703) 256 6192</span>
                    </p>
                  </div>
                </div>
                <div className="collapse bg-base-300 collapse-arrow border border-base-300">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title bg-[#1f3e72] text-white-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <div className="flex gap-4 justify-center items-center text-5xl">
                    <TfiEmail />
                      <h6>Email</h6>
                    </div>
                  </div>
                  <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p className="text-[#1f3e72] text-2xl font-bold font-body bg-yellow-50">
                      <span>sedorfdlc@gmail.com</span> <br />
                      <span>dev_sedorf2023@gmail.com</span>
                    </p>
                  </div>
                </div>
                <div className="collapse bg-base-300 collapse-arrow border border-base-300">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title bg-[#1f3e72] text-white-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <div className="flex gap-4 justify-center items-center text-5xl">
                    <IoLogoWhatsapp />
                      <h6>Whatsapp</h6>
                    </div>
                  </div>
                  <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p className="text-[#1f3e72] text-2xl font-bold font-body bg-yellow-50">
                      <span>+234 (703) 256 6192</span>
                    </p>
                  </div>
                </div>
                <div className="collapse bg-base-300 collapse-arrow border border-base-300">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title bg-[#1f3e72] text-white-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <div className="flex gap-4 justify-center items-center text-5xl">
                    <FaLinkedin />
                      <h6>LinkedIn</h6>
                    </div>
                  </div>
                  <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p className="text-[#1f3e72] text-2xl font-bold font-body bg-yellow-50">
                      <span>Dev_Sedorf</span>
                    </p>
                  </div>
                </div>
                <div className="collapse bg-base-300 collapse-arrow border border-base-300">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title bg-[#1f3e72] text-white-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <div className="flex gap-4 justify-center items-center text-5xl">
                    <SiInstagram />
                      <h6>Instagram</h6>
                    </div>
                  </div>
                  <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p className="text-[#1f3e72] text-2xl font-bold font-body bg-yellow-50">
                      <span>Dev_Sedorf</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="image-container md:col-span-2 justify-center items-center mx-auto">
          <img src={valueImg} alt="" className="image" />
        </div>
      </div>
    </>
  );
};

export default Contactus;
