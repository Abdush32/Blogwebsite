import axios, { Axios } from "axios";
import React, { Component } from "react";
const localurl =
  "https://pixabay.com/api/?key=25035440-2e1bdc814d217eb81d9e04313";
class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedData: [],
    };
  }
  componentDidMount() {
    axios.get(localurl).then((response) => {
      console.log(response);
      this.setState({ feedData: response.data.hits });
    });
  }
  render() {
    return (
      <div>
        <div class="instagram">
          <div class="container-xl">
            <a href="#" class="btn btn-default btn-instagram">
              @Pexels
            </a>
            <div class="instagram-feed d-flex flex-wrap">
              {this.state.feedData.length > 0 &&
                this.state.feedData.slice(0, 6).map((ele, index) => (
                  <div class="insta-item col-sm-2 col-6 col-md-2" key={index}>
                    <a href="#">
                      <img src={ele.largeImageURL} alt="insta-title" style={{width:"180px",height:"180px"}} />
                    </a>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feed;
