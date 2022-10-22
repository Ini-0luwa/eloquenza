import React from 'react';
import {Link} from 'react-router-dom';
import { salesBanner } from '../../data/Alldata';

function Banner1(props) {
  return (
    <section class="banner__section .section--padding pb-5">
    <div class="container-fluid">
      <div class="row row-cols-md-2 row-cols-1 mb--n28 mt-5">
        {salesBanner.map((banner, index) =>{
          return(
          <div class="col mb-28 col-lg-4">
            <div class="banner__items position__relative">
              <Link class="banner__items--thumbnail" to="shop.html">
                <img class="banner__items--thumbnail__img banner__img--max__height" src={banner.img} alt="banner-img" />
                <div class="banner__items--content">
                  <span class="banner__items--content__subtitle d-none d-lg-block"></span>
                  <h2 class="banner__items--content__title h3">{banner.title}</h2>
                  <span class="banner__items--content__link"><u>{banner.desc}</u></span>
                </div>
              </Link>
            </div>
          </div>
          )
        })}

      </div>
    </div>
  </section>
  );
}

export default Banner1;