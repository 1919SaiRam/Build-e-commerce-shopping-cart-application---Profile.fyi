import React from 'react';
import styles from '../styles/ErrorMessage.module.css';

function ErrorMessage({ message }) {
  return (
    <div className={styles.errorMessage}>
      {message}
    </div>
  );
}

export default ErrorMessage;
