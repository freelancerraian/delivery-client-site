import React from 'react';
import './home.css';
import parson1 from '../../img/parson1.jpg';
import parson2 from '../../img/parson2.jpg';
import parson3 from '../../img/parson3.jpg';

const Home = () => {
    return (
      <div>
        <div className="" id="feedback">
          <section className="text-white container">
            <div className="section-title">
              <h3 className="text-center ">Feedback</h3>
              <hr className="hr-style mt-4" />
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
                        src={parson1}
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
                        src={parson2}
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
                        src={parson3}
                        alt=""
                      />
                      <h6>Angel</h6>
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
          </section>
        </div>
      </div>
    );
};

export default Home;