import React, { useEffect, useState } from 'react';

const ProductDetails = ({ match }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProductDetails() {
      const productId = match.params.id; 
      try {
        const response = await fetch(`http://127.0.0.1:8000/marketplace/get_product/${productId}`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
          const data = await response.json();
          setProduct(data);
        } else {
          throw new Error('Failed to fetch product details');
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    }

    fetchProductDetails();
  }, [match.params.id]);

  return (
    <div className="container">
      {product ? (
        <div className="row">
          <div className="col-md-6">
            <img src={'http://localhost:8000/backend/' + product.image.substring(9)} alt={product.name} />
          </div>
          <div className="col-md-6">
            <h2>{product.name}</h2>
            <p>Price: ₹ {product.price}</p>
            <p>Description: {product.description}</p>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;
