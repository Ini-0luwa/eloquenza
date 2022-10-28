import React from 'react';
import { smallproduct7, smallproduct2, smallproduct4 } from '../../assets/img';


function CheckoutAside(props) {
  return (

<aside className="checkout__sidebar sidebar">
<div className="cart__table checkout__product--table">
  <table className="cart__table--inner">
    <tbody className="cart__table--body">
      <tr className="cart__table--body__items">
        <td className="cart__table--body__list">
          <div className="product__image two  d-flex align-items-center">
            <div className="product__thumbnail border-radius-5">
              <a href="product-details.html"><img className="border-radius-5" src={smallproduct7} alt="cart-product" /></a>
              <span className="product__thumbnail--quantity">1</span>
            </div>
            <div className="product__description">
              <h3 className="product__description--name h4"><a href="product-details.html">Fresh-whole-fish</a></h3>
              <span className="product__description--variant">COLOR: Blue</span>
            </div>
          </div>
        </td>
        <td className="cart__table--body__list">
          <span className="cart__price">£65.00</span>
        </td>
      </tr>
      <tr className="cart__table--body__items">
        <td className="cart__table--body__list">
          <div className="cart__product d-flex align-items-center">
            <div className="product__thumbnail border-radius-5">
              <a href="product-details.html"><img className="border-radius-5" src={smallproduct2} alt="cart-product" /></a>
              <span className="product__thumbnail--quantity">1</span>
            </div>
            <div className="product__description">
              <h3 className="product__description--name h4"><a href="product-details.html">Vegetable-healthy</a></h3>
              <span className="product__description--variant">COLOR: Green</span>
            </div>
          </div>
        </td>
        <td className="cart__table--body__list">
          <span className="cart__price">£82.00</span>
        </td>
      </tr>
      <tr className="cart__table--body__items">
        <td className="cart__table--body__list">
          <div className="cart__product d-flex align-items-center">
            <div className="product__thumbnail border-radius-5">
              <a href="product-details.html"><img className="border-radius-5" src={smallproduct4} alt="cart-product" /></a>
              <span className="product__thumbnail--quantity">1</span>
            </div>
            <div className="product__description">
              <h3 className="product__description--name h4"><a href="product-details.html">Raw-onions-surface</a></h3>
              <span className="product__description--variant">COLOR: White</span>
            </div>
          </div>
        </td>
        <td className="cart__table--body__list">
          <span className="cart__price">£78.00</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<div className="checkout__discount--code">
  <form className="d-flex" action="#">
    <label>
    <input className="checkout__discount--code__input--field border-radius-5" placeholder="Gift card or discount code"  type="text" />
    </label>
    <button className="checkout__discount--code__btn primary__btn border-radius-5" type="submit">Apply</button>
  </form>
</div>
<div className="checkout__total">
  <table className="checkout__total--table">
    <tbody className="checkout__total--body">
      <tr className="checkout__total--items">
        <td className="checkout__total--title text-left">Subtotal </td>
        <td className="checkout__total--amount text-right">$860.00</td>
      </tr>
      <tr className="checkout__total--items">
        <td className="checkout__total--title text-left">Shipping</td>
        <td className="checkout__total--calculated__text text-right">Calculated at next step</td>
      </tr>
    </tbody>
    <tfoot className="checkout__total--footer">
      <tr className="checkout__total--footer__items">
        <td className="checkout__total--footer__title checkout__total--footer__list text-left">Total </td>
        <td className="checkout__total--footer__amount checkout__total--footer__list text-right">$860.00</td>
      </tr>
    </tfoot>
  </table>
</div>
</aside>
  );
}

export default CheckoutAside;