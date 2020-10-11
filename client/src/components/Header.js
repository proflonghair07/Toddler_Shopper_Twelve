import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <section className="hero">
      <div className="hero-body">
        <div>
          <h1 className="title">Toddler Shopper</h1>
          <Link
              to="/register"
              className={window.location.pathname === "/register" ? "nav-link active" : "nav-link"}
            >
              Register
            </Link>
          <button class="button is-primary">
            Checkout <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
export default Navbar;
