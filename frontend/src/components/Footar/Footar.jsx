import React from "react";
import "./Footar.css";
import { assets } from "../../assets/assets";

const Footar = () => {
  return (
    <div className="footar" id="footar">
      <div className="footar-content">
        <div className="footar-content-left">
          <h1>Food App</h1>
          <p>
            We pay a 30% referral fee for any paying clients you refer to us.
            this includes any subsequent purchases. Contact us for further
            information on reselling.
          </p>
          <div className="footar-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footar-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footar-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1223987676</li>
            <li>cotact@foodapp.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footar-copyright">
        Copyright 2024 @ Foodapp.com - All Right Reserved
      </p>
    </div>
  );
};

export default Footar;
