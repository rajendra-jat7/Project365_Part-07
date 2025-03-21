'use client';
import Link from 'next/link';
import { useCart } from './CartContext';
import '../globals.css'

const Navbar = () => {
  const { cartItemCount } = useCart();

  return (
    <nav className="navbar">
      <Link href="/">Home</Link>
      <Link href="#">Shop</Link>
      <Link href="#">About</Link>
      <Link href="#">Contact</Link>

      <Link href="#">
        🛒 Cart ({cartItemCount})
      </Link>
    </nav>
  );
};

export default Navbar;
