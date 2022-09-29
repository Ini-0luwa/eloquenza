import React from 'react';
import Banner1 from '../../components/Banners/Banner1';
import Banner4 from '../../components/Banners/Banner4';
import Product from '../../components/Products/Product';
import Slider from '../../components/Slider/Slider';

function Home(props) {
  return (
    <div>
      <Slider />
      <Banner1 />
      <Banner4 />
      {/* <Productitems /> */}
      <Product />
      {/* <Productitems /> */}
    </div>
  );
}

export default Home;