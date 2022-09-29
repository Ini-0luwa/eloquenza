import React from 'react';
import { productData } from './data';
import Productitems from './Productitems';

function Products(props) {
  return (
    <>
      {productData.map((item) =>(
        <Productitems item={item} key={item.id} />
      ))}
    </>
  );
}

export default Products;