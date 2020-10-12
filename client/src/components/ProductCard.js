import React from "react";

export default function ProjectCard(props) {
  const { title, image, rating, rawPrice, productId, userId } = props;


  return (
    <tr>
      <td>
        <img className="card-img-top" src={image} alt="page screenshot"></img>
      </td>
      <td>{title}</td>
      <td>{rating}</td>
      <td>{rawPrice}</td>
      <td>
       
        <form onSubmit={()=>props.handlePost(productId, userId)}> 
        {/* <form method= "POST" action={"/api/cart/add" + productId}> */}
          {/* <input name= "emailAddress" type="hidden" val={userEmailAddress} /> */}
          <submit class="button is-warning">Add to Wishlist!</submit>
        </form>
      </td>
    </tr>
  );
}
