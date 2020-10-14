import React from "react";
import API from "../../util/API";
import CheckoutCard from "./CheckoutCard"
import "../Main.css";
import "./Checkout.css";

const category = "checkout";

class Checkout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {products: []};
  }

  componentDidMount(){
      

    API.getProductsFromCart(this.props.user._id)
    .then(res => {
      console.log(res)
      this.setState({products: res.data})
    })
    .catch(err => console.log(err));
  }

  render()
  {
    return (
      <main className="container">
        <table className="table is-fullwidth is-striped is-hoverable animate__animated animate__fadeInUp animate__fast">
          <thead class="is-centered">Your Wishlist!</thead>
          <tbody>
            {/* {this.state.products.map((product) => (
              <CheckoutCard
                key={product._id}
                title={product.title}
                image={product.image}
                rating={product.rating}
                rawPrice={product.price}
                productId={product._id}
                userId={this.props.user ? this.props.user._id : null}
              />
            ))} */}
            {/* placeholder code just to show something on the page.  Will be deleted once table is functioning properly. */}
            <tr>
              <td>
              <img className="card-img-top" src="https://m.media-amazon.com/images/I/81SpJfojd7L._AC_UL320_.jpg" alt="page screenshot"></img>
              </td>
              <td>L.O.L. Surprise! O.M.G. Lights Groovy Babe Fashion Doll with 15 Surprises</td>
              <td>4.8</td>
              <td>$20.99</td>
              <td>
       
              <button class="button is-primary" id="checkout-button"> Add to Wishlist!</button>
              <button class="button is-danger" id="checkout-button"> Remove from Wish!</button>
              </td>
            </tr>
            {/* end of placeholder */}
          </tbody>
        </table>
      </main>
    );
  }
}
export default Checkout;
