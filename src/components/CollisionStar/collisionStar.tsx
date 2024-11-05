import React from 'react';
import styles from './collisionStar.module.scss';

interface CollisionStarProps {
    children?: React.ReactNode;
    particles?: number;
}

const CollisionStar: React.FC<CollisionStarProps> = ({ children, particles }) => {
  return (
    <div className={styles.CollisionStarContainer}>
      <div className={styles.scrollableContainer}>
        {children}
      </div>
    </div>
  );
}

export default CollisionStar;
