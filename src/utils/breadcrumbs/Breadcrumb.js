import React from 'react';

function Breadcrumb(props) {
  return (
    <section className="breadcrumb__section breadcrumb__bg">
    <div className="container">
        <div className="row row-cols-1">
            <div className="col">
                <div className="breadcrumb__content text-center">
                    <h1 className="breadcrumb__content--title text-white mb-25">About Us</h1>
                    <ul className="breadcrumb__content--menu d-flex justify-content-center">
                        <li className="breadcrumb__content--menu__items"><a className="text-white" href="index.html">Home</a></li>
                        <li className="breadcrumb__content--menu__items"><span className="text-white">About Us</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
  );
}

export default Breadcrumb;