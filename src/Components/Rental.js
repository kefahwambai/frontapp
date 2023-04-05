import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Rental.css";

function Rental({ handleClick }) {
  const [items, setItems] = useState([]);
  const [isCarHired, setIsCarHired] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://carrental-1n1b.onrender.com/car_rentals")
      .then((res) => res.json())
      .then((items) => setItems(items));
  }, []); 

  function handleReviewClick() {
    navigate("/reviews");
  }

  function handleHireClick(item) {
    setIsCarHired(true);
    handleClick(item);
  }

  return (
    <div>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <div className="card" style={{ width: '18rem', }}>
              <img src={item.image_url} className="card-img-top" alt={item.productName} />
              <div className="card-body">
                <h5 className="card-title">{item.carmake}  {item.carmodel}</h5>
                <h5 className="card-title">Hire Rate: Ksh{item.price} per day.</h5>
                <h5 className="card-title">Owner says .... "{item.description}"</h5>
                {isCarHired ? (
                  <p>This car has already been hired out.</p>
                ) : (
                  <button onClick={() => handleHireClick(item)} className="btn btn-primary mr-2">Hire</button>
                )}
                <button onClick={handleReviewClick} className="btn btn-secondary">Leave a review</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Rental;
