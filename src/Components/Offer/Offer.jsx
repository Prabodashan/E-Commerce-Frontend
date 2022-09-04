import React from "react";

import exc from "../../Assets/exclusive.png";

const Offer = () => {
  return (
    <div className="offer">
      <div className="small-container">
        <div className="row">
          <div className="col-2">
            <img src={exc} alt="exclusive" className="offer-img" />
          </div>
          <div className="col-2">
            <p>Exclusively Available on Store</p>
            <h1>Smart Band 4</h1>
            <small>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              magnam magni dolores exercitationem, itaque dicta, nisi odit
              nesciunt impedit quaerat ad aliquam consequatur illum voluptates
              recusandae deserunt in placeat ipsum.
            </small>
            <br />
            <a href="iii" className="btn">
              Buy Now &#8594;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
