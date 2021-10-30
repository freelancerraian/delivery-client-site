import React from 'react';
import './footer.css';
import logo from '../../img/logo.png'
import footer1 from '../../img/footer1.jpg'
import footer2 from '../../img/footer2.jpg'

const Footer = () => {
    return (
      <div className="footer p-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <img className="custom-logo" src={logo} alt="" />
              <p>
                One is to focus on the quality of your meat. If you can call out
                organic beef, sustainable farming.
              </p>
              <p>
                <span className="foot-span">Phone: </span>+92300-400-2333
              </p>
              <p>
                <span className="foot-span">Email: </span>restaurant@gmail.com
              </p>
              <div className="icons">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-linkedin"></i>
                <i class="fab fa-instagram-square"></i>
                <i class="fab fa-youtube"></i>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <h1>Latest News</h1>
              <div className="row">
                <div className="col-3">
                  <img className="footer-img" src={footer1} alt="" />
                </div>
                <div className="col-9">
                  <h5 className="footer-news">
                    Barbecue Burgers With Sweet Chili Mayo
                  </h5>
                  <p>March 19, 2021</p>
                </div>
              </div>
              <div className="row pt-2">
                <div className="col-3">
                  <img className="footer-img" src={footer2} alt="" />
                </div>
                <div className="col-9">
                  <h5 className="footer-news">
                    Grilled Chicken & Kabab With Tomato Sauce
                  </h5>
                  <p>March 19, 2021</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 service-foot pt-3">
              <h3>Our Service</h3>
              <h6>All Vendors</h6>
              <h6>Blog</h6>
              <h6>Home 1</h6>
              <h6>Home 2</h6>
              <h6>Main Home</h6>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 links pt-3">
              <h3>Useful Links</h3>
              <h6>All Vendors</h6>
              <h6>Home 1</h6>
              <h6>Home 2</h6>
              <h6>Home 3</h6>
              <h6>Pricing Plan</h6>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;