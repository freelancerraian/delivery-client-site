import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./details.css";
import { useForm } from "react-hook-form";
import axios from "axios";

const Details = () => {
  const { _id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://obscure-shelf-23886.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const ExactIteam = data.filter((td) => td._id === _id);

  // From 
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    axios
      .post("https://obscure-shelf-23886.herokuapp.com/checkout", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Order Complate");
          reset();
        }
      });
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm12">
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
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm12">
            <div className="Order mb-4 ml-3 mt-5">
              <form onSubmit={handleSubmit(onSubmit)} className="add">
                <input
                  className="mt-3"
                  {...register("name", { required: true, maxLength: 20 })}
                  placeholder="Reciver Name"
                />
                <input
                  className="mt-3"
                  {...register("deliveryplace", { required: true })}
                  placeholder="Delivery Place"
                />
                <input
                  className="mt-3"
                  {...register("item1", { required: true })}
                  placeholder="Food Item Name"
                />
                <textarea
                  className="mt-3"
                  {...register("item2")}
                  placeholder="Food Item 2"
                />
                <input
                  className="mt-3"
                  type="number"
                  {...register("itemamount")}
                  placeholder="Item Amount"
                />
                <button type="submit" className="addbtn mt-2">
                  <nav className="btn-nav">
                    <ul className="btn-ul">
                      <li className="btn-li">
                        Order
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </li>
                    </ul>
                  </nav>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
