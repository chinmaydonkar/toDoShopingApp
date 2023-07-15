import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledAboutPage = styled.div`
  h2 {
    text-align: center;
    margin-top : 80px;
  }

  h3 {
    margin-top: 20px;
  }

  .product-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    margin-top: 20px;
  }

  .product-item {
    background-color: lightblue;
    padding: 20px;
    border-radius: 5px;
    text-align: center;

    img {
      max-width: 100%;
      height: auto;
      margin-bottom: 10px;
    }

    h4 {
      font-size: 16px;
      margin-bottom: 10px;
    }

    p {
      font-size: 14px;
      margin-bottom: 10px;
    }
  }
`;

function AboutPage() {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProducts();
    loadFavorites();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      setError('Error fetching products');
      setLoading(false);
    }
  };

  const loadFavorites = () => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  };

  const toggleFavorite = (productId) => {
    const updatedFavorites = favorites.includes(productId)
      ? favorites.filter((id) => id !== productId)
      : [...favorites, productId];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <StyledAboutPage>
      <h2>About Page</h2>
      <h3>Products</h3>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <p>Category: {product.category}</p>
            {favorites.includes(product.id) ? (
              <span
                onClick={() => toggleFavorite(product.id)}
                style={{ cursor: 'pointer' }}
              >
                ❤️
              </span>
            ) : (
              <span
                onClick={() => toggleFavorite(product.id)}
                style={{ cursor: 'pointer' }}
              >
                🖤
              </span>
            )}
          </div>
        ))}
      </div>
    </StyledAboutPage>
  );
}

export default AboutPage;
