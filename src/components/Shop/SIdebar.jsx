import React from 'react';
import { smallproduct1, smallproduct2, smallproduct3, smallproduct4, smallproduct5 } from '../../assets/img';

function SIdebar(props) {
  return (
<div className="col-xl-3 col-lg-4">
  <div className="shop__sidebar--widget widget__area d-none d-lg-block">
    <div className="single__widget widget__bg">
      <h2 className="widget__title h3">Categories</h2>
      <ul className="widget__categories--menu">
        <li className="widget__categories--menu__list">
          <label className="widget__categories--menu__label d-flex align-items-center">
            <img className="widget__categories--menu__img" src={smallproduct1} alt="categories-img" />
            <span className="widget__categories--menu__text">Denim Jacket</span>
            <svg className="widget__categories--menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12.355" height="8.394">
              <path  d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z" transform="translate(-6 -8.59)" fill="currentColor"></path>
            </svg>
          </label>
          <ul className="widget__categories--sub__menu">
            <li className="widget__categories--sub__menu--list">
              <a className="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
              <img className="widget__categories--sub__menu--img" src={smallproduct2} alt="categories-img" />
              <span className="widget__categories--sub__menu--text">Jacket, Women</span>
              </a>
            </li>
            <li className="widget__categories--sub__menu--list">
              <a className="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
              <img className="widget__categories--sub__menu--img" src={smallproduct3} alt="categories-img" />
              <span className="widget__categories--sub__menu--text">Woolend Jacket</span>
              </a>
            </li>
            <li className="widget__categories--sub__menu--list">
              <a className="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
              <img className="widget__categories--sub__menu--img" src={smallproduct4} alt="categories-img" />
              <span className="widget__categories--sub__menu--text">Western denim</span>
              </a>
            </li>
            <li className="widget__categories--sub__menu--list">
              <a className="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
              <img className="widget__categories--sub__menu--img" src={smallproduct5} alt="categories-img" />
              <span className="widget__categories--sub__menu--text">Mini Dresss</span>
              </a>
            </li>
          </ul>
        </li>
        <li className="widget__categories--menu__list">
          <label className="widget__categories--menu__label d-flex align-items-center">
            <img className="widget__categories--menu__img" src={smallproduct2} alt="categories-img" />
            <span className="widget__categories--menu__text">Oversize Cotton</span>
            <svg className="widget__categories--menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12.355" height="8.394" >
              <path  d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z" transform="translate(-6 -8.59)" fill="currentColor"></path>
            </svg>
          </label>
          <ul className="widget__categories--sub__menu">
            <li className="widget__categories--sub__menu--list">
              <a className="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
              <img className="widget__categories--sub__menu--img" src={smallproduct2} alt="categories-img" />
              <span className="widget__categories--sub__menu--text">Jacket, Women</span>
              </a>
            </li>
            <li className="widget__categories--sub__menu--list">
              <a className="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
              <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product3.png" alt="categories-img" />
              <span className="widget__categories--sub__menu--text">Woolend Jacket</span>
              </a>
            </li>
            <li className="widget__categories--sub__menu--list">
              <a className="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
              <img className="widget__categories--sub__menu--img" src={smallproduct4} alt="categories-img" />
              <span className="widget__categories--sub__menu--text">Western denim</span>
              </a>
            </li>
            <li className="widget__categories--sub__menu--list">
              <a className="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
              <img className="widget__categories--sub__menu--img" src={smallproduct5} alt="categories-img" />
              <span className="widget__categories--sub__menu--text">Mini Dresss</span>
              </a>
            </li>
          </ul>
        </li>
        <li className="widget__categories--menu__list">
          <label className="widget__categories--menu__label d-flex align-items-center">
            <img className="widget__categories--menu__img" src={smallproduct3} alt="categories-img" />
            <span className="widget__categories--menu__text">Dairy & chesse</span>
            <svg className="widget__categories--menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12.355" height="8.394">
              <path  d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z" transform="translate(-6 -8.59)" fill="currentColor"></path>
            </svg>
          </label>
          <ul className="widget__categories--sub__menu">
            <li className="widget__categories--sub__menu--list">
              <a className="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
              <img className="widget__categories--sub__menu--img" src={smallproduct2} alt="categories-img" />
              <span className="widget__categories--sub__menu--text">Jacket, Women</span>
              </a>
            </li>
            <li className="widget__categories--sub__menu--list">
              <a className="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
              <img className="widget__categories--sub__menu--img" src={smallproduct3} alt="categories-img" />
              <span className="widget__categories--sub__menu--text">Woolend Jacket</span>
              </a>
            </li>
            <li className="widget__categories--sub__menu--list">
              <a className="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
              <img className="widget__categories--sub__menu--img" src={smallproduct4} alt="categories-img" />
              <span className="widget__categories--sub__menu--text">Western denim</span>
              </a>
            </li>
            <li className="widget__categories--sub__menu--list">
              <a className="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
              <img className="widget__categories--sub__menu--img" src={smallproduct5} alt="categories-img" />
              <span className="widget__categories--sub__menu--text">Mini Dresss</span>
              </a>
            </li>
          </ul>
        </li>
        <li className="widget__categories--menu__list">
          <label className="widget__categories--menu__label d-flex align-items-center">
            <img className="widget__categories--menu__img" src={smallproduct4} alt="categories-img" />
            <span className="widget__categories--menu__text">Shoulder Bag</span>
            <svg className="widget__categories--menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12.355" height="8.394">
              <path  d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z" transform="translate(-6 -8.59)" fill="currentColor"></path>
            </svg>
          </label>
          <ul className="widget__categories--sub__menu">
            <li className="widget__categories--sub__menu--list">
              <a className="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
              <img className="widget__categories--sub__menu--img" src={smallproduct2} alt="categories-img" />
              <span className="widget__categories--sub__menu--text">Jacket, Women</span>
              </a>
            </li>
            <li className="widget__categories--sub__menu--list">
              <a className="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
              <img className="widget__categories--sub__menu--img" src={smallproduct3} alt="categories-img" />
              <span className="widget__categories--sub__menu--text">Woolend Jacket</span>
              </a>
            </li>
            <li className="widget__categories--sub__menu--list">
              <a className="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
              <img className="widget__categories--sub__menu--img" src={smallproduct4} alt="categories-img" />
              <span className="widget__categories--sub__menu--text">Western denim</span>
              </a>
            </li>
            <li className="widget__categories--sub__menu--list">
              <a className="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
              <img className="widget__categories--sub__menu--img" src={smallproduct5} alt="categories-img" />
              <span className="widget__categories--sub__menu--text">Mini Dresss</span>
              </a>
            </li>
          </ul>
        </li>
        <li className="widget__categories--menu__list">
          <label className="widget__categories--menu__label d-flex align-items-center">
            <img className="widget__categories--menu__img" src={smallproduct5} alt="categories-img" />
            <span className="widget__categories--menu__text">Denim Jacket</span>
            <svg className="widget__categories--menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12.355" height="8.394">
              <path  d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z" transform="translate(-6 -8.59)" fill="currentColor"></path>
            </svg>
          </label>
          <ul className="widget__categories--sub__menu">
            <li className="widget__categories--sub__menu--list">
              <a className="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
              <img className="widget__categories--sub__menu--img" src={smallproduct2} alt="categories-img" />
              <span className="widget__categories--sub__menu--text">Jacket, Women</span>
              </a>
            </li>
            <li className="widget__categories--sub__menu--list">
              <a className="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
              <img className="widget__categories--sub__menu--img" src={smallproduct3} alt="categories-img" />
              <span className="widget__categories--sub__menu--text">Woolend Jacket</span>
              </a>
            </li>
            <li className="widget__categories--sub__menu--list">
              <a className="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
              <img className="widget__categories--sub__menu--img" src={smallproduct4} alt="categories-img" />
              <span className="widget__categories--sub__menu--text">Western denim</span>
              </a>
            </li>
            <li className="widget__categories--sub__menu--list">
              <a className="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
              <img className="widget__categories--sub__menu--img" src={smallproduct5} alt="categories-img" />
              <span className="widget__categories--sub__menu--text">Mini Dresss</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div className="single__widget price__filter widget__bg">
      <h2 className="widget__title h3">Filter By Price</h2>
      <form className="price__filter--form" action="#">
        <div className="price__filter--form__inner mb-15 d-flex align-items-center">
          <div className="price__filter--group">
            <label className="price__filter--label" for="Filter-Price-GTE2">From</label>
            <div className="price__filter--input border-radius-5 d-flex align-items-center">
              <span className="price__filter--currency">$</span>
              <label>
              <input className="price__filter--input__field border-0" name="filter.v.price.gte" type="number" placeholder="0" min="0" max="250.00" />
              </label>
            </div>
          </div>
          <div className="price__divider">
            <span>-</span>
          </div>
          <div className="price__filter--group">
            <label className="price__filter--label" for="Filter-Price-LTE2">To</label>
            <div className="price__filter--input border-radius-5 d-flex align-items-center">
              <span className="price__filter--currency">$</span>
              <label>
              <input className="price__filter--input__field border-0" name="filter.v.price.lte" type="number" min="0" placeholder="250.00" max="250.00" /> 
              </label>
            </div>
          </div>
        </div>
        <button className="price__filter--btn primary__btn" type="submit">Filter</button>
      </form>
    </div>
  </div>
</div>

  );
}

export default SIdebar;