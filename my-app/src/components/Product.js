import React, { useState, useEffect } from 'react';

const Product = () => {
  // Sample array of items
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data asynchronously using useEffect
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((res) => {
        console.log(res); // Optional: Log the data received from the API
        setData(res);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div>
      <h1>List of Items</h1>
      <ul>
        {/* Using map to iterate over the array and render a list item for each element */}
        {data.map((product) => (
          <li key={product.id}>{product.category}</li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
