import moment from "moment";
import React, { Component } from "react";
import { singlePost_api } from "../api/postApi";
import Crousel from "./Crousel";
import Feed from "./Feed";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

class SinglePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singlepost: "",
      category: "",
      hashtags: [],
      post_description: "",
      post_thumbnail: null,
      post_title: "",
      user: "",
      profile_pic: null,
      created_at: "",
      hashtag: [],
      comment: [],
    };
  }
  componentDidMount = () => {
    singlePost_api(this.props.match.params.id).then((res) => {
      console.log(res);
      this.setState({
        singlepost: res.data.posts,
        post_thumbnail: res.data.posts.post_thumbnail,
        post_title: res.data.posts.post_title,
        category: res.data.posts.category.cat_title,
        user_name: res.data.posts.user.name,
        user_profile: res.data.posts.user.profile_pic,
        post_description: res.data.posts.post_description,
        created_at: res.data.posts.created_at,
        hashtag: res.data.posts.hashtags,
        user: this.state.category,
        comment: res.data.posts.comments,
      });
      console.log(this.state.comment);
    });
  };
  render() {
    return (
      <div>
        <Header />
        <section class="main-content mt-3">
          <div class="container-xl">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li class="breadcrumb-item">
                  <a href="#">Inspiration</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  {this.state.category}
                </li>
              </ol>
            </nav>

            <div class="row gy-4">
              <div class="col-lg-8">
                <div class="post post-single">
                  <div class="post-header">
                    <h1 class="title mt-0 mb-3">{this.state.post_title}</h1>
                    <ul class="meta list-inline mb-0">
                      <li class="list-inline-item">
                        <a href="#">
                          <img
                            src={`https://blogmitiz.readandfeel.in/assets/${this.state.user_profile}`}
                            class="author"
                            alt="author"
                            style={{
                              width: "50px",
                              height: "50px",
                              borderRadius: "40px",
                            }}
                          />
                          {this.state.user_name}
                        </a>
                      </li>

                      <li class="list-inline-item">
                        <a href="#">#Trending</a>
                      </li>
                      <li class="list-inline-item">
                        {" "}
                        {moment(this.state.created_at).format("Do MMM YY")}
                      </li>
                    </ul>
                  </div>

                  <div class="featured-image">
                    <img
                      src={this.state.post_thumbnail}
                      style={{ width: "729px", height: "400px" }}
                      alt="post-title"
                    />
                  </div>

                  <div class="post-content clearfix">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: this.state.post_description,
                      }}
                    />
                  </div>

                  <div class="post-bottom">
                    <div class="row d-flex align-items-center">
                      <div class="col-md-6 col-12 text-center text-md-start">
                        {this.state.hashtag.length > 0 &&
                          this.state.hashtag.map((ele, index) => (
                            <a href="#" class="tag" key={index}>
                              {ele.hashtag}
                            </a>
                          ))}
                      </div>
                      <div class="col-md-6 col-12">
                        <ul
                          class="
                    social-icons
                    list-unstyled list-inline
                    mb-0
                    float-md-end
                  "
                        >
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
                    </div>
                  </div>
                </div>
                <div class="spacer" data-height="50"></div>

                <div class="section-header">
                  <h3 class="section-title">Comments (3)</h3>
                  <img src="images/wave.svg" class="wave" alt="wave" />
                </div>
{this.state.comment.length > 0 && this.state.comment.map((ele,index)=>(


                <div class="comments bordered padding-30 rounded">
                  <ul class="comments">
                    <li class="comment rounded">
                      <div class="thumb">
                        <img src={`https://blogmitiz.readandfeel.in/assets/${this.state.user_profile}`} alt="John Doe"
                         style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "40px",
                        }}
                        />
                      </div>
                      <div class="details">
                        <h4 class="name">
                          <a href="#">{ele.user_name}</a>
                        </h4>
                        <span class="date"> {moment(ele.created_at).format("Do MMM YY")}</span>
                        <p>
                         {ele.comment_text}
                        </p>
                        <a href="#" class="btn btn-default btn-sm">
                          Reply
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                ))}
                <div class="spacer" data-height="50"></div>
                <div class="section-header">
                  <h3 class="section-title">Leave Comment</h3>
                  <img src="images/wave.svg" class="wave" alt="wave" />
                </div>

                <div class="comment-form rounded bordered padding-30">
                  <form id="comment-form" class="comment-form" method="post">
                    <div class="messages"></div>

                    <div class="row">
                      <div class="column col-md-12">
                        <div class="form-group">
                          <textarea
                            name="InputComment"
                            id="InputComment"
                            class="form-control"
                            rows="4"
                            placeholder="Your comment here..."
                            required="required"
                          ></textarea>
                        </div>
                      </div>

                      <div class="column col-md-6">
                        <div class="form-group">
                          <input
                            type="email"
                            class="form-control"
                            id="InputEmail"
                            name="InputEmail"
                            placeholder="Email address"
                            required="required"
                          />
                        </div>
                      </div>

                      <div class="column col-md-6">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            name="InputWeb"
                            id="InputWeb"
                            placeholder="Website"
                            required="required"
                          />
                        </div>
                      </div>

                      <div class="column col-md-12">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            id="InputName"
                            name="InputName"
                            placeholder="Your name"
                            required="required"
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      name="submit"
                      id="submit"
                      value="Submit"
                      class="btn btn-default"
                    >
                      Submit
                    </button>
                  </form>
                </div>

                <div class="about-author padding-30 rounded">
                  <div class="thumb">
                    <img src="images/other/avatar-about.png" alt="Katen Doe" />
                  </div>
                  <div class="details">
                    <h4 class="name">
                      <a href="#">Katen Doe</a>
                    </h4>
                    <p>
                      Hello, I m a content writer who is fascinated by content
                      fashion, celebrity and lifestyle. She helps clients bring
                      the right content to the right people.
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

                <div class="spacer" data-height="50"></div>
              </div>

              <div class="col-lg-4">
                <Sidebar />
              </div>
            </div>
          </div>
        </section>
        <Feed />
        <Footer />
      </div>
    );
  }
}

export default SinglePost;
