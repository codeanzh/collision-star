import React from 'react';
import styles from './Child.module.scss'

interface ChildProps {}

const Child: React.FC<ChildProps> = () => {

  return (
    <div className={styles.ChildContainer}>
      <div className={styles.child}></div>
      <div className={styles.child}></div>
      <div className={styles.child}></div>
      <div className={styles.child}></div>
    </div>
  );
};

export default Child;
