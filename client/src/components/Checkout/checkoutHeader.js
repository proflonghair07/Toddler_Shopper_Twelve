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
          <button class="button is-info">
            Return Home <i class="fas fa-home"></i>
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default CheckoutHeader;
