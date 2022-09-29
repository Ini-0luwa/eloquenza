import React from 'react';
import Heading from '../../components/Shop/Heading';
import Shopproduct from '../../components/Shop/Shopproduct';
import SIdebar from '../../components/Shop/SIdebar';

function Shoppage(props) {
  return (
    <section class="shop__section section--padding">
      <div class="container-fluid">
        <Heading />

        <div class="row">
          <SIdebar />
          <Shopproduct />
        </div>
      </div>
    </section>
  );
}

export default Shoppage;