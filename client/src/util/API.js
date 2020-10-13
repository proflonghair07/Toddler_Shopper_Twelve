import axios from "axios";

export default {
  // Gets all products by category
  getProductsByCategory: function(category) {
    category = encodeURI(category);
    return axios.get(`/api/product/category/${category}`);
  },
  registerUser: function(userInfo) {
    return axios.post('/api/user/create', userInfo);
  },  
  loginUser: function(userInfo) {
    return axios.post('/api/user/login', userInfo);
  },  
  handlePost: function(productId,userId){
  return axios.post(`/api/add/${productId}`); 
  }
};