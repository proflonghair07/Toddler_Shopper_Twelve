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
      console.log(res.data["0"].products)

      this.setState({products: res.data["0"].products})
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
        <button className="button is-primary animate__animated animate__pulse animate__infinite	infinite" id="checkout-now">Checkout Now!</button>
      </main>
    );
  }
}
export default Checkout;
