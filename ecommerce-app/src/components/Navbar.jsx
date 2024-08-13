import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/App.module.css';

function Navbar({ cartItems }) {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>E-Commerce</Link>
      <Link to="/cart" className={styles.cartLink}>
        Cart ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})
      </Link>
    </nav>
  );
}

export default Navbar;
