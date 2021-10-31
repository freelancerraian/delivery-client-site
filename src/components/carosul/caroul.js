import React from 'react';
import './carosul.css'
import pic1 from '../../img/pic1.jpg'
import pic2 from '../../img/pic2.jpg'
import pic3 from '../../img/pic3.jpg'
import pic4 from '../../img/pic4.jpg'

const Caroul = () => {
  return (
    <div>
      <div>
        <section id="feedback" className="text-white mb-5">
          <div className="container">
            <div className="section-title">
              <h3 className="text-center ">Feedback</h3>
              <hr className="hr-style" />
            </div>
            <div className="row my-5">
              <div className="col-lg-12">
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-ride="carousel"
                  data-interval="3000"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="0"
                      className="active"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="1"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="2"
                    ></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Maiores similique quos aliquam minima, delectus
                        animi pariatur architecto non voluptatem? Aliquam?
                      </p>
                      <img
                        className="feedback-img img-thumbnail rounded-circle mb-3"
                        src={pic1}
                        alt=""
                      />
                      <h6>David</h6>
                    </div>
                    <div className="carousel-item">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Maiores similique quos aliquam minima, delectus
                        animi pariatur architecto non voluptatem? Aliquam?
                      </p>
                      <img
                        className="feedback-img img-thumbnail rounded-circle mb-3"
                        src={pic2}
                        alt=""
                      />
                      <h6>Backhum</h6>
                    </div>
                    <div className="carousel-item">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Maiores similique quos aliquam minima, delectus
                        animi pariatur architecto non voluptatem? Aliquam?
                      </p>
                      <img
                        className="feedback-img img-thumbnail rounded-circle mb-3"
                        src={pic3}
                        alt=""
                      />
                      <h6>Milar</h6>
                    </div>
                    <div className="carousel-item">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Maiores similique quos aliquam minima, delectus
                        animi pariatur architecto non voluptatem? Aliquam?
                      </p>
                      <img
                        className="feedback-img img-thumbnail rounded-circle mb-3"
                        src={pic4}
                        alt=""
                      />
                      <h6>Jhon</h6>
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Caroul;