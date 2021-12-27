import React, { Component } from "react";
import moment from "moment";
import logo from "../images/logo.svg";
import wave from "../images/wave.svg";
import ads from "../images/ads/ad-360.png";
import { gethomePost } from "../api/postApi";
import "./style.css";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      categories: [],
      popularPost: [],
      hashtags: [],
      celebration_posts: [],
      currentPage: 1,
      totalPage: null,
      loader: true,
    };
  }

  componentDidMount = () => {
    gethomePost().then((res) => {
      console.log(res);
      this.setState({ loader: false });
      const pageNo = Math.ceil(res.data.posts.total / res.data.posts.per_page);
      this.setState({
        users: res.data.posts.data.user,
        categories: res.data.categories,
        popularPost: res.data.popular_posts,
        celebration_posts: res.data.celebration_posts,
        hashtags: res.data.hashtags,
        totalPage: pageNo,
      });

      console.log(this.state.popularPost);
    });
  };
  render() {
    return (
      <div>
        <div class="sidebar">
          <div class="widget rounded">
            <div
              class="widget-about data-bg-image text-center"
              data-bg-image="images/map-bg.png"
            >
              <img src={logo} alt="logo" class="mb-4" />
              <p class="mb-4">
                Hello, We’re content writer who is fascinated by content
                fashion, celebrity and lifestyle. We helps clients bring the
                right content to the right people.
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
            {this.state.popularPost.length > 0 &&
              this.state.popularPost.map((ele, index) => (
                <div class="widget-content mb-3" key={index}>
                  <div class="post post-list-sm circle">
                    <div class="thumb circle">
                      <a href="blog-single.html">
                        <div class="inner">
                          <img
                            src={ele.post_thumbnail}
                            alt="post-title"
                            style={{ width: "70px", height: "60px" }}
                          />
                        </div>
                      </a>
                    </div>
                    <div class="details clearfix">
                      <h6 class="post-title my-0">
                        <a href="blog-single.html">{ele.post_title}</a>
                      </h6>
                      <ul class="meta list-inline mt-1 mb-0">
                        <li class="list-inline-item">
                          {moment(ele.created_at).format("Do MMM YY")}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div class="widget rounded">
            <div class="widget-header text-center">
              <h3 class="widget-title">Categories</h3>
              <img src={wave} class="wave" alt="wave" />
            </div>
            <div class="widget-content">
              {this.state.categories.length > 0 &&
                this.state.categories.map((ele, index) => (
                  <ul class="list">
                    <li>
                      <Link to={`/getCategory/${ele.id}`}>{ele.cat_title}</Link>
                      <span>({ele.total_posts})</span>
                    </li>
                  </ul>
                ))}
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
                <button class="btn btn-default btn-full" type="submit">
                  Sign Up
                </button>
              </form>
              <span class="newsletter-privacy text-center mt-3">
                By signing up, you agree to our <a href="#">Privacy Policy</a>
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
                {this.state.celebration_posts.length > 0 &&
                  this.state.celebration_posts.map((ele, index) => (
                    <div class="post post-carousel" key={index}>
                      <div class="thumb rounded">
                        <a
                          href="category.html"
                          class="category-badge position-absolute"
                        >
                          {ele.category_title}
                        </a>
                        <a href="blog-single.html">
                          <div class="inner">
                            <img
                              src={ele.post_thumbnail}
                              alt="post-title"
                              style={{
                                width: "300px",
                                height: "150px",
                              }}
                            />
                          </div>
                        </a>
                      </div>
                      <h5 class="post-title mb-0 mt-4">
                        <a href="blog-single.html">{ele.post_title}</a>
                      </h5>
                      <ul class="meta list-inline mt-2 mb-0">
                        <li class="list-inline-item">
                          <a href="#">{ele.user_name}</a>
                        </li>
                        <li class="list-inline-item">
                          {moment(ele.created_at).format("Do MMM YY")}{" "}
                        </li>
                      </ul>
                    </div>
                  ))}
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
            {this.state.hashtags.length > 0 &&
              this.state.hashtags.map((ele, index) => (
                <div class="widget-content" key={index}>
                  <a href="#" class="tag">
                    #{ele.hashtag}
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
