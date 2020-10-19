import React from "react";
import API from "../util/API";
import atcsound from "./scannerbip.mp3";


export default function ProductCard(props) {
  const { title, image, rating, rawPrice, productId, userId } = props;

  return (
    <tr>
      <td>
        <img className="card-img-top" src={image} alt="page screenshot"></img>
      </td>
      <td>{title}</td>
      <td>{rating}<i class="fas fa-star"></i></td>
      <td>{rawPrice}</td>
      <td>
       
        <button class="button is-info" onClick={()=>API.handlePost(productId, userId)}> Add to Cart!</button>

        <audio className="audio-element">
          <source src={atcsound}></source>
        </audio>
      </td>
    </tr>
  );
}
