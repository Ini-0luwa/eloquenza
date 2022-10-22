import React, {useState} from 'react'

const Register = () => {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] =useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleSubmit = () =>{
    
  }


  return (
    <div>
      <div class="col">
        <div class="account__login register">
          <div class="account__login--header mb-25">
            <h2 class="account__login--header__title h3 mb-10">Create an Account</h2>
            <p class="account__login--header__desc">Register here if you are a new customer</p>
          </div>
          <form onSubmit={handleSubmit} class="account__login--inner">
            <input class="account__login--input" placeholder="Full name" type="text" value={fullName} onChange={e => setFullName(e.target.value)} required/>
            <input class="account__login--input" placeholder="Email Addres" type="email" value={email} onChange={e => setEmail(e.target.value)} required/>
            <input class="account__login--input" placeholder="Phone number" type="number" value={phoneNo} onChange={e => setPhoneNo(e.target.value)} required/>
            <input class="account__login--input" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} required/>
            <input class="account__login--input" placeholder="Confirm Password" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required/>
            <button class="account__login--btn primary__btn mb-10" type="submit">Submit & Register</button>
            <div class="account__login--remember position__relative">
              <input class="checkout__checkbox--input" id="check2" type="checkbox" />
              <span class="checkout__checkbox--checkmark"></span>
              <label class="checkout__checkbox--label login__remember--label" for="check2">
              I have read and agree to the terms & conditions</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register;