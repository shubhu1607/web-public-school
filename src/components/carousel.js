import React from 'react';

const CustomCarousel = () => (
  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-100" src="https://www.ptvenglishmediumprimary.com/wp-content/gallery/sports-day-2019/DSC_7340.JPG" alt="Sports Day" />
        <div className="carousel-caption d-none d-md-block">
          <h5>Annual Sports Day</h5>
          <p>Celebrating Excellence in Sports</p>
        </div>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="https://i0.wp.com/stmaryspublicschool.co.in/wp-content/uploads/2023/02/Science-Exhibition-2022-2023-2.jpg?fit=1600%2C1066&ssl=1" alt="Science Exhibition" />
        <div className="carousel-caption d-none d-md-block">
          <h5>Science Exhibition</h5>
          <p>Showcasing Student Innovations</p>
        </div>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="https://assets.telegraphindia.com/telegraph/2022/Aug/1659997455_447d025beb419814f075054e46dfcedc.gif" alt="Cultural Fest" />
        <div className="carousel-caption d-none d-md-block">
          <h5>Cultural Fest</h5>
          <p>Embracing Diversity and Creativity</p>
        </div>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
);

export default CustomCarousel;
