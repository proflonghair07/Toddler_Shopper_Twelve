import React from "react";

export default function ProjectCard(props) {
  const { title, image, rating, rawPrice } = props;

  return (
    <tr>
      <td>
        <img className="card-img-top" src={image} alt="page screenshot"></img>
      </td>
      <td>{title}</td>
      <td>{rating}</td>
      <td>{rawPrice}</td>
      <td>
        <button class="button is-warning">Add to Wishlist!</button>
      </td>
    </tr>
  );
}
