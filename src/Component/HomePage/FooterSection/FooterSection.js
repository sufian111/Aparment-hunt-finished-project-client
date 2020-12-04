import React from "react";
import { Link } from "react-router-dom";
import "./FooterSection.css";

const FooterSection = () => {
  return (
    <div className="FooterBg p-5">
      <div className="container ">
        <div className="row">
          <div className="col-md-4 ">
            <p className="placeDetails">
              H#340 (4th Floor), Road #24, New DOHS, Mohakhali, Dhaka,
              Bangladesh Phone: 018XXXXXXXX <br /> E-mail: info@company.com
            </p>
          </div>
          <div className="col-md-2 companyDetails">
            <p>Company</p>
            <Link className="LinkStyle" to="/about">
              About
            </Link>
            <Link className="LinkStyle" to="/site">
              Site Map
            </Link>
            <Link className="LinkStyle" to="/support">
              Support Center
            </Link>
            <Link className="LinkStyle" to="/terms">
              Terms Conditions
            </Link>
          </div>
          <div className="col-md-2 companyDetails">
            <p>Quick </p>
            <Link className="LinkStyle" to="/rentals">
              Rentals
            </Link>
            <Link className="LinkStyle" to="/sales">
              Sales
            </Link>
            <Link className="LinkStyle" to="/contact">
              Contact
            </Link>
            <Link className="LinkStyle" to="/blog">
              Our Blog
            </Link>
          </div>
          <div className="col-md-4 companyDetails">
            <p>Quick </p>
            <h5>
              We are the top real estate agency in Sydney, with agents available
              to answer any question 24/7.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
