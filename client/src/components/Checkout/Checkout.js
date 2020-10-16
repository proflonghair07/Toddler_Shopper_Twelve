import React from "react";
import API from "../../util/API";
import CheckoutCard from "./CheckoutCard"
import "../Main.css";
import "./Checkout.css";
import axios from "axios";

const category = "checkout";

class Checkout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {products: []};
  }

  componentDidMount(){
      

    API.getProductsFromCart(this.props.user._id)
    .then(res => {
      console.log(res.data);
      console.log(res.data["0"].products);
      console.log(res.data["0"]._id);

      this.setState({products: res.data["0"].products,cartId: res.data["0"]._id})
    })
    .catch(err => console.log(err));
  }

  handleDeleteCart = event => {
    axios.delete(`/api/cart/clear/${this.state.cartId}`)
    .then(res => {
      this.props.history.push('/Main');
    })
    .catch(err => console.log(err));
  }

  render()
  {
    return (
      <main className="container">
        <table className="table is-fullwidth is-striped is-hoverable animate__animated animate__fadeInUp animate__fast">
          {/* <thead className="has-text-centered"><div class="has-text-centered.has-text-centered">Your Wishlist!</div></thead> */}
          <tbody>
          {this.state.products.map((product) => (
              <CheckoutCard
                key={product._id}
                title={product.title}
                image={product.image}
                rating={product.rating}
                rawPrice={product.price}
                productId={product._id}
                userId={this.props.user ? this.props.user._id : null}
              />
            ))}
          
          </tbody>
        </table>

        <button className="button is-primary animate__animated animate__pulse animate__infinite	infinite" id="checkout-now" onClick={this.handleDeleteCart}>Checkout Now!</button>
      </main>
    );
  }
}
export default Checkout;
//onClick={()=>API.deleteAll(this.state.cartId)}
//onClick={this.handleDeleteCart}