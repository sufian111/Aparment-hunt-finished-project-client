import React from "react";
import "./SingleService.css";
const SingleService = ({ service }) => {
  const { name, description, id, image } = service;
  return (
    <div className="col-md-4">
      <div className="serviceDiv text-center ml-4 ml-md-2">
        <img className="image-fluid cardImage" src={image} alt="" />
        <p className="cardTitle">{name} </p>
        <p className="cardDescription">{description} </p>
      </div>
    </div>
  );
};

export default SingleService;
