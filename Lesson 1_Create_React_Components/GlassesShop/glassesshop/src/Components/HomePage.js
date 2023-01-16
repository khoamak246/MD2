import React, { Component } from "react";
import About from "./About";
import Glasses from "./Glasses";
import Shop from "./Shop";
import Contact from "./Contact";

export class HomePage extends Component {
  render() {
    return (
      <>
        {/* loader  */}
        <div className="loader_bg">
          <div className="loader">
            <img src="images/loading.gif" alt="#" />
          </div>
        </div>
        {/* end loader */}
        {/* header */}
        <header>
          {/* header inner */}
          <div className="header">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                  <div className="full">
                    <div className="center-desk">
                      <div className="logo">
                        <a href="index.html">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Logo-Rikkei.png"
                            alt="#"
                            style={{ height: 70 }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                  <nav className="navigation navbar navbar-expand-md navbar-dark ">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarsExample04"
                      aria-controls="navbarsExample04"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div
                      className="collapse navbar-collapse"
                      id="navbarsExample04"
                    >
                      <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                          <a className="nav-link" href="index.html">
                            Home
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="about.html">
                            About
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="glasses.html">
                            Our Glasses
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="shop.html">
                            Shop
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="contact.html">
                            Contact Us
                          </a>
                        </li>
                        <li className="nav-item d_none login_btn">
                          <a className="nav-link" href="#">
                            Login
                          </a>
                        </li>
                        <li className="nav-item d_none">
                          <a className="nav-link" href="#">
                            Register
                          </a>
                        </li>
                        <li className="nav-item d_none sea_icon">
                          <a className="nav-link" href="#">
                            <i
                              className="fa fa-shopping-bag"
                              aria-hidden="true"
                            />
                            <i className="fa fa-search" aria-hidden="true" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* end header inner */}
        {/* end header */}
        {/* banner */}
        <section className="banner_main">
          <div id="banner1" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#banner1" data-slide-to={0} className="active" />
              <li data-target="#banner1" data-slide-to={1} />
              <li data-target="#banner1" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <div className="carousel-caption">
                    <div className="text-bg">
                      <h1>
                        {" "}
                        <span className="blu">
                          Welcome <br />
                        </span>
                        To Rikkei Shop
                      </h1>
                      <figure>
                        <img src="images/banner_img.png" alt="#" />
                      </figure>
                      <a className="read_more" href="#">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="carousel-caption">
                    <div className="text-bg">
                      <h1>
                        {" "}
                        <span className="blu">
                          Welcome <br />
                        </span>
                        To Rikkei Shop
                      </h1>
                      <figure>
                        <img src="images/banner_img.png" alt="#" />
                      </figure>
                      <a className="read_more" href="#">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="carousel-caption">
                    <div className="text-bg">
                      <h1>
                        {" "}
                        <span className="blu">
                          Welcome <br />
                        </span>
                        To Rikkei Shop
                      </h1>
                      <figure>
                        <img src="images/banner_img.png" alt="#" />
                      </figure>
                      <a className="read_more" href="#">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#banner1"
              role="button"
              data-slide="prev"
            >
              <i className="fa fa-arrow-left" aria-hidden="true" />
            </a>
            <a
              className="carousel-control-next"
              href="#banner1"
              role="button"
              data-slide="next"
            >
              <i className="fa fa-arrow-right" aria-hidden="true" />
            </a>
          </div>
        </section>
        {/* end banner */}
        {/* about section */}
        <About />
        {/* about section */}
        {/* Our  Glasses section */}
        <Glasses />
        {/* end Our  Glasses section */}
        {/* Our shop section */}
        <Shop />
        {/* end Our shop section */}
        {/* clients section */}
        <div className="clients">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage">
                  <h2>What say our clients</h2>
                  <p>
                    orem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut la
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div
                  id="myCarousel"
                  className="carousel slide clients_Carousel "
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#myCarousel"
                      data-slide-to={0}
                      className="active"
                    />
                    <li data-target="#myCarousel" data-slide-to={1} />
                    <li data-target="#myCarousel" data-slide-to={2} />
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="container">
                        <div className="carousel-caption ">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="clients_box">
                                <figure>
                                  <img src="images/our.png" alt="#" />
                                </figure>
                                <h3>Sandy Mark</h3>
                                <p>
                                  It is a long established fact that a reader
                                  will be distracted by the readable content of
                                  a page when looking at its layout. The point
                                  of using Lorem Ipsum is that it has a
                                  more-or-less normal distribution of letters,It
                                  is a long established fact a more-or-less
                                  normal distribution of letters,
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="container">
                        <div className="carousel-caption">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="clients_box">
                                <figure>
                                  <img src="images/our.png" alt="#" />
                                </figure>
                                <h3>Sandy Mark</h3>
                                <p>
                                  It is a long established fact that a reader
                                  will be distracted by the readable content of
                                  a page when looking at its layout. The point
                                  of using Lorem Ipsum is that it has a
                                  more-or-less normal distribution of letters,It
                                  is a long established fact a more-or-less
                                  normal distribution of letters,
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="container">
                        <div className="carousel-caption">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="clients_box">
                                <figure>
                                  <img src="images/our.png" alt="#" />
                                </figure>
                                <h3>Sandy Mark</h3>
                                <p>
                                  It is a long established fact that a reader
                                  will be distracted by the readable content of
                                  a page when looking at its layout. The point
                                  of using Lorem Ipsum is that it has a
                                  more-or-less normal distribution of letters,It
                                  is a long established fact a more-or-less
                                  normal distribution of letters,
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#myCarousel"
                    role="button"
                    data-slide="prev"
                  >
                    <i className="fa fa-angle-left" />
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#myCarousel"
                    role="button"
                    data-slide="next"
                  >
                    <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end clients section */}
        {/* contact section */}
        <Contact />
        {/* end contact section */}
        {/*  footer */}
        <footer>
          <div className="footer">
            <div className="container">
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <ul className="location_icon">
                    <li>
                      <a href="#">
                        <i className="fa fa-map-marker" aria-hidden="true" />
                      </a>
                      <br /> Location
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-phone" aria-hidden="true" />
                      </a>
                      <br /> +01 1234567890
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-envelope" aria-hidden="true" />
                      </a>
                      <br /> demo@gmail.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="copyright">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <p>
                      © 2019 All Rights Reserved. Design by
                      <a href="https://html.design/"> Free Html Templates</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* end footer */}
        {/* Javascript files*/}
        {/* sidebar */}
        {/* google map js */}
        {/* end google map js */}
      </>
    );
  }
}

export default HomePage;
