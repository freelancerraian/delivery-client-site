import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import "./details.css";

const Details = () => {
  const { _id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://obscure-shelf-23886.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const ExactIteam = data.filter((td) => td._id === _id);

  return (
    <div>
      <div className="container">
        <h1 className="mt-5">Full Details</h1>
        <div className="row cart mb-5 mt-5">
          <div className="col-12 dispatch mt-2 mb-5">
            <div className="cart-img">
              <img
                className="details-img img-thumbnail p-3"
                src={ExactIteam[0]?.img}
                alt=""
              />
            </div>
            <h1>{ExactIteam[0]?.name}</h1>
            <h4>Description</h4>
            <hr className="detail-hr mt-3 mb-3" />
            <h5>{ExactIteam[0]?.description}</h5>
            <h6>Delivery Charge : {ExactIteam[0]?.price}</h6>
            <h6>Restrurent : {ExactIteam[0]?.restrurent}</h6>
            <h6>From: {ExactIteam[0]?.from}</h6>
            <h6>To: {ExactIteam[0]?.to}</h6>
            <h6>Time: {ExactIteam[0]?.time}Hours</h6>
          </div>
          <div className="Order mb-4 ml-3">
            <NavLink to="/checkout">
              <button>Order Now</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
