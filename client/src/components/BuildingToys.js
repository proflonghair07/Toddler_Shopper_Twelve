import React from "react";
import API from "../util/API";
import ProductCard from "./ProductCard";
import "./Main.css";

const category = "building toys";

class BuildingToys extends React.Component {

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
                title={product.title}
                image={product.image}
                rating={product.rating}
                rawPrice={product.rawPrice}
              />
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}

export default BuildingToys;