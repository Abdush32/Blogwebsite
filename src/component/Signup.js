import React, { Component } from "react";
import axios from "axios";
import { FormFeedback, Spinner } from "reactstrap";
import { createuser } from "../api/register";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      imagepath: null,
      loader: false,
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      mobile: "",
      profile_pic_path: "",
    };
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value,
    });
  };

  onFileChange = async (e) => {
    // Update the state
    e.preventDefault();
    await this.setState({ selectedFile: e.target.files[0] });
    const formData = new FormData();
    await formData.append("profile_pic", this.state.selectedFile);
    console.log(this.state.selectedFile);
    this.setState({ loader: true });
    await axios
      .post(
        "https://blogmitiz.readandfeel.in/api/v1/auth/upload_profile_pic",
        formData
      )
      .then((res) => {
        this.setState({ loader: false });
        this.setState({
          imagepath: res.data.image_full_path,
          profile_pic_path: res.data.image_path,
        });
        console.log(res);
      });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    createuser(this.state).then((res) => {
      console.log(res);
    });
  };

  handleValidation = () => {
    let name = this.state.name;
    let errors = {};
    let formIsValid = true;
    if (!name["name"]) {
      formIsValid = false;
      errors["name"] = "Legal Name can not be empty!";
    }}



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
                                name="name"
                                value={this.state.name}
                                onChange={this.handleChange}
                                required="required"
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
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                required="required"
                              />
                              <label class="form-label" for="form3Example3c">
                                Your Email
                              </label>
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id="form3Example3c"
                                class="form-control"
                                name="mobile"
                                value={this.state.mobile}
                                onChange={this.handleChange}
                                required="required"
                              />
                              <label class="form-label" for="form3Example3c">
                                Your Mobile
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
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                required="required"
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
                                name="password_confirmation"
                                value={this.state.password_confirmation}
                                onChange={this.handleChange}
                                required="required"
                              />
                              <label class="form-label" for="form3Example4cd">
                                Repeat your password
                              </label>
                            </div>
                          </div>

                          <div class="form-check d-flex justify-content-center mb-5">
                            <label class="form-label" for="customFile"></label>
                            <input
                              type="file"
                              class="form-control"
                              id="profile_pic"
                              name="profile_pic"
                              onChange={this.onFileChange}
                              required="required"
                            />
                          </div>

                          <div>
                            {!this.state.imagepath ? (
                              this.state.loader && (
                                <Spinner
                                  style={{ width: "1rem", height: "1rem" }}
                                  children={false}
                                />
                              )
                            ) : (
                              <img
                                src={this.state.imagepath}
                                width="200px"
                                height="200px"
                                class="img-thumbnail"
                                required="required"
                              />
                            )}
                          </div>

                          <br />
                          <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="submit"
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
