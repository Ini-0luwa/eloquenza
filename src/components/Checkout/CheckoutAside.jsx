import React from 'react';
import { smallproduct7, smallproduct2, smallproduct4 } from '../../assets/img';


function CheckoutAside(props) {
  return (

<aside class="checkout__sidebar sidebar">
<div class="cart__table checkout__product--table">
  <table class="cart__table--inner">
    <tbody class="cart__table--body">
      <tr class="cart__table--body__items">
        <td class="cart__table--body__list">
          <div class="product__image two  d-flex align-items-center">
            <div class="product__thumbnail border-radius-5">
              <a href="product-details.html"><img class="border-radius-5" src={smallproduct7} alt="cart-product" /></a>
              <span class="product__thumbnail--quantity">1</span>
            </div>
            <div class="product__description">
              <h3 class="product__description--name h4"><a href="product-details.html">Fresh-whole-fish</a></h3>
              <span class="product__description--variant">COLOR: Blue</span>
            </div>
          </div>
        </td>
        <td class="cart__table--body__list">
          <span class="cart__price">£65.00</span>
        </td>
      </tr>
      <tr class="cart__table--body__items">
        <td class="cart__table--body__list">
          <div class="cart__product d-flex align-items-center">
            <div class="product__thumbnail border-radius-5">
              <a href="product-details.html"><img class="border-radius-5" src={smallproduct2} alt="cart-product" /></a>
              <span class="product__thumbnail--quantity">1</span>
            </div>
            <div class="product__description">
              <h3 class="product__description--name h4"><a href="product-details.html">Vegetable-healthy</a></h3>
              <span class="product__description--variant">COLOR: Green</span>
            </div>
          </div>
        </td>
        <td class="cart__table--body__list">
          <span class="cart__price">£82.00</span>
        </td>
      </tr>
      <tr class="cart__table--body__items">
        <td class="cart__table--body__list">
          <div class="cart__product d-flex align-items-center">
            <div class="product__thumbnail border-radius-5">
              <a href="product-details.html"><img class="border-radius-5" src={smallproduct4} alt="cart-product" /></a>
              <span class="product__thumbnail--quantity">1</span>
            </div>
            <div class="product__description">
              <h3 class="product__description--name h4"><a href="product-details.html">Raw-onions-surface</a></h3>
              <span class="product__description--variant">COLOR: White</span>
            </div>
          </div>
        </td>
        <td class="cart__table--body__list">
          <span class="cart__price">£78.00</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<div class="checkout__discount--code">
  <form class="d-flex" action="#">
    <label>
    <input class="checkout__discount--code__input--field border-radius-5" placeholder="Gift card or discount code"  type="text" />
    </label>
    <button class="checkout__discount--code__btn primary__btn border-radius-5" type="submit">Apply</button>
  </form>
</div>
<div class="checkout__total">
  <table class="checkout__total--table">
    <tbody class="checkout__total--body">
      <tr class="checkout__total--items">
        <td class="checkout__total--title text-left">Subtotal </td>
        <td class="checkout__total--amount text-right">$860.00</td>
      </tr>
      <tr class="checkout__total--items">
        <td class="checkout__total--title text-left">Shipping</td>
        <td class="checkout__total--calculated__text text-right">Calculated at next step</td>
      </tr>
    </tbody>
    <tfoot class="checkout__total--footer">
      <tr class="checkout__total--footer__items">
        <td class="checkout__total--footer__title checkout__total--footer__list text-left">Total </td>
        <td class="checkout__total--footer__amount checkout__total--footer__list text-right">$860.00</td>
      </tr>
    </tfoot>
  </table>
</div>
</aside>
  );
}

export default CheckoutAside;