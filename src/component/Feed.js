import React, { Component } from 'react'
import insta1 from "../images/insta/insta-1.jpg";
import insta2 from "../images/insta/insta-2.jpg";
import insta3 from "../images/insta/insta-3.jpg";
import insta4 from "../images/insta/insta-4.jpg";
import insta5 from "../images/insta/insta-5.jpg";
import insta6 from "../images/insta/insta-6.jpg";
 class Feed extends Component {
    render() {
        return (
            <div>
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
            </div>
        )
    }
}

export default Feed