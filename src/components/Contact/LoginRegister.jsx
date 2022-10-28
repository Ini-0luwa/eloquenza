import React from 'react';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Shipping from '../Shipping/Shipping';

function LoginRegister(props) {

   

  return (
    <div className="login__section section--padding">
      <div className="container">
        <form action="#">
          <div className="login__section--inner">
            <div className="row row-cols-md-2 row-cols-1">
              <Register />
              <Login />
            </div>
          </div>
        </form>
      </div>
      <Shipping />
    </div>

  );
}

export default LoginRegister;