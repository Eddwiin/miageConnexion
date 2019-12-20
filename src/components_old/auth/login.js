import React from "react";
import API from "./../../utils/axios";

const INITIAL_STATE = {
  email: "",
  password: ""
};
export default class LoginComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    API.post("sign-in", {
      email: this.state.email,
      password: this.state.password
    })
      .then(() => {})
      .catch(() => {});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Email</label>
          <input type="text" name="email" onChange={this.handleChange} />
        </div>

        <div>
          <label>Password</label>
          <input type="password" name="password" onChange={this.handleChange} />
        </div>
      </form>
    );
  }
}
