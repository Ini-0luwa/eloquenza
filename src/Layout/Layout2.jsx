import React from 'react';
import {Outlet} from 'react-router-dom';
import CheckoutAside from '../components/Checkout/CheckoutAside';

function Layout2(props) {
  return (
<div class="checkout__page--area">
  <div class="container">
    <div class="checkout__page--inner d-flex">
      <Outlet />
      <CheckoutAside />
    </div>
  </div>
</div>
  );
}

export default Layout2;