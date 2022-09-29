import React from 'react';
import { smallproduct1, smallproduct2, smallproduct3, smallproduct4, smallproduct5 } from '../../assets/img';

function SIdebar(props) {
  return (
<div class="col-xl-3 col-lg-4">
  <div class="shop__sidebar--widget widget__area d-none d-lg-block">
    <div class="single__widget widget__bg">
      <h2 class="widget__title h3">Categories</h2>
      <ul class="widget__categories--menu">
        <li class="widget__categories--menu__list">
          <label class="widget__categories--menu__label d-flex align-items-center">
            <img class="widget__categories--menu__img" src={smallproduct1} alt="categories-img" />
            <span class="widget__categories--menu__text">Denim Jacket</span>
            <svg class="widget__categories--menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12.355" height="8.394">
              <path  d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z" transform="translate(-6 -8.59)" fill="currentColor"></path>
            </svg>
          </label>
          <ul class="widget__categories--sub__menu">
            <li class="widget__categories--sub__menu--list">
              <a class="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
              <img class="widget__categories--sub__menu--img" src={smallproduct2} alt="categories-img" />
              <span class="widget__categories--sub__menu--text">Jacket, Women</span>
              </a>
            </li>
            <li class="widget__categories--sub__menu--list">
              <a class="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
              <img class="widget__categories--sub__menu--img" src={smallproduct3} alt="categories-img" />
              <span class="widget__categories--sub__menu--text">Woolend Jacket</span>
              </a>
            </li>
            <li class="widget__categories--sub__menu--list">
              <a class="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
              <img class="widget__categories--sub__menu--img" src={smallproduct4} alt="categories-img" />
              <span class="widget__categories--sub__menu--text">Western denim</span>
              </a>
            </li>
            <li class="widget__categories--sub__menu--list">
              <a class="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
              <img class="widget__categories--sub__menu--img" src={smallproduct5} alt="categories-img" />
              <span class="widget__categories--sub__menu--text">Mini Dresss</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="widget__categories--menu__list">
          <label class="widget__categories--menu__label d-flex align-items-center">
            <img class="widget__categories--menu__img" src={smallproduct2} alt="categories-img" />
            <span class="widget__categories--menu__text">Oversize Cotton</span>
            <svg class="widget__categories--menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12.355" height="8.394" >
              <path  d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z" transform="translate(-6 -8.59)" fill="currentColor"></path>
            </svg>
          </label>
          <ul class="widget__categories--sub__menu">
            <li class="widget__categories--sub__menu--list">
              <a class="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
              <img class="widget__categories--sub__menu--img" src={smallproduct2} alt="categories-img" />
              <span class="widget__categories--sub__menu--text">Jacket, Women</span>
              </a>
            </li>
            <li class="widget__categories--sub__menu--list">
              <a class="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
              <img class="widget__categories--sub__menu--img" src="assets/img/product/small-product3.png" alt="categories-img" />
              <span class="widget__categories--sub__menu--text">Woolend Jacket</span>
              </a>
            </li>
            <li class="widget__categories--sub__menu--list">
              <a class="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
              <img class="widget__categories--sub__menu--img" src={smallproduct4} alt="categories-img" />
              <span class="widget__categories--sub__menu--text">Western denim</span>
              </a>
            </li>
            <li class="widget__categories--sub__menu--list">
              <a class="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
              <img class="widget__categories--sub__menu--img" src={smallproduct5} alt="categories-img" />
              <span class="widget__categories--sub__menu--text">Mini Dresss</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="widget__categories--menu__list">
          <label class="widget__categories--menu__label d-flex align-items-center">
            <img class="widget__categories--menu__img" src={smallproduct3} alt="categories-img" />
            <span class="widget__categories--menu__text">Dairy & chesse</span>
            <svg class="widget__categories--menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12.355" height="8.394">
              <path  d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z" transform="translate(-6 -8.59)" fill="currentColor"></path>
            </svg>
          </label>
          <ul class="widget__categories--sub__menu">
            <li class="widget__categories--sub__menu--list">
              <a class="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
              <img class="widget__categories--sub__menu--img" src={smallproduct2} alt="categories-img" />
              <span class="widget__categories--sub__menu--text">Jacket, Women</span>
              </a>
            </li>
            <li class="widget__categories--sub__menu--list">
              <a class="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
              <img class="widget__categories--sub__menu--img" src={smallproduct3} alt="categories-img" />
              <span class="widget__categories--sub__menu--text">Woolend Jacket</span>
              </a>
            </li>
            <li class="widget__categories--sub__menu--list">
              <a class="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
              <img class="widget__categories--sub__menu--img" src={smallproduct4} alt="categories-img" />
              <span class="widget__categories--sub__menu--text">Western denim</span>
              </a>
            </li>
            <li class="widget__categories--sub__menu--list">
              <a class="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
              <img class="widget__categories--sub__menu--img" src={smallproduct5} alt="categories-img" />
              <span class="widget__categories--sub__menu--text">Mini Dresss</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="widget__categories--menu__list">
          <label class="widget__categories--menu__label d-flex align-items-center">
            <img class="widget__categories--menu__img" src={smallproduct4} alt="categories-img" />
            <span class="widget__categories--menu__text">Shoulder Bag</span>
            <svg class="widget__categories--menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12.355" height="8.394">
              <path  d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z" transform="translate(-6 -8.59)" fill="currentColor"></path>
            </svg>
          </label>
          <ul class="widget__categories--sub__menu">
            <li class="widget__categories--sub__menu--list">
              <a class="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
              <img class="widget__categories--sub__menu--img" src={smallproduct2} alt="categories-img" />
              <span class="widget__categories--sub__menu--text">Jacket, Women</span>
              </a>
            </li>
            <li class="widget__categories--sub__menu--list">
              <a class="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
              <img class="widget__categories--sub__menu--img" src={smallproduct3} alt="categories-img" />
              <span class="widget__categories--sub__menu--text">Woolend Jacket</span>
              </a>
            </li>
            <li class="widget__categories--sub__menu--list">
              <a class="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
              <img class="widget__categories--sub__menu--img" src={smallproduct4} alt="categories-img" />
              <span class="widget__categories--sub__menu--text">Western denim</span>
              </a>
            </li>
            <li class="widget__categories--sub__menu--list">
              <a class="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
              <img class="widget__categories--sub__menu--img" src={smallproduct5} alt="categories-img" />
              <span class="widget__categories--sub__menu--text">Mini Dresss</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="widget__categories--menu__list">
          <label class="widget__categories--menu__label d-flex align-items-center">
            <img class="widget__categories--menu__img" src={smallproduct5} alt="categories-img" />
            <span class="widget__categories--menu__text">Denim Jacket</span>
            <svg class="widget__categories--menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12.355" height="8.394">
              <path  d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z" transform="translate(-6 -8.59)" fill="currentColor"></path>
            </svg>
          </label>
          <ul class="widget__categories--sub__menu">
            <li class="widget__categories--sub__menu--list">
              <a class="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
              <img class="widget__categories--sub__menu--img" src={smallproduct2} alt="categories-img" />
              <span class="widget__categories--sub__menu--text">Jacket, Women</span>
              </a>
            </li>
            <li class="widget__categories--sub__menu--list">
              <a class="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
              <img class="widget__categories--sub__menu--img" src={smallproduct3} alt="categories-img" />
              <span class="widget__categories--sub__menu--text">Woolend Jacket</span>
              </a>
            </li>
            <li class="widget__categories--sub__menu--list">
              <a class="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
              <img class="widget__categories--sub__menu--img" src={smallproduct4} alt="categories-img" />
              <span class="widget__categories--sub__menu--text">Western denim</span>
              </a>
            </li>
            <li class="widget__categories--sub__menu--list">
              <a class="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
              <img class="widget__categories--sub__menu--img" src={smallproduct5} alt="categories-img" />
              <span class="widget__categories--sub__menu--text">Mini Dresss</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="single__widget widget__bg">
      <h2 class="widget__title h3">Dietary Needs</h2>
      <ul class="widget__form--check">
        <li class="widget__form--check__list">
          <label class="widget__form--check__label" for="check1">Denim shirt</label>
          <input class="widget__form--check__input" id="check1" type="checkbox" />
          <span class="widget__form--checkmark"></span>
        </li>
        <li class="widget__form--check__list">
          <label class="widget__form--check__label" for="check2">Need Winter</label>
          <input class="widget__form--check__input" id="check2" type="checkbox" />
          <span class="widget__form--checkmark"></span>
        </li>
        <li class="widget__form--check__list">
          <label class="widget__form--check__label" for="check3">Fashion Trends</label>
          <input class="widget__form--check__input" id="check3" type="checkbox" />
          <span class="widget__form--checkmark"></span>
        </li>
        <li class="widget__form--check__list">
          <label class="widget__form--check__label" for="check4">Oversize Cotton</label>
          <input class="widget__form--check__input" id="check4" type="checkbox" />
          <span class="widget__form--checkmark"></span>
        </li>
        <li class="widget__form--check__list">
          <label class="widget__form--check__label" for="check5">Baking material</label>
          <input class="widget__form--check__input" id="check5" type="checkbox" />
          <span class="widget__form--checkmark"></span>
        </li>
      </ul>
    </div>
    <div class="single__widget price__filter widget__bg">
      <h2 class="widget__title h3">Filter By Price</h2>
      <form class="price__filter--form" action="#">
        <div class="price__filter--form__inner mb-15 d-flex align-items-center">
          <div class="price__filter--group">
            <label class="price__filter--label" for="Filter-Price-GTE2">From</label>
            <div class="price__filter--input border-radius-5 d-flex align-items-center">
              <span class="price__filter--currency">$</span>
              <label>
              <input class="price__filter--input__field border-0" name="filter.v.price.gte" type="number" placeholder="0" min="0" max="250.00" />
              </label>
            </div>
          </div>
          <div class="price__divider">
            <span>-</span>
          </div>
          <div class="price__filter--group">
            <label class="price__filter--label" for="Filter-Price-LTE2">To</label>
            <div class="price__filter--input border-radius-5 d-flex align-items-center">
              <span class="price__filter--currency">$</span>
              <label>
              <input class="price__filter--input__field border-0" name="filter.v.price.lte" type="number" min="0" placeholder="250.00" max="250.00" /> 
              </label>
            </div>
          </div>
        </div>
        <button class="price__filter--btn primary__btn" type="submit">Filter</button>
      </form>
    </div>
  </div>
</div>

  );
}

export default SIdebar;