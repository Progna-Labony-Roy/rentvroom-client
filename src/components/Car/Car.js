import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Car.css'

const Car = ({car, refetch}) => {
    const {_id, image,name, color, seat,price} = car;
    return (
        <div>
              <div className="first-div">
        <div className="car-details">
        <img className="card-image1" src={image} alt="" />
            <div className="name-color-seat">
            <p className="name">{name}</p>
            <div className="color-seat">
                <div className="color">
                <p><i class="icons fa-solid fa-paintbrush"></i></p>
                   <p> {color}</p>
                    </div>
                <div className="seat">
                <p><i class="icons fa-solid fa-chair"></i></p>
                    <p>{seat} Seater</p>
                </div>
            </div>
            </div>
        </div>
        <div className="price-div">
            <p className="price"><span>&#8377;</span> {price}</p>
        </div>
        <div className="button">
        <Button variant="secondary" size="sm" className="booking-btn">Book Now</Button>
        <Link to={`/car/${_id}`}><Button variant="light" size="sm" className="details-btn">Details</Button></Link>
        </div>
      </div>
        </div>
    );
};

export default Car;