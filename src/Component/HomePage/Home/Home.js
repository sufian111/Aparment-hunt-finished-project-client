import React from "react";
import NavBarSection from "../../NavBarSection/NavBarSection";
import FooterSection from "../FooterSection/FooterSection";
import HeaderSection from "../HeaderSection/HeaderSection";
import HouseRentSection from "../HouseRentSection/HouseRentSection";
import ServiceSection from "../ServiceSection/ServiceSection";
import "./Home.css";

const Home = () => {
  return (
    <div className="homeBg">
      <NavBarSection></NavBarSection>
      <HeaderSection></HeaderSection>
      <HouseRentSection></HouseRentSection>
      <ServiceSection></ServiceSection>
      <FooterSection></FooterSection>
    </div>
  );
};

export default Home;
