// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import styles from '../styles/ConfirmationPage.module.css';

// function ConfirmationPage() {
//   const location = useLocation();
//   const { cartItems, total } = location.state;

//   return (
//     <div className={styles.confirmationPage}>
//       <h1>🎉Order Confirmation🎊</h1>
//       <div className={styles.orderDetails}>
//         <h3>🙏Thank you for your purchase!🤝</h3>
//         <h2>Order Summary🥳:</h2>
//         {cartItems.map((item) => (
//           <div key={item.id} className={styles.cartItem}>
//             <img src={item.image} alt={item.title} className={styles.cartItemImage} />
//             <div className={styles.cartItemDetails}>
//               <h3>{item.title}</h3>
//               <p>Quantity: {item.quantity}</p>
//               <p>Price: ${item.price.toFixed(2)}</p>
//             </div>
//           </div>
//         ))}
//         <h3>Total Final Price Paid: ${total}</h3>
//       </div>
//     </div>
//   );
// }

// export default ConfirmationPage;


// src/pages/ConfirmationPage.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../styles/ConfirmationPage.module.css';

function ConfirmationPage() {
  const location = useLocation();
  // Provide default values if location.state is null or undefined
  const { cartItems = [], total = '0.00' } = location.state || {};

  return (
    <div className={styles.confirmationPage}>
      <h1>🎉Order Confirmation🎊</h1>
      <div className={styles.orderDetails}>
        <h3>🙏Thank you for your purchase!🤝</h3>
        <h2>Order Summary🥳:</h2>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <img src={item.image} alt={item.title} className={styles.cartItemImage} />
              <div className={styles.cartItemDetails}>
                <h3>{item.title}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No items to display</p>
        )}
        <h3>Total Final Price Paid: ${total}</h3>
      </div>
    </div>
  );
}

export default ConfirmationPage;
