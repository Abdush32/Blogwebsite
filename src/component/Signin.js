import React, { Component } from "react";
import { Link } from "react-router-dom";
import { login } from "../api/register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import { loginAction } from "../redux/authAction";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ ...this.state, [e.target.name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    login(this.state).then((res) => {
      // console.log(data);
      if (res.data && res.status) {
        let userdata = {
          user_id: res.data.user_id,
          email: res.data.email,
          mobile: res.data.mobile,
          name: res.data.name,
          profile_pic: res.data.profile_pic,
          token: res.data.token,
        };
        this.props.loginAction(
          res.data.user_id,
          res.data.email,
          res.data.mobile,
          res.data.name,
          res.data.profile_pic,
          res.data.token
        );
        
        localStorage.setItem("data", JSON.stringify(userdata));

        this.props.history.push("/");
      } else {
        console.log("NOT");
        toast.error(res.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    });
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
                          Signin
                        </p>

                        <form class="mx-1 mx-md-4" onSubmit={this.handleSubmit}>
                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="email"
                                id="form3Example3c"
                                name="email"
                                class="form-control"
                                required="required"
                                value={this.state.email}
                                onChange={this.handleChange}
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
                                name="password"
                                class="form-control"
                                required="required"
                                value={this.state.password}
                                onChange={this.handleChange}
                              />
                              <label class="form-label" for="form3Example4c">
                                Password
                              </label>
                            </div>
                          </div>

                          <br />
                          <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="submit"
                              class="btn btn-primary btn-lg"
                            >
                              Signin
                            </button>
                          </div>
                          <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <Link to="/Signup">Signup</Link>
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
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  loginAction: (token) => dispatch(loginAction(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
