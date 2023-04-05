import React, { useState, useEffect } from "react";
import "./ReviewForm.css";

const ReviewForm = (props) => {
  const [formData, setFormData] = useState({
    username: props.username || "",
    comment: "",
    rating: 1,
  });
  
  const { carRentalId } = props; 
  const [formErrors, setFormErrors] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [cars, setCars] = useState([]);
  const [reviewToEditOrDelete, setReviewToEditOrDelete] = useState(null);


  const fetchCars = async () => {
    try {
      const response = await fetch(`https://carrental-1n1b.onrender.com/car_rentals`);
      const data = await response.json();
      console.log(data); // Log the "data" variable
      setCars(data);
    } catch (error) {
      console.error(error);
    }
  };
 

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`/reviews?car_rental_id=${carRentalId}`);
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReviews();
  }, [carRentalId]);

  const handleUsernameChange = (e) => {
    setFormData({ ...formData, username: e.target.value });
  };

  const handleEdit = async () => {
    try {
      const response = await fetch(`/reviews/${reviewToEditOrDelete.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const updatedReviews = reviews.map((r) =>
          r.id === reviewToEditOrDelete.id ? { ...r, ...formData } : r
        );
        setReviews(updatedReviews);
        setFormData({
          username: "",
          comment: "",
          rating: 1,
        });
        setReviewToEditOrDelete(null);
        alert("Review edited successfully!");
      } else if (response.status === 422) {
        const errorData = await response.json();
        setFormErrors(errorData.errors);
      } else {
        setFormErrors([
          "Unknown error occurred. Please try again later.",
        ]);
      }
    } catch (error) {
      setFormErrors([
        "Unknown error occurred. Please try again later.",
      ]);
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (reviewToEditOrDelete) {
      handleEdit();
    } else {
      try {
        const response = await fetch(`/reviews`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            car_rental_id: carRentalId,
          }),
        });
        if (response.ok) {
          setFormData({
            username: "",
            comment: "",
            rating: 1,
          });
          setFormErrors([]);
          alert("Review saved successfully!");
        } else if (response.status === 422) {
          const errorData = await response.json();
          setFormErrors(errorData.errors);
        } else {
          setFormErrors([
            "Unknown error occurred. Please try again later.",
          ]);
        }
      } catch (error) {
        setFormErrors([
          "Unknown error occurred. Please try again later.",
        ]);
      }
    }
  };
  

  return (
    <div className="review-container">
      <h2 className="review-heading">Existing Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id} className="review">
          <p className="review-text">{review.comment}</p>
          <p className="review-rating">{`Rating: ${review.rating}`}</p>
          <p className="review-author">{`By: ${review.username}`}</p>
          {/* <button onClick={() => {setReviewToEditOrDelete(review); }}>Edit</button> */}
  
          {review.username === props.username && (
            <button
              onClick={async () => {
                try {
                  const response = await fetch(`/reviews/${review.id}`, {
                    method: "DELETE",
                  });
                  if (response.ok) {
                    const updatedReviews = reviews.filter((r) => r.id !== review.id);
                    setReviews(updatedReviews);
                    alert("Review deleted successfully!");
                  } else {
                    const errorData = await response.json();
                    setFormErrors(
                      errorData.errors || [
                        "Unknown error occurred. Please try again later.",
                      ]
                    );
                  }
                } catch (error) {
                  setFormErrors([
                    "Unknown error occurred. Please try again later.",
                  ]);
                }
              }}
            >
              Delete
            </button>
          )}
          <hr className="review-divider" />
        </div>
      ))}
      <h2>Leave a Review</h2>
      <form onSubmit={handleSubmit} class="lreview">
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={handleUsernameChange}
          />
        </div>
        {cars.length > 0 && (
          <select
            name="carModel"
            value={formData.carModel}
            onChange={(e) =>
              setFormData({ ...formData, carModel: e.target.value })
            }
          >
            <option value={null}>Select a car</option>
            {cars.map((car) => (
              <option key={car.id} value={car.carmodel}>
                {car.carmodel}
              </option>
            ))}
          </select>
        )}
        <div>
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={(e) =>
              setFormData({ ...formData, comment: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            min="1"
            max="5"
            value={formData.rating}
            onChange={(e) =>
              setFormData({ ...formData, rating: parseInt(e.target.value) })
            }
          />
        </div>
        {formErrors.length > 0 && (
          <ul>
            {formErrors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
  };

export default ReviewForm;
