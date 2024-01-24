import React from "react";

// importing the css file
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut nulla
            molestiae ratione, hic explicabo nemo. Quaerat esse quia quisquam
            aliquam enim repellat doloremque, earum, omnis quis a quidem at
            dolor, rerum sunt est modi quo ea asperiores.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut nulla
            molestiae ratione, hic explicabo nemo. Quaerat esse quia quisquam
            aliquam enim repellat doloremque, earum, omnis quis a quidem at
            dolor, rerum sunt est modi quo ea asperiores.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Anistore</span>
          <span className="copyright">
            &copy; Copyright 2023. All Rights Reserved
            {/* &copy; give © symbol */}
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="payment methods" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
