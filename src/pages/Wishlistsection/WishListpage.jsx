import React from 'react';
import Shipping from '../../components/Shipping/Shipping';
import Wishlist from '../../components/Wishlist/Wishlist';

function WishListpage(props) {
  return (
    <>
      <Wishlist />
      <Shipping />
    </>
  );
}

export default WishListpage;