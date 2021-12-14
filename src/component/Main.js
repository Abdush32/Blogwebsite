import React, { Component } from "react";
import "./style.css";
import moment from "moment";
import logo from "../images/logo.svg";
import wave from "../images/wave.svg";
import ads from "../images/ads/ad-360.png";
import ads2 from "../images/ads/ad-750.png";
import insta1 from "../images/insta/insta-1.jpg";
import insta2 from "../images/insta/insta-2.jpg";
import insta3 from "../images/insta/insta-3.jpg";
import insta4 from "../images/insta/insta-4.jpg";
import insta5 from "../images/insta/insta-5.jpg";
import insta6 from "../images/insta/insta-6.jpg";
import editor from "../images/posts/editor-lg.jpg";
import author from "../images/other/author-sm.png";
import trending1 from "../images/posts/trending-sm-1.jpg";
import trendinglg from "../images/posts/trending-lg-1.jpg";
import postlg1 from "../images/posts/post-lg-2.jpg";
import cro from "../images/widgets/widget-carousel-1.jpg";
import tabs1 from "../images/posts/tabs-1.jpg";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { gethomePost } from "../api/postApi";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainPost: [],
      myPost: [],
      users:[]
    };
  }

  componentDidMount = () => {
    gethomePost().then((res) => {
      console.log(res);
      this.setState({
        mainPost: res.data.banner_posts,
        myPost: res.data.posts.data,
        users:  res.data.posts.data.user,
      });
      console.log(this.state.users);
    });
  };

  render() {
    let storedata = JSON.parse(localStorage.getItem("data"));
    return (
      <div>
        <div class="site-wrapper">
          <div class="main-overlay"></div>

          <header class="header-classic">
            <div class="container-xl">
              <div class="header-top">
                <div class="row align-items-center">
                  <div class="col-md-4 col-xs-12">
                    <a class="navbar-brand" href="classic.html">
                      <img src={logo} alt="logo" />
                    </a>
                  </div>

                  <div class="col-md-8 d-none d-md-block">
                    <ul
                      class="social-icons list-unstyled list-inline mb-0 float-end"
                      style={{ display: "flex", justifyContent: "end" }}
                    >
                      <li class="list-inline-item">
                        <a href="#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#">
                          <i class="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#">
                          <i class="fa fa-instagram"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#">
                          <i class="fa fa-pinterest"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#">
                          <i class="fa fa-medium"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#">
                          <i class="fa fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <nav class="navbar navbar-expand-lg">
              <div class="header-bottom  w-100">
                <div class="container-xl">
                  <div class="d-flex align-items-center">
                    <div class="collapse navbar-collapse flex-grow-1">
                      <ul class="navbar-nav">
                        <li class="nav-item dropdown active">
                          <a class="nav-link dropdown-toggle" href="index.html">
                            Home
                          </a>
                          <ul class="dropdown-menu">
                            <li>
                              <a class="dropdown-item" href="index.html">
                                Magazine
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="personal.html">
                                Personal
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="personal-alt.html">
                                Personal Alt
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="minimal.html">
                                Minimal
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="classic.html">
                                Classic
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="category.html">
                            Lifestyle
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="category.html">
                            Inspiration
                          </a>
                        </li>
                        <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle" href="#">
                            Pages
                          </a>
                          <ul class="dropdown-menu">
                            <li>
                              <a class="dropdown-item" href="category.html">
                                Category
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="blog-single.html">
                                Blog Single
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="blog-single-alt.html"
                              >
                                Blog Single Alt
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="about.html">
                                About
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="contact.html">
                                Contact
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="contact.html">
                            Contact
                          </a>
                        </li>
                        <Link to="/Signin" class="nav-item">
                          <a class="nav-link" href="#">
                            Login
                          </a>
                        </Link>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </header>

          <section class="hero-carousel">
            <div class="container-xl">
              <div class="post-carousel-lg">
                <div class="post featured-post-xl">
                  <div class="details clearfix">
                    <a href="category.html" class="category-badge lg">
                      Lifestyle
                    </a>
                  </div>
                  <a href="#">
                    <div class="thumb rounded">
                      <Carousel>
                        {this.state.mainPost.length > 0 &&
                          this.state.mainPost.map((ele, index) => (
                            <Carousel.Item key={index}>
                              <img
                                className="d-block w-100"
                                src={ele.post_thumbnail}
                                alt="First slide"
                                style={{
                                  height: "500px",
                                  borderRadius: "15px",
                                }}
                              />
                              <Carousel.Caption>
                                <h3 class="textone">{ele.post_title}</h3>
                                <h5>{ele.category_title}</h5>
                                <p>
                                  {ele.user_name}.&nbsp;&nbsp;
                                  {moment(ele.created_at).format("Do MMM YY")}
                                </p>
                              </Carousel.Caption>
                            </Carousel.Item>
                          ))}
                      </Carousel>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section class="main-content">
            <div class="container-xl">
              <div class="row gy-4">
                <div class="col-lg-8">
                  {this.state.myPost.length > 0 &&
                    this.state.myPost.map((ele, index) => (
                      <div class="post post-classic rounded bordered" key={index}>
                        <div class="thumb top-rounded">
                          <a
                            href="category.html"
                            class="category-badge lg position-absolute"
                          >
                            Lifestyle
                          </a>
                          <span class="post-format">
                            <i class="fa fa-picture-o" aria-hidden="true"></i>
                          </span>

                          <a href="blog-single.html">
                            <div class="inner">
                              <img
                                src={`https://blogmitiz.readandfeel.in/assets/${ele.post_thumbnail}`}
                                style={{ width: "729px", height: "400px" }}
                                alt="post-title"
                              />
                            </div>
                          </a>
                        </div>
                        <div class="details">
                          <ul class="meta list-inline mb-0">
                            <li class="list-inline-item">
                              <a href="#">
                                <img src={`https://blogmitiz.readandfeel.in/assets/${ele.user.profile_pic}`}
                                 class="author"  alt="author" style={{width:"50px",height:"50px",borderRadius:"40px"}}/>
                                {ele.user_name}
                              </a>

                            </li>
                            <li class="list-inline-item">
                              {moment(ele.created_at).format("Do MMM YY")}
                            </li>
                            <li class="list-inline-item">
                              <i class="far fa-comment"></i> (0)
                            </li>
                          </ul>
                          <h5 class="post-title mb-3 mt-3">
                            <a href="blog-single.html">{ele.post_title}</a>
                          </h5>
                          <p class="excerpt mb-0">
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia, there live
                            the blind texts. Separated they live in
                            Bookmarksgrove right at the coast of the Semantics,
                            a large language ocean.
                          </p>
                        </div>
                        <div class="post-bottom clearfix d-flex align-items-center">
                          <div class="social-share me-auto">
                            <button class="toggle-button icon-share"></button>
                            <ul class="icons list-unstyled list-inline mb-0">
                              <li class="list-inline-item">
                                <a href="#">
                                  <i class="fab fa-facebook-f"></i>
                                </a>
                              </li>
                              <li class="list-inline-item">
                                <a href="#">
                                  <i class="fab fa-twitter"></i>
                                </a>
                              </li>
                              <li class="list-inline-item">
                                <a href="#">
                                  <i class="fab fa-linkedin-in"></i>
                                </a>
                              </li>
                              <li class="list-inline-item">
                                <a href="#">
                                  <i class="fab fa-pinterest"></i>
                                </a>
                              </li>
                              <li class="list-inline-item">
                                <a href="#">
                                  <i class="fab fa-telegram-plane"></i>
                                </a>
                              </li>
                              <li class="list-inline-item">
                                <a href="#">
                                  <i class="far fa-envelope"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="float-end d-none d-md-block">
                            <a href="blog-single.html" class="more-link">
                              Continue reading<i class="icon-arrow-right"></i>
                            </a>
                          </div>
                          <div className="more-button d-block d-md-none float-end">
                            <a href="blog-single.html">
                              <span class="icon-options"></span>
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}

                  <nav>
                    <ul class="pagination justify-content-center">
                      <li class="page-item active" aria-current="page">
                        <span class="page-link">1</span>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          3
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div class="col-lg-4">
                  <div class="sidebar">
                    <div class="widget rounded">
                      <div
                        class="widget-about data-bg-image text-center"
                        data-bg-image="images/map-bg.png"
                      >
                        <img src={logo} alt="logo" class="mb-4" />
                        <p class="mb-4">
                          Hello, We’re content writer who is fascinated by
                          content fashion, celebrity and lifestyle. We helps
                          clients bring the right content to the right people.
                        </p>
                        <ul class="social-icons list-unstyled list-inline mb-0">
                          <li class="list-inline-item">
                            <a href="#">
                              <i class="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a href="#">
                              <i class="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a href="#">
                              <i class="fab fa-instagram"></i>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a href="#">
                              <i class="fab fa-pinterest"></i>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a href="#">
                              <i class="fab fa-medium"></i>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a href="#">
                              <i class="fab fa-youtube"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="widget rounded">
                      <div class="widget-header text-center">
                        <h3 class="widget-title">Popular Posts</h3>
                        <img src={wave} class="wave" alt="wave" />
                      </div>
                      <div class="widget-content">
                        <div class="post post-list-sm circle">
                          <div class="thumb circle">
                            <span class="number">1</span>
                            <a href="blog-single.html">
                              <div class="inner">
                                <img src={tabs1} alt="post-title" />
                              </div>
                            </a>
                          </div>
                          <div class="details clearfix">
                            <h6 class="post-title my-0">
                              <a href="blog-single.html">
                                3 Easy Ways To Make Your iPhone Faster
                              </a>
                            </h6>
                            <ul class="meta list-inline mt-1 mb-0">
                              <li class="list-inline-item">29 March 2021</li>
                            </ul>
                          </div>
                        </div>

                        <div class="post post-list-sm circle">
                          <div class="thumb circle">
                            <span class="number">2</span>
                            <a href="blog-single.html">
                              <div class="inner">
                                <img src={tabs1} alt="post-title" />
                              </div>
                            </a>
                          </div>
                          <div class="details clearfix">
                            <h6 class="post-title my-0">
                              <a href="blog-single.html">
                                An Incredibly Easy Method That Works For All
                              </a>
                            </h6>
                            <ul class="meta list-inline mt-1 mb-0">
                              <li class="list-inline-item">29 March 2021</li>
                            </ul>
                          </div>
                        </div>

                        <div class="post post-list-sm circle">
                          <div class="thumb circle">
                            <span class="number">3</span>
                            <a href="blog-single.html">
                              <div class="inner">
                                <img src={tabs1} alt="post-title" />
                              </div>
                            </a>
                          </div>
                          <div class="details clearfix">
                            <h6 class="post-title my-0">
                              <a href="blog-single.html">
                                10 Ways To Immediately Start Selling Furniture
                              </a>
                            </h6>
                            <ul class="meta list-inline mt-1 mb-0">
                              <li class="list-inline-item">29 March 2021</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="widget rounded">
                      <div class="widget-header text-center">
                        <h3 class="widget-title">Explore Topics</h3>
                        <img src={wave} class="wave" alt="wave" />
                      </div>
                      <div class="widget-content">
                        <ul class="list">
                          <li>
                            <a href="#">Lifestyle</a>
                            <span>(5)</span>
                          </li>
                          <li>
                            <a href="#">Inspiration</a>
                            <span>(2)</span>
                          </li>
                          <li>
                            <a href="#">Fashion</a>
                            <span>(4)</span>
                          </li>
                          <li>
                            <a href="#">Politic</a>
                            <span>(1)</span>
                          </li>
                          <li>
                            <a href="#">Trending</a>
                            <span>(7)</span>
                          </li>
                          <li>
                            <a href="#">Culture</a>
                            <span>(3)</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="widget rounded">
                      <div class="widget-header text-center">
                        <h3 class="widget-title">Newsletter</h3>
                        <img src={wave} class="wave" alt="wave" />
                      </div>
                      <div class="widget-content">
                        <span class="newsletter-headline text-center mb-3">
                          Join 70,000 subscribers!
                        </span>
                        <form>
                          <div class="mb-2">
                            <input
                              class="form-control w-100 text-center"
                              placeholder="Email address…"
                              type="email"
                            />
                          </div>
                          <button
                            class="btn btn-default btn-full"
                            type="submit"
                          >
                            Sign Up
                          </button>
                        </form>
                        <span class="newsletter-privacy text-center mt-3">
                          By signing up, you agree to our{" "}
                          <a href="#">Privacy Policy</a>
                        </span>
                      </div>
                    </div>

                    <div class="widget rounded">
                      <div class="widget-header text-center">
                        <h3 class="widget-title">Celebration</h3>
                        <img src={wave} class="wave" alt="wave" />
                      </div>
                      <div class="widget-content">
                        <div class="post-carousel-widget">
                          <div class="post post-carousel">
                            <div class="thumb rounded">
                              <a
                                href="category.html"
                                class="category-badge position-absolute"
                              >
                                How to
                              </a>
                              <a href="blog-single.html">
                                <div class="inner">
                                  <img src={cro} alt="post-title" />
                                </div>
                              </a>
                            </div>
                            <h5 class="post-title mb-0 mt-4">
                              <a href="blog-single.html">
                                5 Easy Ways You Can Turn Future Into Success
                              </a>
                            </h5>
                            <ul class="meta list-inline mt-2 mb-0">
                              <li class="list-inline-item">
                                <a href="#">Katen Doe</a>
                              </li>
                              <li class="list-inline-item">29 March 2021</li>
                            </ul>
                          </div>

                          <div class="post post-carousel">
                            <div class="thumb rounded">
                              <a
                                href="category.html"
                                class="category-badge position-absolute"
                              >
                                How to
                              </a>
                              <a href="blog-single.html">
                                <div class="inner">
                                  <img src={cro} alt="post-title" />
                                </div>
                              </a>
                            </div>
                            <h5 class="post-title mb-0 mt-4">
                              <a href="blog-single.html">
                                5 Easy Ways You Can Turn Future Into Success
                              </a>
                            </h5>
                            <ul class="meta list-inline mt-2 mb-0">
                              <li class="list-inline-item">
                                <a href="#">Katen Doe</a>
                              </li>
                              <li class="list-inline-item">29 March 2021</li>
                            </ul>
                          </div>
                        </div>

                        <div class="slick-arrows-bot">
                          <button
                            type="button"
                            data-role="none"
                            class="carousel-botNav-prev slick-custom-buttons"
                            aria-label="Previous"
                          >
                            <i class="icon-arrow-left"></i>
                          </button>
                          <button
                            type="button"
                            data-role="none"
                            class="carousel-botNav-next slick-custom-buttons"
                            aria-label="Next"
                          >
                            <i class="icon-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div class="widget no-container rounded text-md-center">
                      <span class="ads-title">- Sponsored Ad -</span>
                      <a href="#" class="widget-ads">
                        <img src={ads} alt="Advertisement" />
                      </a>
                    </div>

                    <div class="widget rounded">
                      <div class="widget-header text-center">
                        <h3 class="widget-title">Tag Clouds</h3>
                        <img src={wave} class="wave" alt="wave" />
                      </div>
                      <div class="widget-content">
                        <a href="#" class="tag">
                          #Trending
                        </a>
                        <a href="#" class="tag">
                          #Video
                        </a>
                        <a href="#" class="tag">
                          #Featured
                        </a>
                        <a href="#" class="tag">
                          #Gallery
                        </a>
                        <a href="#" class="tag">
                          #Celebrities
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div class="instagram">
            <div class="container-xl">
              <a href="#" class="btn btn-default btn-instagram">
                @Katen on Instagram
              </a>

              <div class="instagram-feed d-flex flex-wrap">
                <div class="insta-item col-sm-2 col-6 col-md-2">
                  <a href="#">
                    <img src={insta1} alt="insta-title" />
                  </a>
                </div>
                <div class="insta-item col-sm-2 col-6 col-md-2">
                  <a href="#">
                    <img src={insta2} alt="insta-title" />
                  </a>
                </div>
                <div class="insta-item col-sm-2 col-6 col-md-2">
                  <a href="#">
                    <img src={insta3} alt="insta-title" />
                  </a>
                </div>
                <div class="insta-item col-sm-2 col-6 col-md-2">
                  <a href="#">
                    <img src={insta4} alt="insta-title" />
                  </a>
                </div>
                <div class="insta-item col-sm-2 col-6 col-md-2">
                  <a href="#">
                    <img src={insta5} alt="insta-title" />
                  </a>
                </div>
                <div class="insta-item col-sm-2 col-6 col-md-2">
                  <a href="#">
                    <img src={insta6} alt="insta-title" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <footer>
            <div class="container-xl">
              <div class="footer-inner">
                <div class="row d-flex align-items-center gy-4">
                  <div class="col-md-4">
                    <span class="copyright">
                      © 2021 Katen. Template by ThemeGer.
                    </span>
                  </div>

                  <div class="col-md-4 text-center">
                    <ul class="social-icons list-unstyled list-inline mb-0">
                      <li class="list-inline-item">
                        <a href="#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#">
                          <i class="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#">
                          <i class="fab fa-pinterest"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#">
                          <i class="fab fa-medium"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#">
                          <i class="fab fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="col-md-4">
                    <a href="#" id="return-to-top" class="float-md-end">
                      <i class="icon-arrow-up"></i>Back to Top
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Main;
