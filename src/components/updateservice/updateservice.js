import React, { useEffect, useState } from "react";
import './updateservice.css';
import AddService from "../addservice/addservice";

const UpdateService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://obscure-shelf-23886.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  // DELETE User
  const handleDeleteServices = (id) => {
    const proceed = window.confirm("Are You Sure ?");
    if (proceed) {
      const url = `https://obscure-shelf-23886.herokuapp.com/services/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Delete Success");
            const remainingServices = services.filter(
              (services) => services._id !== id
            );
            setServices(remainingServices);
          }
        });
    }
  };

  return (
    <div>
      <div className="container">
        <h1>Manage Service</h1>
        <div className="mg d-flex mt-5">
          <div className="">
            {services.map((services) => (
              <div key={services._id} className="d-flex m-2 up">
                <h3>
                  <span>Service Name :</span> {services.name}
                </h3>
                <hr />
                <h5 className="ml-2">
                  <span>Resturent Name :</span> {services.restrurent}
                </h5>
                <button
                  className="update-btn ml-3"
                  onClick={() => handleDeleteServices(services._id)}
                >
                  <i class="fas fa-times"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
        <AddService></AddService>
      </div>
    </div>
  );
};

export default UpdateService;
