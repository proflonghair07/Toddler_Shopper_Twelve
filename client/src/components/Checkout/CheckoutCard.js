import React from "react";
import API from "../../util/API";
export default function CheckoutCard(props) {
  const { title, image, rating, rawPrice, productId, userId } = props;

  return (
    <tr>
      <td>
        <img className="card-img-top" src={image} alt="page screenshot"></img>
      </td>
      <td>{title}</td>
      <td>{rating}</td>
      <td>{rawPrice}</td>
      <td><button class="button is-danger"> Remove from Wishlist!</button></td>
       
    </tr>
  );
}