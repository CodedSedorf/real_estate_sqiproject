import React from "react";
import "../Components/Cardss.css"

const Cardss = ({ item }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="w-auto h-72" src={item.image} alt="Shoes"/>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-body text-[#1f3e72]">{item.name}</h2>
        <p className="text-1 -z-20 font-body">{item.detail}</p>
        <div className="card-actions">
        <p><span className="text-2xl font-body font-bold text-orange z">$</span><span className="text-2xl">{item.price}</span></p>
        </div>
      </div>
    </div>
  );
};

export default Cardss;
