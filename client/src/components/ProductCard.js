import React from "react";
import API from "../util/API";
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
      </td>
    </tr>
  );
}
