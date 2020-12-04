import React from "react";
import "./SingleHouseRent.css";
import mapPointers from "../../../Image/logos/map-marker-alt-solid 1.png";
import bed from "../../../Image/logos/bed 1.png";
import bathIcons from "../../../Image/logos/bath 1.png";
import { Link } from "react-router-dom";
const SingleHouseRent = ({ house }) => {
  const { image, name, place, bedRooms, bathRoom, price, id } = house;

  return (
    <div className="col-md-4 cardContent">
      <div className="cardContent">
        <div class="card" style={{ width: "22rem" }}>
          <img src={image} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">{name} </h5>
            <img class="mapPointer" src={mapPointers} alt="" />
            <p className="ml-2" style={{ display: "inline-block" }}>
              {place}
            </p>
            <div className="row">
              <div className="col-6">
                <img style={{ width: "20%" }} src={bed} alt="" />
                <p className="ml-2" style={{ display: "inline-block" }}>
                  {bedRooms}{" "}
                </p>
              </div>
              <div className="col-6">
                <img style={{ width: "20%" }} src={bathIcons} alt="" />
                <p className="ml-2" style={{ display: "inline-block" }}>
                  {bathRoom}{" "}
                </p>
              </div>
            </div>
            <p className="price">{price}</p>

            <Link to={`/house/${id}`}>
              <button className="button">Show Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleHouseRent;
