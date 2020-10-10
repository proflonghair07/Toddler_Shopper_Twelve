import axios from "axios";

export default {
  // Gets all products by category
  getProductsByCategory: function(category) {
      category = encodeURI(category)
    return axios.get(`/api/product/category/${category}`);
  },
};