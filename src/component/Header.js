import React, { Component } from 'react'
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import "./style.css";
 class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { };
      }
    render() {
        return (
            <div>
                  <header class="header-classic">
            <div class="container-xl">
              <div class="header-top">
                <div class="row align-items-center">
                  <div class="col-md-4 col-xs-12">
                    <Link class="navbar-brand" to="/">
                      <img src={logo} alt="logo" />
                    </Link>
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
                          <Link class="nav-link dropdown-toggle" to="/">
                            Home
                          </Link>
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
            </div>
        )
    }
}

export default Header