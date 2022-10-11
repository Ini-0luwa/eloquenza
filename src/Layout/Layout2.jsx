import React from 'react';
import {Outlet} from 'react-router-dom';
import CheckoutAside from '../components/Checkout/CheckoutAside';

function Layout2(props) {
  return (
<div className="checkout__page--area">
  <div className="container">
    <div className="checkout__page--inner d-flex">
      <Outlet />
      <CheckoutAside />
    </div>
  </div>
</div>
  );
}

export default Layout2;