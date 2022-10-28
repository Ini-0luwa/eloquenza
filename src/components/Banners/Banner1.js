import React from 'react';
import {Link} from 'react-router-dom';
import { salesBanner } from '../../data/Alldata';

function Banner1(props) {
  return (
    <section className="banner__section .section--padding pb-5">
    <div className="container-fluid">
      <div className="row row-cols-md-2 row-cols-1 mb--n28 mt-5">
        {salesBanner.map((banner, index) =>{
          return(
          <div className="col mb-28 col-lg-4" key={index}>
            <div className="banner__items position__relative">
              <Link className="banner__items--thumbnail" to="shop.html">
                <img className="banner__items--thumbnail__img banner__img--max__height" src={banner.img} alt="banner-img" />
                <div className="banner__items--content">
                  <span className="banner__items--content__subtitle d-none d-lg-block"></span>
                  <h2 className="banner__items--content__title h3">{banner.title}</h2>
                  <span className="banner__items--content__link"><u>{banner.desc}</u></span>
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