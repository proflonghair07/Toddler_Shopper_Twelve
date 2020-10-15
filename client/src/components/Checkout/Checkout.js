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
          <thead class="is-centered">Your Wishlist!</thead>
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
      </main>
    );
  }
}
export default Checkout;
