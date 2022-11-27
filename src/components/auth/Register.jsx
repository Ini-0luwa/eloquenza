import React, {useState} from 'react'
import axios from 'axios';
import { API_ROUTES, API_NAVIGATE } from '../../utils/api_client';
import { useNavigate } from 'react-router-dom';
import { postMutate } from '../../utils/axios';
import { toast } from 'react-toastify';


const Register = () => {

  const [fullName, setFullName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] =useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();


  // const handleSubmit = async(e) =>{
  //   e.preventDefault();
  //   try {
  //     setIsLoading(true);
  //     const response = await axios({
  //       method: 'POST',
  //       url: API_ROUTES.REGISTER,
  //       data: {
  //         fullName, email, phoneNo, password, confirmPassword
  //       }
  //     })
  //     if(!response?.data?.token){
  //       console.log('somehting went wrong during signup', response);
  //       return;
  //     }
  //     navigate(API_NAVIGATE.LOGIN);
  //   }
  //   catch (error) {
  //     console.log('some error occur in registration', error);
  //   }
  //   finally{
  //     setIsLoading(false)
  //   }
  // }
  // const token = "value";
  const handleSubmit = (e) => {
    setTimeout(function() {
      setIsLoading(true);
     }, 100);
    e.preventDefault();
        setIsLoading(true);
        postMutate(API_ROUTES.REGISTER, {first_name: fullName, last_name, email, phone_number: phoneNo, password }, {})
        .then((res) => {
          // localStorage.setItem("tokenE", token);
          if (res.detail === "Registration successful") {
            console.log(res.data, "res");
            toast.dark(res.detail, {hideProgressBar: true, type: "success" , uniqueId: 500})
            localStorage.setItem('tokenE', res.data.token);
            localStorage.setItem('phone_num', res.data.phone_number);
            localStorage.setItem('isLogged', true);
            toast.dark(`Welcome ${res.data.last_name} ! !`, {hideProgressBar: true, type: "info" , uniqueId: 500})
            navigate("/checkout4")
            setIsLoading(false);
          }
        }).catch((err) => {
          setIsLoading(false);
          // toast.dark(err.message, {hideProgressBar: true, type: "error" , uniqueId: 500})
          if(err.response.data.detail === 'Email already exist' || err.response.data.detail === "Phone number already exist"){
            toast.dark(err.response.data.detail, {hideProgressBar: true, type: "error" , uniqueId: 500})
          }
          // console.log(err.response.data.detail, "err");
        })
        setIsLoading(false);
      };
      
      return (
        <div>
      <div className="col">
      {/* <button>Submit</button> */}
        <div className="account__login register">
          <div className="account__login--header mb-25">
            <h2 className="account__login--header__title h3 mb-10">Create an Account</h2>
            <p className="account__login--header__desc">Register here if you are a new customer</p>
          </div>
          <div className="account__login--inner">
            <input className="account__login--input" placeholder="First Name" type="text" value={fullName} onChange={e => setFullName(e.target.value)} required/>
            <input className="account__login--input" placeholder="Last Name" type="text" value={last_name} onChange={e => setLastName(e.target.value)} required/>
            <input className="account__login--input" placeholder="Email Addres" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            <input className="account__login--input" placeholder="Phone number" type="number" value={phoneNo} onChange={e => setPhoneNo(e.target.value)} required/>
            <input className="account__login--input" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} required/>
            <input className="account__login--input" placeholder="Confirm Password" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required/>
            <button className="account__login--btn primary__btn mb-10" onClick={handleSubmit}>Submit & Register</button>
            {isLoading ? <div className='d-flex justify-content-center flex-coloumn'>
          <div class="spinner-border text-primary" style={{height: "40px", width: '40px'}} role="status">
          {/* <span class="sr-only">Loading...</span> */}
           </div>
           <small className='mx-4'>Please wait...</small>
           </div> : ""}
            <div className="account__login--remember position__relative">
              <input className="checkout__checkbox--input" id="check2" type="checkbox" />
              <span className="checkout__checkbox--checkmark"></span>
              <label className="checkout__checkbox--label login__remember--label" htmlFor="check2">
              I have read and agree to the terms & conditions</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;