import React from "react";
import "../Header.css";

function checkoutHeader() {
  return (
    <section className="hero">
      <div className="hero-body">
        <div>
          <h1 className="title">Checkout</h1>
          <button class="button is-primary">
            Go Home <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
export default checkoutHeader;
