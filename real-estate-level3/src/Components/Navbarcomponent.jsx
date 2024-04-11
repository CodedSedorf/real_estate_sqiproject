import React from "react";

const Navbarcomponent = () => {
  return (
    <div>
      <div className="navbar text-[#1f3e72] font-body">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="bg-secondary">Residencies</a>
              </li>
              <li>
                <a>Our Values</a>
              </li>
              <li>
                <a>Contact us</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl">DEV SEDORF</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Residencies</a>
            </li>
            <li>
              <a>Our Values</a>
            </li>
            <li>
              <a>Contact us</a>
            </li>
          </ul>
        </div>
        {/* {Button} */}
        <div className="navbar-end">
          <a className="btn">Get Started</a>
        </div>
      </div>
    </div>
  );
};

export default Navbarcomponent;
