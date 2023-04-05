import React, { useState } from "react";
import "./AddCars.css"



function AddCars({ onAddItem }) {
    const[image_url, setImageUrl] = useState("")
    const[carmake, setCarMake] = useState("")
    const[carmodel, setCarModel] = useState("")
    const[price, setPrice] = useState()
    const[description, setDescription] = useState()
    const[fuel, setFuel] = useState()

    function handleSubmit(event) {
        event.preventDefault();
        const formData = {
          image_url: image_url,
          carmake: carmake,
          carmodel: carmodel,
          price: price,
          fuel: fuel,
          description: description
        };
        fetch("https://carrental-1n1b.onrender.com/car_rentals", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(formData)
        })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            // reset form after submitting
            setImageUrl("");
            setCarMake("");
            setCarModel("");
            setPrice("");
            setDescription("");
            setFuel("");
            onAddItem(data);
          })
          .catch(error => console.error(error));
      }

        return ( 
                    <div id="additems">           
                    <form onSubmit={handleSubmit} class="row g-3 addf">
                    <h4 >Hire out Vehicle</h4>
                    <div class="col-12">
                        <label for="inputImage" class="form-label">
                        Image URL
                        </label>
                        <input onChange={(event) => { setImageUrl(event.target.value);
                        }}
                        placeholder="image_url"
                        className="additem"
                        name="image_url"
                        value={image_url}
                        />
                    </div>
                    <div class="col-md-6">
                        <label for="inputCarModel" class="form-label">
                        Model
                        </label>
                        <input
                        onChange={(event) => setCarModel(event.target.value)}
                        placeholder="Car Model"
                        className="additem"
                        name="carmodel"
                        value={carmodel}
                        />
                    </div>
            
                    <div class="col-md-6">
                        <label for="inputCarMake" class="form-label">
                        Make
                        </label>
                        <input
                        onChange={(event) => setCarMake(event.target.value)}
                        placeholder="Car Make"
                        className="additem"
                        name="carmake"
                        value={carmake}
                        />
                    </div>
                    <div class="col-md-6">
                        <label for="inputPrice" class="form-label">Hire Rate Per Day</label>
                        <input
                                onChange={(event) => setPrice(event.target.value)}
                                placeholder="Price"
                                className="additem"
                                name="price"
                                value={price}>
                            </input>
                    </div>
                    <div class="col-md-6">
                        <label for="inputAddress2" class="form-label">Type of Fuel</label>
                        <input
                                onChange={(event) => setFuel(event.target.value)}
                                placeholder="Fuel"
                                className="additem"
                                name="fuel"
                                value={fuel}>
                            </input>
                    </div>
                    <div class="mb-3">
                        <label for="description" class="form-label">Description</label>
                        <textarea 
                            class="form-control" 
                            id="description" 
                            rows="3"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                    </div>

                    
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Upload</button>
                    </div>
            </form>

        </div>
    )
}

export default AddCars;


   




