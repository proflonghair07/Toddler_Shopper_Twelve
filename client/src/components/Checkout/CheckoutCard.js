import React from "react";
import API from "../../util/API";
import rmbutton from "./delete.mp3";

export default function CheckoutCard(props) {
  const { title, image, rating, rawPrice, productId, userId } = props;

  const handleRemove = (userId, productId) =>{
    API.removeItem(userId, productId).then((res)=>{
      props.getCartItems()
    })
  }

  return (
    <tr>
      <td>
        <img className="card-img-top" src={image} alt="page screenshot"></img>
      </td>
      <td>{title}</td>
      <td>{rating}<i class="fas fa-star"></i></td>
      <td>{rawPrice}</td>
      <td><button class="button is-danger" onClick={()=> handleRemove(userId,productId) }> Remove from Cart!</button></td>
      <audio className="audio-element">
          <source src={rmbutton}></source>
        </audio>
    </tr>
  );
}