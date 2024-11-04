import React from 'react';
import styles from './Child.module.scss'

interface ChildProps {}

const Child: React.FC<ChildProps> = () => {

  return (
    <div className={styles.ChildContainer}>

    </div>
  );
};

export default Child;
