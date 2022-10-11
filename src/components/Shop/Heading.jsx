import React from 'react';

function Heading(props) {
  return (
<div className="container shop__header bg__gray--color d-flex align-items-center justify-content-between mb-30">
  <button className="widget__filter--btn d-flex d-lg-none align-items-center" data-offcanvas>
    <svg  className="widget__filter--btn__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="28" d="M368 128h80M64 128h240M368 384h80M64 384h240M208 256h240M64 256h80"/>
      <circle cx="336" cy="128" r="28" fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="28"/>
      <circle cx="176" cy="256" r="28" fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="28"/>
      <circle cx="336" cy="384" r="28" fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="28"/>
    </svg>
    <span className="widget__filter--btn__text">Filter</span>
  </button>
  <div className="product__view--mode d-flex align-items-center">
    <div className="product__view--mode__list product__short--by align-items-center d-none d-lg-flex">
      <label className="product__view--label">Prev Page :</label>
      <div className="select shop__header--select">
        <select className="product__view--select">
          <option selected value="1">65</option>
          <option value="2">40</option>
          <option value="3">42</option>
          <option value="4">57 </option>
          <option value="5">60 </option>
        </select>
      </div>
    </div>
    <div className="product__view--mode__list product__short--by align-items-center d-none d-lg-flex">
      <label className="product__view--label">Sort By :</label>
      <div className="select shop__header--select">
        <select className="product__view--select">
          <option selected value="1">Sort by latest</option>
          <option value="2">Sort by popularity</option>
          <option value="3">Sort by newness</option>
          <option value="4">Sort by  rating </option>
        </select>
      </div>
    </div>
    <div className="product__view--mode__list product__view--search d-none d-lg-block">
      <form className="product__view--search__form" action="#">
        <label>
        <input className="product__view--search__input border-0" placeholder="Search by" type="text" />
        </label>
        <button className="product__view--search__btn" aria-label="shop button"  type="submit">
          <svg className="product__view--search__btn--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 512 512">
            <path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" strokeWidth="32"/>
            <path fill="none" stroke="currentColor" strokeLinecap="round" stroke-miterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"/>
          </svg>
        </button>
      </form>
    </div>
  </div>
  <p className="product__showing--count">Showing 1–9 of 21 results</p>
</div>

  );
}

export default Heading;