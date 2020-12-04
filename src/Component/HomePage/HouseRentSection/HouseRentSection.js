import React, { useState } from "react";
import "./HouseRentSection.css";
import SingleHouseRent from "./SingleHouseRent";
const HouseRentSection = () => {
  const info = [
    {
      id: "1",
      image: "https://i.ibb.co/sydNHXW/Rectangle-394.png",
      name: "Washington Avenue",
      place: "Nasirabad H/S, Chattogram",
      bedRooms: "3 Bedrooms",
      bathRoom: "2 Bathroom",
      price: "$ 194",
    },
    {
      id: "2",
      image: "https://i.ibb.co/sydNHXW/Rectangle-394.png",
      name: "Washington Avenue",
      place: "Nasirabad H/S, Chattogram",
      bedRooms: "3 Bedrooms",
      bathRoom: "2 Bathroom",
      price: "$ 194",
    },
    {
      id: "3",
      image: "https://i.ibb.co/sydNHXW/Rectangle-394.png",
      name: "Washington Avenue",
      place: "Nasirabad H/S, Chattogram",
      bedRooms: "3 Bedrooms",
      bathRoom: "2 Bathroom",
      price: "$ 194",
    },
  ];
  const [data, setData] = useState(info);
  return (
    <div className="container">
      <div className="m-3">
        <h3 className="text-center" style={{ fontFamily: "Poppins" }}>
          House Rent
        </h3>
        <h3 className="text-center headLine">
          Discover the latest Rent <br /> available today
        </h3>
      </div>
      <div className="row">
        {data.map((house) => (
          <SingleHouseRent house={house} key={house.id}></SingleHouseRent>
        ))}
      </div>
    </div>
  );
};

export default HouseRentSection;
