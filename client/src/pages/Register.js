import React, { Component } from "react";
import LoginNav from "./LoginNav";
import "./Login.css";
import { Link } from "react-router-dom";
import API from "../util/API";


class Register extends Component {
  state = {
    emailAddress: "",
    password: ""
  };

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    
  }

  
    
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.emailAddress) {
      alert("Enter your E-mail Address please!");
    } else if (this.state.password.length < 6) {
      alert(
       'Choose a more secure password' 
      );
    } else {
      API.registerUser(this.state)
      .then(alert("User registered."));

      localStorage.setItem('user', this.state.emailAddress);
    }

    this.setState({
      emailAddress: "",
      password: ""
    });
  };


  render() {
    return (
      <div className="App">
        <LoginNav />

        {/* <form className="form">
          <input
            value={this.state.emailAddress}
            name="emailAddress"
            onChange={this.handleInputChange}
            type="text"
            placeholder="E-mail Address"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form> */}

        <div class="card is-center grow" id="login-card">
          <header class="card-header">
            <p class="card-header-title">Register</p>
          </header>
            <div class="field">
              <label class="label" id="email">Email</label>
              <div class="control">
              <input class="input" 
                  value={this.state.emailAddress}
                  name="emailAddress"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="E-mail Address"></input>
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
              <input class="input"
                    value={this.state.password}
                    name="password"
                    onChange={this.handleInputChange}
                    type="password"
                    placeholder="Password"></input>
              </div>
            </div>
            <button className="button is-primary" onClick={this.handleFormSubmit}>Register</button>
            <Link to="/Main"><button className="button is-primary">Start Shopping</button></Link>
            <div class="is-center" id="footer-font">Already a Member? Login <Link
              to="/"
              className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
            ><a>here.</a></Link></div>
        </div>

      </div>
    );
  }
}

export default Register;
