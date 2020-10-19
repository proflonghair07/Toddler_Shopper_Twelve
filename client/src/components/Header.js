import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <section className="hero">
      <div className="hero-body">
        <div>
          <h1 className="title animate__animated animate__backInLeft animate__fast">Toddler Shopper</h1>
          {/* <Link
              to="/register"
              className={window.location.pathname === "/register" ? "nav-link active" : "nav-link"}
            >
              <button class="button is-primary">
              Register
              </button>
            </Link>
            <br/>
            <Link
              to="/login"
              className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
            >
              <button class="button is-primary">
              Login
              </button>
            </Link> */}
          <Link to="/Checkout">
          <button class="button is-info">
            Checkout <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Navbar;
