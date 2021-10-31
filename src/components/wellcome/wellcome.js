import React from "react";
import "./wellcome.css";

const Wellcome = () => {
  return (
    <div className="wellcome">
      <div className="container">
        <div className="row main-well">
          <div className="col-6 "></div>
          <div className="col-6">
            <div className="row">
              <div className="col-6">
                <div className="well p-2">
                  <h2>WellCome</h2>
                </div>
              </div>
              <div className="col-6"></div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="texts p-2">
                  <h1 className="care">We Protect</h1>
                  <h3>Your Product</h3>
                  <p>
                    What are Products and Services? A product is a tangible item
                    that is put on the market for acquisition, attention, or
                    consumption, while a service is an intangible item, which
                    arises from the output of one or more individuals. ... In
                    most cases services are intangible, but products are not
                    always tangible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wellcome;
