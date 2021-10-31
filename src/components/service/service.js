import React from "react";
import "./service.css";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, time, name, price, restrurent, from, to,   description, img } = service;

  return (
    <div className="p-4 pb-3 col-lg-6 col-md-6 col-sm-12">
      <div className="service">
        <div className="mt-2">
          <img className="service-img img-thumbnail p-3" src={img} alt="" />
        </div>
        <h3 className="px-3">{name}</h3>
        <h4 className="px-3">Resturent Name: {restrurent}</h4>
        <h5 className="px-3">Delivary Charge: {price}</h5>
        <p className="px-3">
          <span className="fw-bold">Description:</span> {description}
        </p>
        <p className="px-3">
          <span className="fw-bold">From: </span>
          {from}
        </p>
        <p className="px-3">
          <span className="fw-bold">To: </span> {to}
        </p>
        <p className="px-3">
          <span className="fw-bold">Time: </span>
          {time} Hours
        </p>
        <div className="d-flex justify-content-center">
          <Link to={`/details/${_id}`}>
            <button className="btn service-btn m-2">
              Get {name.toLowerCase()} Service
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;