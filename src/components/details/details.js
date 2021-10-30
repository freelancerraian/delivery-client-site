import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./details.css";

const Details = () => {
  const { _id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const ExactIteam = data.filter((td) => td._id === _id);

  return (
    <div>
      <div className="container">
        <h1 className="mt-5">Full Details</h1>
        <div className="row">
          <div className="col-12 dispatch cart mt-2 mb-5">
            <div className="cart-img">
              <img
                className="service-img img-thumbnail p-3"
                src={ExactIteam[0]?.img}
                alt=""
              />
            </div>
            <h1>{ExactIteam[0]?.name}</h1>
            <h2>Details</h2>
            <hr className="detail-hr mt-3 mb-3" />
            <h5>{ExactIteam[0]?.description}</h5>
            <hr className="detail-hr mt-3 mb-3" />
            <h5>{ExactIteam[0]?.price}</h5>
            <h5>{ExactIteam[0]?.resturent}</h5>
            <hr className="detail-hr mt-3 mb-3" />
            <h5>{ExactIteam[0]?.from}</h5>
            <hr className="detail-hr mt-3 mb-3" />
            <h5>{ExactIteam[0]?.to}</h5>
            <hr className="detail-hr mt-3 mb-3" />
          </div>
          <div className="Order mb-4 ml-3">
            <button>Get That Service</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
