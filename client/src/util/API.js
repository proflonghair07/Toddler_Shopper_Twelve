import axios from "axios";

export default {
  // Gets all products by category
  getProductsByCategory: function(category) {
    category = encodeURI(category);
    return axios.get(`/api/product/category/${category}`);
  },
  getProductsFromCart: function(userId) {
   
    return axios.get(`/api/cart/checkout/${userId}`);
  },
  registerUser: function(userInfo) {
    return axios.post('/api/user/create', userInfo);
  },  
  loginUser: function(userInfo) {
    return axios.post('/api/user/login', userInfo);
  },  
  handlePost: function(productId,userId){
    const payload = {
      userId,
      productId
    }
    console.log(payload)
  return axios.post(`/api/cart/add`, payload); 
  },
  deleteAll: function(cartId) {
    return axios.delete(`/api/cart/clear/${cartId}`);
  },
  removeItem: function(userId, productId){
    const payload = {
        userId,
        productId
    }
    console.log(payload)
    return axios.post(`/api/cart/remove`, payload);
  }
};