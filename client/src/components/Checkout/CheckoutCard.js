import React from "react";
import API from "../../util/API";
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
      <td>{rating}</td>
      <td>{rawPrice}</td>
      <td><button class="button is-danger" onClick={()=> handleRemove(userId,productId) }> Remove from Wishlist!</button></td>
       
    </tr>
  );
}