import React from 'react';
import { brand_logo_1, brand_logo_2, brand_logo_3, brand_logo_4, brand_logo_5 } from '../../assets/img';

function Brandsection(props) {
  return (
    <div className="brand__logo--section bg__secondary section--padding">
    <div className="container-fluid">
        <div className="row row-cols-1">
            <div className="col">
                <div className="brand__logo--section__inner d-flex justify-content-center align-items-center">
                    <div className="brand__logo--items">
                        <img className="brand__logo--items__thumbnail--img display-block" src={brand_logo_1} alt="brand logo" />
                    </div>
                    <div className="brand__logo--items">
                        <img className="brand__logo--items__thumbnail--img display-block" src={brand_logo_2} alt="brand logo" />
                    </div>
                    <div className="brand__logo--items">
                        <img className="brand__logo--items__thumbnail--img display-block" src={brand_logo_3} alt="brand logo" />
                    </div>
                    <div className="brand__logo--items">
                        <img className="brand__logo--items__thumbnail--img display-block" src={brand_logo_4} alt="brand logo" />
                    </div>
                    <div className="brand__logo--items">
                        <img className="brand__logo--items__thumbnail--img display-block" src={brand_logo_5} alt="brand logo" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default Brandsection;