import React, { Component } from "react";
import { Spinner } from "reactstrap";
import { Carousel } from "react-bootstrap";
import moment from "moment";
import { gethomePost } from "../api/postApi";
import { Link } from "react-router-dom";
class Crousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: true,
      mainPost: [],
    };
  }
  componentDidMount = () => {
    gethomePost().then((res) => {
      console.log(res);
      this.setState({ loader: false });

      this.setState({
        mainPost: res.data.banner_posts,
      });
    });
  };
  render() {
    return (
      <div>
        <section class="hero-carousel">
          <div class="container-xl">
            <div class="post-carousel-lg">
              <div class="post featured-post-xl">
                <a href="#">
                  <div class="thumb rounded" style={{ height: "400px" }}>
                    {this.state.loader ? (
                      <Spinner
                        children={false}
                        class="spinner1"
                        style={{ marginLeft: "500px", marginTop: "200px" }}
                      />
                    ) : (
                      <Carousel>
                        {this.state.mainPost.length > 0 &&
                          this.state.mainPost.map((ele, index) => (
                            <Carousel.Item key={index}>
                              <div class="details clearfix">
                                <Link
                                  to={`/getCategory/${ele.category_id}`}
                                  class="category-badge lg"
                                >
                                  {ele.category_title}
                                </Link>
                              </div>
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
                    )}
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Crousel;
