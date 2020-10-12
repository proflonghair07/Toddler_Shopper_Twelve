import React, { Component } from "react";
import Navbar from "../components/Header";
import Footer from "../components/Footer";

import API from "../util/API";


class Login extends Component {
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
      API.loginUser(this.state)
      .then(alert("Logged in."));

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
        <Navbar />
        <h2>
            Login 
        </h2>
        <form className="form">
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
          <button onClick={this.handleFormSubmit}>Login</button>
        </form>

        <Footer />
      </div>
    );
  }
}

export default Login;