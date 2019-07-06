import React, { Component } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-in.style.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }
  handleSubmit(e) {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  }
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            label="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <CustomButton type="submit" value="Submit Form">
            Sign in
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
