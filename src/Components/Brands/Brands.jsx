import React from "react";

import brand1 from "../../Assets/logo-coca-cola.png";
import brand2 from "../../Assets/logo-godrej.png";
import brand3 from "../../Assets/logo-oppo.png";
import brand4 from "../../Assets/logo-paypal.png";
import brand5 from "../../Assets/logo-philips.png";

const Brands = () => {
  return (
    <div className="brands">
      <div className="small-container">
        <div className="row">
          <div className="col-5">
            <img src={brand1} alt="brand" />
          </div>
          <div className="col-5">
            <img src={brand2} alt="brand" />
          </div>
          <div className="col-5">
            <img src={brand3} alt="brand" />
          </div>
          <div className="col-5">
            <img src={brand4} alt="brand" />
          </div>
          <div className="col-5">
            <img src={brand5} alt="brand" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
