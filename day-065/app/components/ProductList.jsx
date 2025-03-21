'use client';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import '../globals.css'

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('all');
  const [maxPrice, setMaxPrice] = useState(1000);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    category === 'all' ? product.price <= maxPrice : product.category === category && product.price <= maxPrice
  );

  return (
    <div>
      <div className="filters">
        <label>
          Category:
          <select onChange={(e) => setCategory(e.target.value)}>
            <option value="all">All</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelry</option>
          </select>
        </label>

        <label>
          Max Price:
          <input type="range" min="10" max="1000" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
          ${maxPrice}
        </label>
      </div>

      <section className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
};

export default ProductList;
