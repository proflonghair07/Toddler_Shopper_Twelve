import React from "react";
import "../Header.css";
import { Link } from "react-router-dom";

function ChildrenBooksNav() {
  return (
    <section className="hero">
      <div className="hero-body">
        <div>
          <h1 className="title">Children's Books</h1>
          <Link to="/Checkout">
          <button class="button is-primary">
            Checkout <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          </button>
          </Link>
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
export default ChildrenBooksNav;