import React from "react";
import { Button } from "react-bootstrap";
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="first-div">
        <div className="car-details">
        <img className="card-image1" src="https://imgcdn.zigwheels.ae/large/gallery/exterior/15/1012/hyundai-grand-i10-front-angle-low-view-927170.jpg" alt="" />
            <div className="name-color-seat">
            <p className="name">Car Name</p>
            <div className="color-seat">
                <div className="color">
                <p><i class="icons fa-solid fa-paintbrush"></i></p>
                   <p> White</p>
                    </div>
                <div className="seat">
                <p><i class="icons fa-solid fa-chair"></i></p>
                    <p>4 Seater</p>
                </div>
            </div>
            </div>
        </div>
        <div className="price-div">
            <p className="price"><span>&#8377;</span> 350</p>
        </div>
        <div className="button">
        <Button variant="secondary" size="sm" className="booking-btn">Book Now</Button>
        <Button variant="light" size="sm" className="details-btn">Details</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
