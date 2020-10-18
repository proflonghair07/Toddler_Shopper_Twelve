import React from "react";
import "../Header.css";
import { Link } from "react-router-dom";

function ToyVehiclesNav() {
  return (
    <section className="hero">
      <div className="hero-body">
        <div>
          <h1 className="title">Toy Vehicles</h1>
          <Link to="/Checkout">
          <button class="button is-info">
            Checkout <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          </button>
          </Link>
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
export default ToyVehiclesNav;