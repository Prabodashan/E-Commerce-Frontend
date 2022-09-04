import React from "react";

import user1 from "../../Assets/user-1.png";
import user2 from "../../Assets/user-2.png";
import user3 from "../../Assets/user-3.png";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="small-container">
        <div className="row">
          <div className="col-3">
            <i className="fa fa-quote-left"></i>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              autem numquam delectus cumque exercitationem sequi, quasi
              consectetur quaerat voluptatum ipsa distinctio vitae dolores nulla
              eligendi quis, in, aut quam earum.
            </p>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <img src={user1} alt="user" />
            <h3>Sean Parker</h3>
          </div>
          <div className="col-3">
            <i className="fa fa-quote-left"></i>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              autem numquam delectus cumque exercitationem sequi, quasi
              consectetur quaerat voluptatum ipsa distinctio vitae dolores nulla
              eligendi quis, in, aut quam earum.
            </p>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <img src={user2} alt="user" />
            <h3>Mike Smith</h3>
          </div>
          <div className="col-3">
            <i className="fa fa-quote-left"></i>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              autem numquam delectus cumque exercitationem sequi, quasi
              consectetur quaerat voluptatum ipsa distinctio vitae dolores nulla
              eligendi quis, in, aut quam earum.
            </p>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <img src={user3} alt="user" />
            <h3>Mabel Joe</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
