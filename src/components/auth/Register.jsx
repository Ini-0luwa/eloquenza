import React, {useState} from 'react'
import axios from 'axios';
import { API_ROUTES, API_NAVIGATE } from '../../utils/api_client';
import { useNavigate } from 'react-router-dom';


const Register = () => {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] =useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();


  const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios({
        method: 'POST',
        url: API_ROUTES.REGISTER,
        data: {
          fullName, email, phoneNo, password, confirmPassword
        }
      })
      if(!response?.data?.token){
        console.log('somehting went wrong during signup', response);
        return;
      }
      navigate(API_NAVIGATE.LOGIN);
    }
    catch (error) {
      console.log('some error occur in registration', error);
    }
    finally{
      setIsLoading(false)
    }
  }


  return (
    <div>
      <div className="col">
        <div className="account__login register">
          <div className="account__login--header mb-25">
            <h2 className="account__login--header__title h3 mb-10">Create an Account</h2>
            <p className="account__login--header__desc">Register here if you are a new customer</p>
          </div>
          <form onSubmit={handleSubmit} className="account__login--inner" autoSave='on'>
            <input className="account__login--input" placeholder="Full name" type="text" value={fullName} onChange={e => setFullName(e.target.value)} required/>
            <input className="account__login--input" placeholder="Email Addres" type="email" value={email} onChange={e => setEmail(e.target.value)} required/>
            <input className="account__login--input" placeholder="Phone number" type="number" value={phoneNo} onChange={e => setPhoneNo(e.target.value)} required/>
            <input className="account__login--input" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} required/>
            <input className="account__login--input" placeholder="Confirm Password" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required/>
            <button className="account__login--btn primary__btn mb-10" type="submit">Submit & Register</button>
            <div className="account__login--remember position__relative">
              <input className="checkout__checkbox--input" id="check2" type="checkbox" />
              <span className="checkout__checkbox--checkmark"></span>
              <label className="checkout__checkbox--label login__remember--label" htmlFor="check2">
              I have read and agree to the terms & conditions</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register;