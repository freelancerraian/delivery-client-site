import React, { useEffect, useState } from "react";
import Service from "../service/service";
import "./services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div id="services">
      <div className="container">
        <h2 className="mt-5">Our services</h2>
        <div className="service-container row">
          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
