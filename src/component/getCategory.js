import React, { Component } from "react";
import { gethomePost, singleCategory } from "../api/postApi";
import "./style.css";
import moment from "moment";
import logo from "../images/logo.svg";
import wave from "../images/wave.svg";
import ads from "../images/ads/ad-360.png";
import { Link } from "react-router-dom";
import { Spinner } from "reactstrap";

import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Footer from "./Footer";
import Header from "./Header";

class getCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singlecategory: [],
      loader: true,
    };
  }

  componentDidMount = () => {
    singleCategory(this.props.match.params.id).then((res) => {
      console.log(res);
      this.setState({
        singlecategory: res.data.posts.data,
        loader: false,
      });
      console.log(this.state.singlecategory);
    });
  };

  createElements(number) {
    var elements = [];
    for (var i = 1; i <= number; i++) {
      if (this.state.currentPage == i) {
        elements.push(
          <li class="page-item active">
            <a class="page-link" href="#">
              {i}
            </a>
          </li>
        );
      } else {
        elements.push(
          <li class="page-item">
            <Link to="#" onClick={this.loadMore} class="page-link" href="#">
              {i}
            </Link>
          </li>
        );
      }
    }
    return elements;
  }
  render() {
    return (
      <div>
         <Header />
        <section class="main-content">
          <div class="container-xl">
            <div class="row gy-4">
              {this.state.loader ? (
                <Spinner
                  children={false}
                  class="spinner1"
                  style={{ marginLeft: "500px" }}
                />
              ) : (
                <div class="col-lg-8">
                  {this.state.singlecategory.length > 0 &&
                    this.state.singlecategory.map((ele, index) => (
                      <div
                        class="post post-classic rounded bordered"
                        key={index}
                      >
                        <div class="thumb top-rounded">
                          <Link
                           to={`/getCategory/${ele.category.id}`}
                            class="category-badge lg position-absolute"
                          >
                            {ele.category.cat_title}
                          </Link>
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
                                <img
                                  src={`https://blogmitiz.readandfeel.in/assets/${ele.user.profile_pic}`}
                                  class="author"
                                  alt="author"
                                  style={{
                                    width: "50px",
                                    height: "50px",
                                    borderRadius: "40px",
                                  }}
                                />
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
                      {this.createElements(this.state.totalPage)}
                      {/* <li class="page-item active" aria-current="page">
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
            </li> */}
                    </ul>
                  </nav>
                </div>
              )}
              <div class="col-lg-4">
                <Sidebar />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default getCategory;
