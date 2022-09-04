import React from "react";

import category1 from "../../Assets/category-1.jpg";
import category2 from "../../Assets/category-2.jpg";
import category3 from "../../Assets/category-3.jpg";

const Featured = () => {
  return (
    <div className="categories">
      <div className="small-container">
        <div className="row">
          <div className="col-3">
            <img src={category1} alt="category" />
          </div>
          <div className="col-3">
            <img src={category2} alt="category" />
          </div>
          <div className="col-3">
            <img src={category3} alt="category" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
