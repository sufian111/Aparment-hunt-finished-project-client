import React from "react";
import { useState } from "react";
import "./ServiceSection.css";
import apartment1 from "../../../Image/logos/apartment 1.png";
import lessee from "../../../Image/logos/lessee 1.png";
import affortable from "../../../Image/logos/affordable 1.png";
import SingleService from "./SingleService";

const ServiceSection = () => {
  const info = [
    {
      id: "1",
      name: "Wide Range of Properties",
      image: "https://i.ibb.co/7gYyJBw/apartment-1.png",
      description:
        "With a robust selection of popular properties on hand, as well as leading properties from experts.",
    },
    {
      id: "2",
      name: "Financing Made Easy",
      image: "https://i.ibb.co/7gYyJBw/apartment-1.png",
      description:
        "Our stress-free finance department that can find financial solutions to save you money.",
    },
    {
      id: "3",
      name: "Trusted by Thousands",
      image: "https://i.ibb.co/9hQHkW5/lessee-1.png",
      description:
        "10 new offers every day. 350 offers on site, trusted by a community of thousands of users.",
    },
  ];
  const [serviceData, setServiceData] = useState(info);
  return (
    <div className="container">
      <div className="m-3">
        <h3 className="text-center" style={{ fontFamily: "Poppins" }}>
          Service
        </h3>
        <h3 className="text-center headLine">
          We're an agency tailored to all <br /> clients' needs that always
          delivers
        </h3>
      </div>
      <div className="row">
        {serviceData.map((service) => (
          <SingleService service={service} key={service.id}></SingleService>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
