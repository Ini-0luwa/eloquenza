import React from 'react';
import {Link} from 'react-router-dom';
import { dealBanner } from '../../data/Alldata';

function Banner4(props) {
  return (
    <section className=".deals__banner--section .section--padding pt-0">
    <div className="container-fluid">
      <div className="deals__banner--inner banner__bg">
        <div className="row row-cols-1 align-items-center">
          <div className="col">
            {dealBanner.map((banner, index)=>{
              return(
                <div className="deals__banner--content position__relative" key={index}>
                  <span className="deals__banner--content__subtitle text__secondary">{banner.badge}</span>
                  <h2 className="deals__banner--content__maintitle">{banner.title}</h2>
                  <p className="deals__banner--content__desc">{banner.desc}</p>
                  <div className="deals__banner--countdown d-flex" data-countdown="Sep 30, 2022 00:00:00"></div>
                  <Link className="primary__btn" to="shop.html">
                    {banner.btnText}
                    <svg className="primary__btn--arrow__icon" xmlns="http://www.w3.org/2000/svg" width="20.2" height="12.2" viewBox="0 0 6.2 6.2">
                      <path d="M7.1,4l-.546.546L8.716,6.713H4v.775H8.716L6.554,9.654,7.1,10.2,9.233,8.067,10.2,7.1Z" transform="translate(-4 -4)" fill="currentColor"></path>
                    </svg>
                  </Link>
                  <br />
                  <div className="banner__bideo--play">
                    <Link className="banner__bideo--play__icon glightbox" to="https://vimeo.com/115041822" data-gallery="video">
                      <svg id="play" xmlns="http://www.w3.org/2000/svg" width="40.302" height="40.302" viewBox="0 0 46.302 46.302">
                        <g id="Group_193" data-name="Group 193" transform="translate(0 0)">
                          <path id="Path_116" data-name="Path 116" d="M39.521,6.781a23.151,23.151,0,0,0-32.74,32.74,23.151,23.151,0,0,0,32.74-32.74ZM23.151,44.457A21.306,21.306,0,1,1,44.457,23.151,21.33,21.33,0,0,1,23.151,44.457Z" fill="currentColor"/>
                          <g id="Group_188" data-name="Group 188" transform="translate(15.588 11.19)">
                            <g id="Group_187" data-name="Group 187">
                              <path id="Path_117" data-name="Path 117" d="M190.3,133.213l-13.256-8.964a3,3,0,0,0-4.674,2.482v17.929a2.994,2.994,0,0,0,4.674,2.481l13.256-8.964a3,3,0,0,0,0-4.963Zm-1.033,3.435-13.256,8.964a1.151,1.151,0,0,1-1.8-.953V126.73a1.134,1.134,0,0,1,.611-1.017,1.134,1.134,0,0,1,1.185.063l13.256,8.964a1.151,1.151,0,0,1,0,1.907Z" transform="translate(-172.366 -123.734)" fill="currentColor"/>
                            </g>
                          </g>
                          <g id="Group_190" data-name="Group 190" transform="translate(28.593 5.401)">
                            <g id="Group_189" data-name="Group 189">
                              <path id="Path_118" data-name="Path 118" d="M328.31,70.492a18.965,18.965,0,0,0-10.886-10.708.922.922,0,1,0-.653,1.725,17.117,17.117,0,0,1,9.825,9.664.922.922,0,1,0,1.714-.682Z" transform="translate(-316.174 -59.724)" fill="currentColor"/>
                            </g>
                          </g>
                          <g id="Group_192" data-name="Group 192" transform="translate(22.228 4.243)">
                            <g id="Group_191" data-name="Group 191">
                              <path id="Path_119" data-name="Path 119" d="M249.922,47.187a19.08,19.08,0,0,0-3.2-.27.922.922,0,0,0,0,1.845,17.245,17.245,0,0,1,2.889.243.922.922,0,1,0,.31-1.818Z" transform="translate(-245.801 -46.917)" fill="currentColor"/>
                            </g>
                          </g>
                        </g>
                      </svg>
                      <span className="visually-hidden">Video Play</span>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Banner4;