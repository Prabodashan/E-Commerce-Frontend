import React from "react";
import { Link } from "react-router-dom";

import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="news letter" />
                <h2 className="mb-0 text-white">Sign up for NewsLetter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address..."
                  aria-label="Your Email Address..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white md-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  No: 123 Near Villa North,
                  <br />
                  North path <br />
                  PinCode: 159357
                </address>
                <a
                  href="tel: +94 357 895 232"
                  className="mt-3 d-block mb-3 text-white"
                >
                  +94 357 895 232
                </a>
                <a
                  href="mailto: infor@chabyte.dev.com"
                  className="mt-3 d-block mb-3 text-white"
                >
                  infor@chabyte.dev.com
                </a>
                <div className="social-icons d-flex align-items-center gap-30 mt-4">
                  <Link className="text-white" to="">
                    <BsLinkedin className="fs-4" />
                  </Link>
                  <Link className="text-white" to="">
                    <BsInstagram className="fs-4" />
                  </Link>
                  <Link className="text-white" to="">
                    <BsGithub className="fs-4" />
                  </Link>
                  <Link className="text-white" to="">
                    <BsYoutube className="fs-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white md-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Terms & Conditions</Link>
                <Link className="text-white py-2 mb-1">Blog</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white md-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Search</Link>
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">FAQ</Link>
                <Link className="text-white py-2 mb-1">Contact US</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white md-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()} Powered by abc.dev
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
