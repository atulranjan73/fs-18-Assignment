import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const Image = () => {
  const [search, setSearch] = useState();
  const [images, setImages] = useState([]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleButtonClick = async () => {
    const clientId = `z-jkFWkNwbSApZj3Uzkq5H0_Zf3t0KZhi-OX8ZEOzUc`; 
    
    const url = `https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=${clientId}`;
    
    try {
      const response = await axios.get(url);
      setImages(response.data.results);
      // console.log(response);
    } catch (error) {
      console.error("Error fetching images from Unsplash:", error);
    }
  };

  return (
    <div className="container">
      <h1>Image Search App</h1>
      <div className="input">
        <input
          type="text"
          placeholder="Search Image.."
          onChange={handleSearch}
        />
        <button onClick={handleButtonClick}>Search</button>
      </div>
      <div className="images">
        {images.map((image) => (
          <div key={image.id} className="image">
            <img src={image.urls.small} alt={image.alt_description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Image;
