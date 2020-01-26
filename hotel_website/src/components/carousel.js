import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

export class Carousel extends React.Component {
    render() {
        return (
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img className="d-block w-100" src="https://ehq-production-canada.imgix.net/projects/images/314c71594909a2c5729eccd37a3fd7a29948ba0d/000/008/283/original/MAT.jpg?auto=compress%2Cformat&w=1080" alt="First slide"/>
    <div className="carousel-caption">
        <h1>Feel Like Home</h1>
        <p>Enjoy Your Holidays with Infinitys</p>
      </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://www.wallpaperfromthe70s.com/media/image/xschlafzimmer-1.jpg.pagespeed.ic.RoTI1mFXLF.jpg" alt="Second slide"/>
      <div className="carousel-caption">
        <h1>Best Stay Your Way</h1>
        <p>Spend Quality time full Comfort</p>
      </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="Third slide"/>
      <div className="carousel-caption">
        <h1>Save Big. Travel Better</h1>
        <p>Latest Reviews, Lowest Prices</p>
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
        )
    }
}