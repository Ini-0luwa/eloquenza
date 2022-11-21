// import * as dotenv from 'dotenv';
// dotenv.config()
// require('dotenv').config()
let API ='https://naijarestaurants.herokuapp.com'
// console.log(API);
let slug = 'eloquenza'
// https://naijarestaurants.herokuapp.com/
export const API_ROUTES = {
  REGISTER : `${API}/account/create-account`,
  LOGIN : `${API}/account/login`,
  GET_USER : `${API}/account/user`, 
  GET_STORE: 'https://naijarestaurants.herokuapp.com/store/?page=1'
}

export const API_NAVIGATE = {
  REGISTER : `/register`,
  LOGIN : `/login`,
  DASHBOARD : `/`,
}



export const STORE_ENDPOINT ={
  STORE: `${API}/store`,
  STORE_ID: `${API}/store/${slug}`,
  STORE_ID_CART: `${API}/store/${slug}/cart`,
  STORE_ID_CART_POST: `${API}/store/${slug}/cart`,
  STORE_ID_CATEGORY: `${API}/store/${slug}/categories`,
  STORE_ID_CATEGORY_ID: `${API}/store/${slug}/categories/${slug}`,
  STORE_ID_CHECKOUT: `${API}/store/eloquenza/checkout`,
  STORE_ID_CHECKOUT_POST: `${API}/store/eloquenza/checkout`,
  STORE_ID_CHECKOUT_PAYMENT_POST: `${API}/store/eloquenza/checkout-payment`,
  STORE_ID_DETAILS: `${API}/store/eloquenza/details`,
  STORE_ID_PRODUCTS: `${API}/store/eloquenza/products`,
  STORE_ID_PRODUCTS_ID: `${API}/store/eloquenza/products/eloquenza`,
  STORE_ALL: `${API}/store/all`,
  STORE_CARD_PAYMENT: `${API}/store/complete-card-payment`,
  STORE_ORDER: `${API}/store/order`,
  STORE_ORDER_ID: `${API}/store/order/eloquenza`,
}

// console.log(process.env.NODE_ENV)
