import React from "react";
import "../Main.css";
import "./Checkout.css";
import truck from "./delivery_truck_2.png";
import "./fireworks.css";

class CheckoutTruck extends React.Component {
  
    render()
    {
      return (
        <main className="container">
          <div className="card animate__animated animate__pulse animate__infinite	infinite" id="checkout-now"><div class="checkout-text">Your order is on it's way!</div></div>
          <img className="animate__animated animate__slideInLeft" id="truck" src={truck}></img>
          <div class = "fireWorkParticle"></div>
          
        </main>
        
      );
    }
  }
  export default CheckoutTruck;
