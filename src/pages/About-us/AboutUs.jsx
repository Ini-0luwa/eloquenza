import React from 'react';
import About from '../../components/about/About';
import Banner5 from '../../components/Banners/Banner5';
// import Brandsection from '../../components/Brand/Brandsection';
import Shipping from '../../components/Shipping/Shipping';
import Breadcrumb from '../../utils/breadcrumbs/Breadcrumb';

function AboutUs(props) {
  return (
    <>
      <Breadcrumb />
      <About />
      <Banner5 />
      <Shipping />
      {/* <Brandsection /> */}
    </>
  );
}

export default AboutUs;