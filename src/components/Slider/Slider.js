import React from 'react';
import './Slider.css';
import { slider1, slider2, slider3, slider4, slider5 } from '../../assets/img';

function Slider(props) {
  return (
<section className="hero__slider--section">
  <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="10000">
        <img src={slider1} className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item" data-bs-interval="2000">
        <img src={slider2} className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={slider3} className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={slider4} className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={slider5} className="d-block w-100" alt="..." />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <i className="fas fa-chevron-left slider-btn" aria-hidden="true"></i>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span className="fas fa-chevron-right slider-btn" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</section>

  
  );
}

export default Slider;