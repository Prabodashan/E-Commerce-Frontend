import React from "react";

import logoW from "../../Assets/logo-white.png";
import playStore from "../../Assets/play-store.png";
import appStore from "../../Assets/app-store.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col-1">
            <h3>Download Our App</h3>
            <p>Download App for Android and ios mobile phone.</p>
            <div className="app-logo">
              <img src={playStore} alt="playStore" />
              <img src={appStore} alt="appStore" />
            </div>
          </div>
          <div className="footer-col-2">
            <img src={logoW} alt="logo" />
            <p>
              Our Purpose is to Sustainably make the Pleasure and Benefits of
              Sports Accessible to the Many.
            </p>
          </div>
          <div className="footer-col-3">
            <h3>Useful Links</h3>
            <ul>
              <li>Coupons</li>
              <li>Blog Post</li>
              <li>Return Policy</li>
              <li>Join Affiliate</li>
            </ul>
          </div>
          <div className="footer-col-4">
            <h3>Follow Us</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="copyright">Copyright 2022 </p>
      </div>
    </div>
  );
};

export default Footer;
