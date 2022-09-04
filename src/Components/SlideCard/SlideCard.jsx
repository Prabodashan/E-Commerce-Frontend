import React from "react";

import img1 from "../../Assets/image1.png";

const SlideCard = () => {
  return (
    <div className="row">
      <div className="col-2">
        <h1>Give your workout a New Style</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          accusantium et quidem ipsa inventore atque, maiores voluptate amet
        </p>
        <a href="iii" className="btn">
          Explore Now &#8594;
        </a>
      </div>
      <div className="col-2">
        <img src={img1} alt="banner" />
      </div>
    </div>
  );
};

export default SlideCard;
