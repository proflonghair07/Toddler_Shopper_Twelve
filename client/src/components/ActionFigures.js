import React from "react";
import API from "../util/API";
import ProductCard from "./ProductCard";
import "./Main.css";


const category = "action figures";

class ActionFigure extends React.Component {

  constructor(props) {
    super(props);
    this.state = {products: []};
  }

  componentDidMount(){
    API.getProductsByCategory(category)
      .then(res => this.setState({products: res.data}))
      .catch(err => console.log(err));
  }

  render()
  {
    return (
      <main className="container">
        <table className="table is-fullwidth is-striped is-hoverable">
          <tbody>
            {this.state.products.map((product) => (
              <ProductCard
                key={product._id}
                title={product.title}
                image={product.image}
                rating={product.rating}
                rawPrice={product.price}
                productId={product._id}
              />
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}

export default ActionFigure;