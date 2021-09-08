import React from "react";
import { Link } from "react-router-dom";

const NewsItem = (props) => {
  return (
    <>
      <div className="card">
        <img src={props.imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            {props.title ? props.title.slice(0, 35) : ""}
          </h5>
          <p className="card-text">
            {props.description ? props.description.slice(0, 110) : ""}
          </p>
          <p className="card-text">
            <small className="text-muted">
              By {props.auther} on {props.date}
            </small>
          </p>
          <Link
            to={{ pathname: `${props.newsUrl}` }}
            target="_blank"
            className="btn btn-sm btn-primary"
          >
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
