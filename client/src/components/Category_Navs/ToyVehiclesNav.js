import React from "react";
import "../Header.css";
import { Link } from "react-router-dom";

function ToyVehiclesNav() {
  return (
    <section className="hero">
      <div className="hero-body">
        <div>
          <h1 className="title">Toy Vehicles</h1>
          <button class="button is-primary">
            Checkout <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          </button>
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
export default ToyVehiclesNav;