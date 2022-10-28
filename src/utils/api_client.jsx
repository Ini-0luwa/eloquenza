// import * as dotenv from 'dotenv';
// dotenv.config()
// require('dotenv').config()
let API ='https://naijarestaurants.herokuapp.com'
// console.log(API);

export const API_ROUTES = {
  REGISTER : `${API}/account/register`,
  LOGIN : `${API}/account/login`,
  GET_USER : `${API}/account/get_user`, 
}

export const API_NAVIGATE = {
  REGISTER : `/register`,
  LOGIN : `/login`,
  DASHBOARD : `/`,
}


export const STORE_ENDPOINT ={
  STORE: `${API}/store`,
  STORE_ID: `${API}/store/eloquenza`,
}

// console.log(process.env.NODE_ENV)