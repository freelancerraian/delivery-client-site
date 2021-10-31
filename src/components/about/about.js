import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="container-fluid p-0">
      <div class="cover">
        <div class="content text-center">
          <h1>About Us</h1>
          <p>
            Physical Characteristics. Every individual is not physically created
            the same.
          </p>
        </div>
      </div>
      <div class="container-fluid text-center">
        <div class="numbers d-flex flex-md-row flex-wrap justify-content-center">
          <div class="rect">
            <h1>2345</h1>
            <p>Oder Complate </p>
          </div>
          <div class="rect">
            <h1>40</h1>
            <p>Delivery Man</p>
          </div>
          <div class="rect">
            <h1>1056</h1>
            <p>Users</p>
          </div>
          <div class="rect">
            <h1>100</h1>
            <p>Panding</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
