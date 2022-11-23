import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { product1, product10, product11, product12, product13, product14, product15, product2, product3, product4, product5, product6, product7, product8, product9 } from '../../assets/img';
import {Link} from 'react-router-dom';
import { Clothing, Hairs, skinCares } from './data';
import { API_ROUTES, STORE_ENDPOINT } from '../../utils/api_client';
import { get } from '../../utils/axios';
// import { get, getApi, userDetails } from '../../utils/axios';

function Product(){
  // const data

  const [store, setStore] = useState([]);
  const [loading, setLoading] = useState(false);
  const page = 1;
  // const categories = store
  // const categories = category.id
  // useEffect( ()=>{
  //   let response = axios.get(STORE_ENDPOINT.STORE);
  //   console.log(response)
  //   response.then((res)=>{
  //     // console.log(res.data)
  //   })
  //   // setStore(response.data)
  //   // const fetchStore = async () =>{
  //   //   let response = await axios.get(STORE_ENDPOINT.STORE);
  //   //   setStore(response.data)
  //   //   // console.log(response.data)
  //   // }
  //   // fetchStore();
  // },[])
  useEffect(() => {
    // fetcherss();
    setLoading(true);
    get(`${API_ROUTES.GET_STORE}${page}`).then(responce => {
      setStore(responce.results);
      setLoading(false);
    });
  }, [])
//   const fetcherss = async () => {
//     await axios.get(`${API_ROUTES.GET_STORE}${page}`)
//     .then((res) => {
//   //     setTimeout(function() {
//      setStore(res.results);
//   //    // body
//   //    console.clear()
//   console.log(res.results);
//      console.log(store, "store");  
//   //  }, 2000); 
//   })
//  }
  return (
    <section className="product__section section--padding pt-5 mt-5">
    <div className="container-fluid">
      <div className="section__heading text-center mb-35">
        <h2 className="section__heading--maintitle">New Products</h2>
      </div>
      <ul className="nav product__tab--one product__tab--primary__btn   d-flex justify-content-center mb-50">
        <li className="product__tab--primary__btn__list active">
          <a href="#skincare" className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#skincare" type="button" role="tab" aria-controls=".home" aria-selected="true">
            Skincare
          </a> 
        </li>
        <li className="product__tab--primary__btn__list ">
          <a href="#clothing" className="nav-link" id="home-tab" data-bs-toggle="tab" data-bs-target="#clothing" type="button" role="tab" aria-controls=".home" aria-selected="true">
            Clothing
          </a> 
        </li>
        <li className="product__tab--primary__btn__list ">
          <a href="#hairs" className="nav-link" id="home-tab" data-bs-toggle="tab" data-bs-target="#hairs" type="button" role="tab" aria-controls=".home" aria-selected="true">
            Hairs
          </a> 
        </li>
      </ul>

      <div className="tab-content" id="myTabContent">
        <div id="skincare" className="tab-pane fade show active " role="tabpanel" aria-labelledby="skincare-tab">
          <div className="product__section--inner">
            <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 mb--n30">
              {skinCares.map((skincare)=>{
                return(
                  <div className="col mb-30">
                    <div className="product__items" key={skincare.id}>
                      <div className="product__items--thumbnail">
                        <Link className="product__items--link" to="/productdetail">
                        <img className="product__items--img product__primary--img" src={skincare.img} alt="product-img" />
                        {/* <img className="product__items--img product__secondary--img" alt="product-img" /> */}
                        </Link>
                        <div className="product__badge">
                          {/* <span className="product__badge--items sale">{skincare.badge}</span> */}
                        </div>
                      </div>
                      <div className="product__items--content">
                        <span className="product__items--content__subtitle">{loading ? "Loading" : ""}</span>
                        <h3 className="product__items--content__title h4"><Link to="/productdetail">{}</Link></h3>
                        <div className="product__items--price">
                          <span className="current__price">{}</span>
                          <span className="price__divided"></span>
                          <span className="old__price">{}</span>
                        </div>
                        <ul className="rating product__rating d-flex">
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"></path>
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"></path>
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"></path>
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"></path>
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"></path>
                              </svg>
                            </span>
                          </li>
                        </ul>
                        <ul className="product__items--action d-flex">
                          <li className="product__items--action__list">
                            <Link className="product__items--action__btn add__to--cart" to="/checkout">
                              <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 14.706 13.534">
                                <g transform="translate(0 0)">
                                  <g>
                                    <path data-name="Path 16787" d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z" transform="translate(0 -463.248)" fill="currentColor"></path>
                                    <path data-name="Path 16788" d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z" transform="translate(-1.191 -466.622)" fill="currentColor"></path>
                                    <path data-name="Path 16789" d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z" transform="translate(-2.875 -466.622)" fill="currentColor"></path>
                                  </g>
                                </g>
                              </svg>
                              <span className="add__to--cart__text"> + Add to cart</span>
                            </Link>
                          </li>
                          <li className="product__items--action__list">
                            <Link className="product__items--action__btn" to="wishlist.html">
                              <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="25.51" height="23.443" viewBox="0 0 512 512">
                                <path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></path>
                              </svg>
                              <span className="visually-hidden">Wishlist</span>
                            </Link>
                          </li>
                          <li className="product__items--action__list">
                            <Link className="product__items--action__btn" data-open="modal1">
                              <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg"  width="25.51" height="23.443" viewBox="0 0 512 512">
                                <path d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
                                <circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/>
                              </svg>
                              <span className="visually-hidden">Quick View</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* <div id="clothing" className="tab-pane fade" role="tabpanel" aria-labelledby="clothing-tab">
          <div className="product__section--inner">
            <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 mb--n30">
              {Clothing.map((cloth) =>{
                return(
                  <div className="col mb-30" key={cloth.id}>
                    <div className="product__items ">
                      <div className="product__items--thumbnail">
                        <Link className="product__items--link" to="/productdetail">
                        <img className="product__items--img product__primary--img" src={cloth.img} alt="product-img" />
                        <img className="product__items--img product__secondary--img" src={cloth.hoverImg} alt="product-img" />
                        </Link>
                        <div className="product__badge">
                          <span className="product__badge--items sale">{cloth.badge}</span>
                        </div>
                      </div>
                      <div className="product__items--content">
                        <span className="product__items--content__subtitle">{cloth.title}</span>
                        <h4 className="product__items--content__title"><Link to="/productdetail">{cloth.desc}</Link></h4>
                        <div className="product__items--price">
                          <span className="current__price">{cloth.newPrice}</span>
                          <span className="price__divided"></span>
                          <span className="old__price">{cloth.oldPrice}</span>
                        </div>
                        <ul className="rating product__rating d-flex">
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"></path>
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"></path>
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"></path>
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"></path>
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"></path>
                              </svg>
                            </span>
                          </li>
                        </ul>
                        <ul className="product__items--action d-flex">
                          <li className="product__items--action__list">
                            <Link className="product__items--action__btn add__to--cart" to="/checkout">
                              <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 14.706 13.534">
                                <g transform="translate(0 0)">
                                  <g>
                                    <path data-name="Path 16787" d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z" transform="translate(0 -463.248)" fill="currentColor"></path>
                                    <path data-name="Path 16788" d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z" transform="translate(-1.191 -466.622)" fill="currentColor"></path>
                                    <path data-name="Path 16789" d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z" transform="translate(-2.875 -466.622)" fill="currentColor"></path>
                                  </g>
                                </g>
                              </svg>
                              <span className="add__to--cart__text"> + Add to cart</span>
                            </Link>
                          </li>
                          <li className="product__items--action__list">
                            <Link className="product__items--action__btn" to="wishlist.html">
                              <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="25.51" height="23.443" viewBox="0 0 512 512">
                                <path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></path>
                              </svg>
                              <span className="visually-hidden">Wishlist</span>
                            </Link>
                          </li>
                          <li className="product__items--action__list">
                            <Link className="product__items--action__btn" data-open="modal1"  >
                              <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg"  width="25.51" height="23.443" viewBox="0 0 512 512">
                                <path d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
                                <circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/>
                              </svg>
                              <span className="visually-hidden">Quick View</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div> */}

        <div id="hairs" className="tab-pane fade" role="tabpanel" aria-labelledby="hairs-tab">
          <div className="product__section--inner">
            <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 mb--n30">
              {Hairs.map((hair)=>{
                return(
                  <div className="col mb-30" key={hair.id}>
                    <div className="product__items ">
                      <div className="product__items--thumbnail">
                        <Link className="product__items--link" to="/productdetail">
                        <img className="product__items--img product__primary--img" src={hair.img} alt="product-img" />
                        <img className="product__items--img product__secondary--img" src={hair.hoverImg} alt="product-img" />
                        </Link>
                        <div className="product__badge">
                          {/* <h1>eyewyeuhhwjehjhwjehwjhej3</h1> */}
                          <span className="product__badge--items sale">{hair.badge}</span>
                        </div>
                      </div>
                      <div className="product__items--content">
                        <span className="product__items--content__subtitle">{hair.title}</span>
                        <h4 className="product__items--content__title"><Link to="/productdetail">{hair.desc}</Link></h4>
                        <div className="product__items--price">
                          <span className="current__price">{hair.newPrice}</span>
                          <span className="price__divided"></span>
                          <span className="old__price">{hair.oldPrice}</span>
                        </div>
                        <ul className="rating product__rating d-flex">
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"></path>
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"></path>
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"></path>
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"></path>
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor"></path>
                              </svg>
                            </span>
                          </li>
                        </ul>
                        <ul className="product__items--action d-flex">
                          <li className="product__items--action__list">
                            <Link className="product__items--action__btn add__to--cart" to="/checkout">
                              <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 14.706 13.534">
                                <g transform="translate(0 0)">
                                  <g>
                                    <path data-name="Path 16787" d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z" transform="translate(0 -463.248)" fill="currentColor"></path>
                                    <path data-name="Path 16788" d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z" transform="translate(-1.191 -466.622)" fill="currentColor"></path>
                                    <path data-name="Path 16789" d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z" transform="translate(-2.875 -466.622)" fill="currentColor"></path>
                                  </g>
                                </g>
                              </svg>
                              <span className="add__to--cart__text"> + Add to cart</span>
                            </Link>
                          </li>
                          <li className="product__items--action__list">
                            <Link className="product__items--action__btn" to="wishlist.html">
                              <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="25.51" height="23.443" viewBox="0 0 512 512">
                                <path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></path>
                              </svg>
                              <span className="visually-hidden">Wishlist</span>
                            </Link>
                          </li>
                          <li className="product__items--action__list">
                            <Link className="product__items--action__btn" data-open="modal1"  >
                              <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg"  width="25.51" height="23.443" viewBox="0 0 512 512">
                                <path d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
                                <circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/>
                              </svg>
                              <span className="visually-hidden">Quick View</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </section>
  );
}

export default Product;