import React, { Component } from "react";
import { imageupload } from "../api/register";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      image: null,
    };
  }

  handleChange = (event) => {
    this.setState({ image: event.target.files[0]});
  };

  handleSubmit = () => {
    imageupload().then((res) =>{
        console.log(res);
    })



  };

  render() {
    return (
      <div>
        <section class="vh-100" style={{ backgroundColor: "#eee" }}>
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-lg-12 col-xl-11">
                <div class="card text-black" style={{ borderRadius: "25px" }}>
                  <div class="card-body p-md-5">
                    <div class="row justify-content-center">
                      <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Sign up
                        </p>

                        <form class="mx-1 mx-md-4" onSubmit={this.handleSubmit}>
                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id="form3Example1c"
                                class="form-control"
                              />
                              <label class="form-label" for="form3Example1c">
                                Your Name
                              </label>
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="email"
                                id="form3Example3c"
                                class="form-control"
                              />
                              <label class="form-label" for="form3Example3c">
                                Your Email
                              </label>
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                id="form3Example4c"
                                class="form-control"
                              />
                              <label class="form-label" for="form3Example4c">
                                Password
                              </label>
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                id="form3Example4cd"
                                class="form-control"
                              />
                              <label class="form-label" for="form3Example4cd">
                                Repeat your password
                              </label>
                            </div>
                          </div>

                          <div class="form-check d-flex justify-content-center mb-5">
                            <label class="form-label" for="customFile"></label>
                            <input type="file" class="form-control" id="img" value={this.state.image}
                        onChange={this.handleChange} />
                          </div>

                          <div>
                            <img
                              src="https://iconape.com/wp-content/themes/svvvg/assets/img/freeicons.jpg"
                              width="200px"
                              height="200px"
                              class="img-thumbnail"
                            />
                          </div>

                          <br />
                          <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="button"
                              class="btn btn-primary btn-lg"
                            >
                              Register
                            </button>
                          </div>
                        </form>
                      </div>
                      <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img
                          src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png"
                          class="img-fluid"
                          alt="Sample image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Signup;
