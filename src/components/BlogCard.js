import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-1.jpg" className="img-fluid" alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">1 dec, 2022</p>
          <h5 className="title">A beautiful sunday morning renaissance</h5>
          <p className="desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
            quisquam rerum sint enim ea modi voluptatum mollitia voluptatem
            recusandae non eveniet, optio repellat laborum id.
          </p>
          <Link className="button">Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
