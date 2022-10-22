import React, { useState } from 'react'

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () =>{
    
  }


  return (
    <div>
      <div class="col">
        <div class="account__login">
          <div class="account__login--header mb-25">
            <h2 class="account__login--header__title h3 mb-10">Login</h2>
            <p class="account__login--header__desc">Login if you area a returning customer.</p>
          </div>
          <form onSubmit={handleSubmit} class="account__login--inner">
            <input class="account__login--input" placeholder="Email Addres" type="email" value={email} onChange={e => setEmail(e.target.value)} required/>
            <input class="account__login--input" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} required/>
            <div class="account__login--remember__forgot mb-15 d-flex justify-content-between align-items-center">
              <div class="account__login--remember position__relative">
                <input class="checkout__checkbox--input" id="check1" type="checkbox" />
                <span class="checkout__checkbox--checkmark"></span>
                <label class="checkout__checkbox--label login__remember--label" for="check1">
                Remember me</label>
              </div>
              <button class="account__login--forgot" type="submit">Forgot Your Password?</button>
            </div>
            <button class="account__login--btn primary__btn" type="submit">Login</button>
            <div class="account__login--divide">
              <span class="account__login--divide__text">OR</span>
            </div>
            <p class="account__login--signup__text">Don,t Have an Account? <button type="submit">Sign up now</button></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login