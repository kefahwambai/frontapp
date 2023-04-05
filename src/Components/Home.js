import React from 'react';
import { useState, useEffect } from "react";
import "./Rental.css"
import "./Home.css"
// import Swiper from 'swiper/bundle';

function Home(props) {
  const user = props.user;
  const [items, setItems] = useState([]);
 

  useEffect(() => {
    fetch("https://carrental-1n1b.onrender.com/car_rentals")
      .then((res) => res.json())
      .then((items) => {
        // Initialize the hired state of each car rental to false
        const updatedItems = items.map((item) => ({ ...item, isHired: false }));
        setItems(updatedItems);
      });
  }, []);
  
      // const mySwiper = new Swiper(".swiper-container", {
      //   direction: "vertical",
      //   loop: true,
      //   pagination: ".swiper-pagination",
      //   grabCursor: true,
      //   speed: 1000,
      //   paginationClickable: true,
      //   parallax: true,
      //   autoplay: false,
      //   effect: "slide",
      //   mousewheelControl: 1
      // });
      

  return (
    <div class="home">
       {user ? (
      <div className="hmepge">
        <h2 class="h2hme">Welcome {user.username}, What Car are you looking to hire today?</h2>
        <div className="shop">
          <div className="product-grid">
            {items.map((item) => (
              <div key={item.id} className="product-card">
                <img src={item.image_url} alt={item.carmodel} className="card-img-top" />
                <div className="card-body">
                  <p>{item.carmake}     {item.carmodel}</p>
                  <p>Kshs {item.price}</p>
                  <p>Owner say..."{item.description}"</p>
                  {item.isHired ? (
                    <p>This car has already been hired out.</p>
                  ) : (
                    <button className="btn btn-primary mr-2">Hire</button>
                    )}
                    <br/>                 
                  </div>
                  </div>
                ))}
              </div>
            </div>   
            <div>
            </div>
          </div>
        ) : (
          <div class="page-wrap rentwel">
            {/* <h2>Welcome to Ignition Rental App</h2> */}

          <div id="home-slider">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide swiper-slide-one">
                  <div class="swiper-image" data-swiper-parallax-y="-20%">
                    <div class="swiper-image-inner swiper-image-left swiper-image-one">
                      <h1>A <span class="emphasis">Breath</span>. <br/><span>Of Fresh Air.</span></h1>
                      <p>Chapter I, page XV</p>
                    </div>
                  </div>
                  <div class="swiper-image" data-swiper-parallax-y="35%">
                    <div class="swiper-image-inner swiper-image-right swiper-image-two">
                      <p class="paragraph">
                        A Prophet sat in the market-place and told the fortunes of all who cared to engage his services. Suddenly there came running up one who told him that his house had been broken into by thieves, and that they had made off with everything they could lay
                        hands on.
                      </p>
                    </div>
                  </div>
                </div>           
              </div>             
            </div>
          </div>
          
          </div>
          
        )}
      </div>
    );
  }
  
export default Home;

// onClick={() => handleHireClick(item)}


