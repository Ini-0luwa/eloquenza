import React from 'react';
import Heading from '../../components/Shop/Heading';
import Shopproduct from '../../components/Shop/Shopproduct';
import SIdebar from '../../components/Shop/SIdebar';

function Shoppage(props) {
  return (
    <section className="shop__section section--padding">
      <div className="container-fluid">
        <Heading />

        <div className="row">
          <SIdebar />
          <Shopproduct />
        </div>
      </div>
    </section>
  );
}

export default Shoppage;