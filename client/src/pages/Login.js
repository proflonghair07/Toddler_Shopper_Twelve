import React, { Component } from "react";
import LoginNav from "./LoginNav";
import "./Login.css";
import API from "../util/API";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";




class Login extends Component {


  state = {
    emailAddress: "",
    password: "",
  };


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
      .then((res)=>{
        console.log(res)
        this.props.setUser(res.data)
        // alert("Logged in.")
        if(res.data._id){
        // 
          this.props.history.push('/Main')
        }

      }
        );

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
        {/* <h1>
            Login 
        </h1>
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
          <button className="button is-primary" onClick={this.handleFormSubmit}>Login</button>
        </form> */}

        <div class="card is-center" id="login-card">
          <header class="card-header">
            <p class="card-header-title">Login</p>
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
            <button className="button is-info" onClick={this.handleFormSubmit}>Login</button>
            
            <div class="is-center" id="footer-font">Not a member yet? Create an account <Link
              to="/register"
              className={window.location.pathname === "/register" ? "nav-link active" : "nav-link"}
            >here</Link></div>
        </div>

      </div>
    );
  }
}

export default Login;