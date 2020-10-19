import React from "react";
import "../Main.css";
import "./Checkout.css";
import truck from "./delivery_truck_2.png";
import "./fireworks.css";
import trucksound from "./truckhorn.mp3";

class CheckoutTruck extends React.Component {

  componentDidMount() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

  render()
    {
      return (
        <main className="container">
          <audio className="audio-element">
            <source src={trucksound}></source>
          </audio>

          <div className="card animate__animated animate__pulse animate__infinite	infinite" id="checkout-now"><div class="checkout-text">Your order is on it's way!</div></div>
          <img className="animate__animated animate__slideInLeft" id="truck" src={truck}></img>
          <div class = "fireWorkParticle"></div>
          
        </main>
        
      );
    }
  }
  export default CheckoutTruck;
