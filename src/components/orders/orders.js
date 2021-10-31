import React, { useEffect, useState } from 'react';
// import Order from '../order/order';
import './orders.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://obscure-shelf-23886.herokuapp.com/checkout")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  // DELETE order
  const handleDeleteCheckout = (id) => {
    const proceed = window.confirm("Are You Sure ?");
    if (proceed) {
      const url = `https://obscure-shelf-23886.herokuapp.com/checkout/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Delete Success");
            const remainingcheckout = orders.filter(
              (checkout) => checkout._id !== id
            );
            setOrders(remainingcheckout);
          }
        });
    }
  };

  return (
    <div className="container">
      <h1>All Orders </h1>
      <div className="">
        <div className="row">
          {orders.map((order) => (
            // <Order key={orders._id} orders={orders}></Order>
            <div className="col-lg-6 col-md-6 col-sm-12 mt-5 mb-5">
              <div className="order p-3 m-5">
                <h1>Order</h1>
                <h3>Reciver Name : {order.name}</h3>
                <h5>Place : {order.deliveryplace}</h5>
                <p>Item Name : {order.item1}</p>
                <p>Item 2 : {order.item2}</p>
                <p>Item Amount : {order.itemamount}</p>
                <button
                  className="cancel-btn"
                  onClick={() => handleDeleteCheckout(order._id)}
                >
                  Cancel Order <i class="fas fa-times"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;