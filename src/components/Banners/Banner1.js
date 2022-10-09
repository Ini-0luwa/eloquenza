import React from 'react';
import { banner4, banner5, banner6 } from '../../assets/img';
import {Link} from 'react-router-dom';

function Banner1(props) {
  return (
    <section class="banner__section .section--padding pb-5">
    <div class="container-fluid">
      <div class="row row-cols-md-2 row-cols-1 mb--n28 mt-5">
        <div class="col mb-28 col-lg-4">
          <div class="banner__items position__relative">
            <Link class="banner__items--thumbnail" to="shop.html">
              <img class="banner__items--thumbnail__img banner__img--max__height" src={banner5} alt="banner-img" />
              <div class="banner__items--content">
                <span class="banner__items--content__subtitle d-none d-lg-block"></span>
                <h2 class="banner__items--content__title h3">Elo-Clothing</h2>
                <span class="banner__items--content__link"><u>Shop now</u></span>
              </div>
            </Link>
          </div>
        </div>
        <div class="col mb-28 col-lg-4">
          <div class="banner__items position__relative">
            <Link class="banner__items--thumbnail " to="shop.html">
              <img class="banner__items--thumbnail__img banner__img--max__height" src={banner6} alt="banner-img" />
              <div class="banner__items--content">
                <span class="banner__items--content__subtitle d-none d-lg-block"></span>
                <h2 class="banner__items--content__title h3">Elo-SKincare</h2>
                <span class="banner__items--content__link"><u>Discover Now</u> </span>
              </div>
            </Link>
          </div>
        </div>
        <div class="col mb-28 col-lg-4">
          <div class="banner__items position__relative">
            <Link class="banner__items--thumbnail " to="shop.html">
              <img class="banner__items--thumbnail__img banner__img--max__height" src={banner4} alt="banner-img" />
              <div class="banner__items--content">
                <span class="banner__items--content__subtitle d-none d-lg-block"></span>
                <h2 class="banner__items--content__title h3">Elo-Hairs</h2>
                <span class="banner__items--content__link"><u>Discover Now</u> </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Banner1;