import React from "react";
import "./HeaderSection.css";
const HeaderSection = () => {
  return (
    <div className="headerBg">
      <div className="container ">
        <div className="positionCenter">
          <div className="">
            <p className="title">FIND YOUR HOUSE RENT</p>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6">
              <input className="searchInput" type="text" />
            </div>
            <div className="col-md-2 mt-2 m-md-0 text-center align-self-center ">
              <button className="button">Find Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
