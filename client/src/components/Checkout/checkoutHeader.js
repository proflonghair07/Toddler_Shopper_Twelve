import React from "react";
import "../Header.css";
import { Link } from "react-router-dom";


function CheckoutHeader() {
  return (
    <section className="hero">
      <div className="hero-body">
        <div>
          <h1 className="title">Checkout</h1>
          <Link to="/Main">
          <button class="button is-primary">
            Return Home <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default CheckoutHeader;
