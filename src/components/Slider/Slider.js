import React from 'react';
import './Slider.css';
import { slider1, slider2, slider3, slider4, slider5 } from '../../assets/img';

function Slider(props) {
  return (
<section class="hero__slider--section">
  <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <img src={slider1} class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src={slider2} class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img src={slider3} class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img src={slider4} class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img src={slider5} class="d-block w-100" alt="..." />
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <i class="fas fa-chevron-left slider-btn" aria-hidden="true"></i>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span class="fas fa-chevron-right slider-btn" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</section>

  
  );
}

export default Slider;