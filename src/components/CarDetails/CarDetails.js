import React from "react";
import { useLoaderData } from "react-router-dom";
import './CarDetails.css'

const CarDetails = () => {
  const carDetails = useLoaderData();
  const { image, name, color, seat, price,details } = carDetails;

  return (
      <div>
        <div className="details-div">
        <div className="car-details">
          <img className="card-image1" src={image} alt="" />
          <div className="name-color-seat">
            <p className="name">{name}</p>
            <div className="color-seat">
              <div className="color">
                <p>
                  <i className="icons fa-solid fa-paintbrush"></i>
                </p>
                <p> {color}</p>
              </div>
              <div className="seat">
                <p>
                  <i className="icons fa-solid fa-chair"></i>
                </p>
                <p>{seat} Seater</p>
               
              </div>
            </div>
            <p className="price">
                  <span>&#8377;</span> {price}
                </p>
          </div>
        </div>
      </div>
      <p className="vehicle-no">Vehicle Number:</p>
      <p></p>
      <p className="details">{details}</p>
      </div>
  );
};

export default CarDetails;
