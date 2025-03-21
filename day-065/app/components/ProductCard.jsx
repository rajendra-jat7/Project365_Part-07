import Link from 'next/link';
import { useCart } from './CartContext';
import '../globals.css'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img src={product.image || '/product-placeholder.jpg'} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>

      <button onClick={() => addToCart(product)} className='add-button'>Add to Cart</button>

      <Link href={`/product/${product.id}`} className="details-button">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
