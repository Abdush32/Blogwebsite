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
import { Spinner } from "reactstrap";
import Header from "./Header";
import Crousel from "./Crousel";
import Posts from "./Posts";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { connect } from "react-redux";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainPost: [],
      myPost: [],
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
    console.log(this.props);
    gethomePost().then((res) => {
      console.log(res);
      this.setState({ loader: false });
      const pageNo = Math.ceil(res.data.posts.total / res.data.posts.per_page);
      this.setState({
        mainPost: res.data.banner_posts,
        myPost: res.data.posts.data,
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

  componentDidUpdate = (prev, prevState) => {
    if (prevState.currentPage !== this.state.currentPage) {
      gethomePost(this.state.currentPage).then((res) => {
        const pageNo = Math.ceil(
          res.data.posts.total / res.data.posts.per_page
        );
        this.setState({
          mainPost: res.data.banner_posts,
          myPost: res.data.posts.data,
          users: res.data.posts.data.user,
          currentPage: res.data.posts.current_page,
          totalPage: pageNo,
        });
      });
    }
  };

  loadMore = () => {
    console.log("loder pages");
    this.setState({ currentPage: this.state.currentPage + 1 });
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
    let storedata = JSON.parse(localStorage.getItem("data"));
    return (
      <div>
        <div class="site-wrapper">
          <div class="main-overlay"></div>

          <Header />
          <Crousel />
          <Posts />

          {/* <Sidebar /> */}
          <Feed />
          <Footer />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  user:state.authReducer
});

export default connect(mapStateToProps)(Main);
