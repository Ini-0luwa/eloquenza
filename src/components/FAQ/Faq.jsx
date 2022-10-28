import React from 'react';

function Faq(props) {
  return (
<section className="faq__section section--padding">
  <div className="container">
    <div className="faq__section--inner">
      <div className="face__step one border-bottom">
        <h2 className="face__step--title h3 mb-30">Shipping Information</h2>
        <div className="row">
          <div className="col-lg-6 accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion__container">

              <div className="accordion__items">
                <h2 className="accordion__items--title" id="flush-headingOne">
                  <button className="faq__accordion--btn accordion__items--button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    What Shipping Methods Are Available?
                    <svg className="accordion__items--button__icon" xmlns="http://www.w3.org/2000/svg" width="20.355" height="13.394" viewBox="0 0 512 512">
                      <path d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z" fill="currentColor"/>
                    </svg>
                  </button>
                </h2>
                <div className=".accordion__items--body accordion-collapse collapse" id="flush-collapseOne" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <p className="accordion__items--body__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim felis.</p>
                </div>
              </div>
              <div className="accordion__items">
                <h2 className="accordion__items--title" id="flush-headingTwo">
                  <button className="faq__accordion--btn accordion__items--button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    How Long Will it Take To Get My Package??
                    <svg className="accordion__items--button__icon" xmlns="http://www.w3.org/2000/svg" width="20.355" height="13.394" viewBox="0 0 512 512">
                      <path d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z" fill="currentColor"/>
                    </svg>
                  </button>
                </h2>
                <div className=".accordion__items--body accordion-collapse collapse" id="flush-collapseTwo" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <p className="accordion__items--body__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim felis.</p>
                </div>
              </div>
              <div className="accordion__items">
                <h2 className="accordion__items--title" id="flush-headingThree">
                  <button className="faq__accordion--btn accordion__items--button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    What payment types can I use?
                    <svg className="accordion__items--button__icon" xmlns="http://www.w3.org/2000/svg" width="20.355" height="13.394" viewBox="0 0 512 512">
                      <path d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z" fill="currentColor"/>
                    </svg>
                  </button>
                </h2>
                <div className=".accordion__items--body accordion-collapse collapse" id="flush-collapseThree" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <p className="accordion__items--body__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim felis.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 accordion accordion-flush" id="accordionFlushExample2">
            <div className="accordion__container">

              <div className="accordion__items">
                <h2 className="accordion__items--title" id="flush-heading1">
                  <button className="faq__accordion--btn accordion__items--button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseOne">
                    Do you ship internationally??
                    <svg className="accordion__items--button__icon" xmlns="http://www.w3.org/2000/svg" width="20.355" height="13.394" viewBox="0 0 512 512">
                      <path d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z" fill="currentColor"/>
                    </svg>
                  </button>
                </h2>
                <div className=".accordion__items--body accordion-collapse collapse" id="flush-collapseFour" aria-labelledby="flush-heading1" data-bs-parent="#accordionFlushExample2">
                  <p className="accordion__items--body__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim felis.</p>
                </div>
              </div>
              <div className="accordion__items">
                <h2 className="accordion__items--title" id="flush-heading2">
                  <button className="faq__accordion--btn accordion__items--button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseTwo">
                    How will my parcel be delivered?
                    <svg className="accordion__items--button__icon" xmlns="http://www.w3.org/2000/svg" width="20.355" height="13.394" viewBox="0 0 512 512">
                      <path d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z" fill="currentColor"/>
                    </svg>
                  </button>
                </h2>
                <div className=".accordion__items--body accordion-collapse collapse" id="flush-collapseFive" aria-labelledby="flush-heading2" data-bs-parent="#accordionFlushExample2">
                  <p className="accordion__items--body__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim felis.</p>
                </div>
              </div>
              <div className="accordion__items">
                <h2 className="accordion__items--title" id="flush-heading3">
                  <button className="faq__accordion--btn accordion__items--button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseThree">
                  How do I know if something is organic?
                    <svg className="accordion__items--button__icon" xmlns="http://www.w3.org/2000/svg" width="20.355" height="13.394" viewBox="0 0 512 512">
                      <path d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z" fill="currentColor"/>
                    </svg>
                  </button>
                </h2>
                <div className=".accordion__items--body accordion-collapse collapse" id="flush-collapseSix" aria-labelledby="flush-heading3" data-bs-parent="#accordionFlushExample2">
                  <p className="accordion__items--body__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim felis.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="face__step one border-bottom">
        <h2 className="face__step--title h3 mb-30">Payment Information</h2>
        <div className="row">
          <div className="col-lg-6 accordion accordion-flush" id="accordionFlushExample3">
            <div className="accordion__container">

              <div className="accordion__items">
                <h2 className="accordion__items--title" id="flush-headingSeven">
                  <button className="faq__accordion--btn accordion__items--button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                  What payment types can I use?
                    <svg className="accordion__items--button__icon" xmlns="http://www.w3.org/2000/svg" width="20.355" height="13.394" viewBox="0 0 512 512">
                      <path d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z" fill="currentColor"/>
                    </svg>
                  </button>
                </h2>
                <div className=".accordion__items--body accordion-collapse collapse" id="flush-collapseSeven" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample3">
                  <p className="accordion__items--body__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim felis.</p>
                </div>
              </div>
              <div className="accordion__items">
                <h2 className="accordion__items--title" id="flush-headingEight">
                  <button className="faq__accordion--btn accordion__items--button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                  Can I pay by Gift Card?
                    <svg className="accordion__items--button__icon" xmlns="http://www.w3.org/2000/svg" width="20.355" height="13.394" viewBox="0 0 512 512">
                      <path d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z" fill="currentColor"/>
                    </svg>
                  </button>
                </h2>
                <div className=".accordion__items--body accordion-collapse collapse" id="flush-collapseEight" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample3">
                  <p className="accordion__items--body__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim felis.</p>
                </div>
              </div>
              <div className="accordion__items">
                <h2 className="accordion__items--title" id="flush-headingNine">
                  <button className="faq__accordion--btn accordion__items--button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
                  can't make a payment
                    <svg className="accordion__items--button__icon" xmlns="http://www.w3.org/2000/svg" width="20.355" height="13.394" viewBox="0 0 512 512">
                      <path d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z" fill="currentColor"/>
                    </svg>
                  </button>
                </h2>
                <div className=".accordion__items--body accordion-collapse collapse" id="flush-collapseNine" aria-labelledby="flush-headingNine" data-bs-parent="#accordionFlushExample3">
                  <p className="accordion__items--body__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim felis.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 accordion accordion-flush" id="accordionFlushExample4">
            <div className="accordion__container">

              <div className="accordion__items">
                <h2 className="accordion__items--title" id="flush-headingTen">
                  <button className="faq__accordion--btn accordion__items--button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseOne">
                  Has my payment gone through?
                    <svg className="accordion__items--button__icon" xmlns="http://www.w3.org/2000/svg" width="20.355" height="13.394" viewBox="0 0 512 512">
                      <path d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z" fill="currentColor"/>
                    </svg>
                  </button>
                </h2>
                <div className=".accordion__items--body accordion-collapse collapse" id="flush-collapseTen" aria-labelledby="flush-headingTen" data-bs-parent="#accordionFlushExample4">
                  <p className="accordion__items--body__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim felis.</p>
                </div>
              </div>
              <div className="accordion__items">
                <h2 className="accordion__items--title" id="flush-headingEleven">
                  <button className="faq__accordion--btn accordion__items--button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEleven" aria-expanded="false" aria-controls="flush-collapseTwo">
                  Tracking my order
                    <svg className="accordion__items--button__icon" xmlns="http://www.w3.org/2000/svg" width="20.355" height="13.394" viewBox="0 0 512 512">
                      <path d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z" fill="currentColor"/>
                    </svg>
                  </button>
                </h2>
                <div className=".accordion__items--body accordion-collapse collapse" id="flush-collapseEleven" aria-labelledby="flush-headingEleven" data-bs-parent="#accordionFlushExample4">
                  <p className="accordion__items--body__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim felis.</p>
                </div>
              </div>
              <div className="accordion__items">
                <h2 className="accordion__items--title" id="flush-headingTwelve">
                  <button className="faq__accordion--btn accordion__items--button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwelve" aria-expanded="false" aria-controls="flush-collapseThree">
                  Haven’t received my order
                    <svg className="accordion__items--button__icon" xmlns="http://www.w3.org/2000/svg" width="20.355" height="13.394" viewBox="0 0 512 512">
                      <path d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z" fill="currentColor"/>
                    </svg>
                  </button>
                </h2>
                <div className=".accordion__items--body accordion-collapse collapse" id="flush-collapseTwelve" aria-labelledby="flush-headingTwelve" data-bs-parent="#accordionFlushExample4">
                  <p className="accordion__items--body__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim felis.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="face__step one border-bottom">
        <h2 className="face__step--title h3 mb-30">Order and Return</h2>
        <div className="row">
          <div className="col-lg-6 accordion accordion-flush" id="accordionFlushExample5">
            <div className="accordion__container">

              <div className="accordion__items">
                <h2 className="accordion__items--title" id="flush-headingThirteen">
                  <button className="faq__accordion--btn accordion__items--button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThirteen" aria-expanded="false">
                  How can I return an item?
                    <svg className="accordion__items--button__icon" xmlns="http://www.w3.org/2000/svg" width="20.355" height="13.394" viewBox="0 0 512 512">
                      <path d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z" fill="currentColor"/>
                    </svg>
                  </button>
                </h2>
                <div className=".accordion__items--body accordion-collapse collapse" id="flush-collapseThirteen" aria-labelledby="flush-headingThirteen" data-bs-parent="#accordionFlushExample5">
                  <p className="accordion__items--body__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim felis.</p>
                </div>
              </div>
              <div className="accordion__items">
                <h2 className="accordion__items--title" id="flush-headingFourteen">
                  <button className="faq__accordion--btn accordion__items--button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFourteen" aria-expanded="false">
                  What Shipping Methods Are Available?
                    <svg className="accordion__items--button__icon" xmlns="http://www.w3.org/2000/svg" width="20.355" height="13.394" viewBox="0 0 512 512">
                      <path d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z" fill="currentColor"/>
                    </svg>
                  </button>
                </h2>
                <div className=".accordion__items--body accordion-collapse collapse" id="flush-collapseFourteen" aria-labelledby="flush-headingFourteen" data-bs-parent="#accordionFlushExample5">
                  <p className="accordion__items--body__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim felis.</p>
                </div>
              </div>
              <div className="accordion__items">
                <h2 className="accordion__items--title" id="flush-headingFifteen">
                  <button className="faq__accordion--btn accordion__items--button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFifteen" aria-expanded="false">
                  How can i make refund from your website?
                    <svg className="accordion__items--button__icon" xmlns="http://www.w3.org/2000/svg" width="20.355" height="13.394" viewBox="0 0 512 512">
                      <path d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z" fill="currentColor"/>
                    </svg>
                  </button>
                </h2>
                <div className=".accordion__items--body accordion-collapse collapse" id="flush-collapseFifteen" aria-labelledby="flush-headingFifteen" data-bs-parent="#accordionFlushExample5">
                  <p className="accordion__items--body__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim felis.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 accordion accordion-flush" id="accordionFlushExample6">
            <div className="accordion__container">

              <div className="accordion__items">
                <h2 className="accordion__items--title" id="flush-headingSixteen">
                  <button className="faq__accordion--btn accordion__items--button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSixteen" aria-expanded="false">
                  I am a new user. How should I start?
                    <svg className="accordion__items--button__icon" xmlns="http://www.w3.org/2000/svg" width="20.355" height="13.394" viewBox="0 0 512 512">
                      <path d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z" fill="currentColor"/>
                    </svg>
                  </button>
                </h2>
                <div className=".accordion__items--body accordion-collapse collapse" id="flush-collapseSixteen" aria-labelledby="flush-headingSixteen" data-bs-parent="#accordionFlushExample6">
                  <p className="accordion__items--body__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim felis.</p>
                </div>
              </div>
              <div className="accordion__items">
                <h2 className="accordion__items--title" id="flush-headingSeventeen">
                  <button className="faq__accordion--btn accordion__items--button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeventeen" aria-expanded="false">
                  What payment methods are accepted?
                    <svg className="accordion__items--button__icon" xmlns="http://www.w3.org/2000/svg" width="20.355" height="13.394" viewBox="0 0 512 512">
                      <path d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z" fill="currentColor"/>
                    </svg>
                  </button>
                </h2>
                <div className=".accordion__items--body accordion-collapse collapse" id="flush-collapseSeventeen" aria-labelledby="flush-headingSeventeen" data-bs-parent="#accordionFlushExample6">
                  <p className="accordion__items--body__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim felis.</p>
                </div>
              </div>
              <div className="accordion__items">
                <h2 className="accordion__items--title" id="flush-headingEighteen">
                  <button className="faq__accordion--btn accordion__items--button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEighteen" aria-expanded="false">
                    Do you ship internationally?
                    <svg className="accordion__items--button__icon" xmlns="http://www.w3.org/2000/svg" width="20.355" height="13.394" viewBox="0 0 512 512">
                      <path d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z" fill="currentColor"/>
                    </svg>
                  </button>
                </h2>
                <div className=".accordion__items--body accordion-collapse collapse" id="flush-collapseEighteen" aria-labelledby="flush-headingEighteen" data-bs-parent="#accordionFlushExample6">
                  <p className="accordion__items--body__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim felis.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}

export default Faq;