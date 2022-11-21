import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { API_ROUTES, API_NAVIGATE } from '../../utils/api_client';
import {storeTokenInLocalStorage} from '../../Lib/Common';
import { apiMutate, getApi, postMutate } from '../../utils/axios';



function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate()
  // const {user, authenticated } = 

  // const handleSubmit = async() =>{
  //   try {
  //     isLoading(true);
  //     const response = await axios({
  //       method: 'POST',
  //       url: API_ROUTES.LOGIN,
  //       data: {
  //         email, password
  //       }
  //     })
  //     if(!response?.data?.token){
  //       console.log('something went wrong while signing in', response)
  //       return;
  //     }
  //     storeTokenInLocalStorage(response.data.token)
  //     navigate(API_NAVIGATE.DASHBOARD)
  //   } 
  //   catch (error) {
  //     console.log('some error occur during signing', error)
  //   }

  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    postMutate(API_ROUTES.LOGIN, {phone_number: email, password}, {})
    // getApi(API_ROUTES.GET_STORE)
    // console.clear()
    // console.log("hello");
  }


  return (
    <div>
      <div className="col">
        <div className="account__login">
          <div className="account__login--header mb-25">
            <h2 className="account__login--header__title h3 mb-10">Login</h2>
            <p className="account__login--header__desc">Login if you area a returning customer.</p>
          </div>
          <form  className="account__login--inner">
            <input className="account__login--input" placeholder="Email Addres" type="email" value={email} onChange={e => setEmail(e.target.value)} required/>
            <input className="account__login--input" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} required/>
            <div className="account__login--remember__forgot mb-15 d-flex justify-content-between align-items-center">
              <div className="account__login--remember position__relative">
                <input className="checkout__checkbox--input" id="check1" type="checkbox" />
                <span className="checkout__checkbox--checkmark"></span>
                <label className="checkout__checkbox--label login__remember--label" htmlFor="check1">
                Remember me</label>
              </div>
              <button className="account__login--forgot" type="submit">Forgot Your Password?</button>
            </div>
            <button className="account__login--btn primary__btn" onClick={handleSubmit}>Login</button>
            <div className="account__login--divide">
              <span className="account__login--divide__text">OR</span>
            </div>
            <p className="account__login--signup__text">Don,t Have an Account? <button type="submit">Sign up now</button></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login