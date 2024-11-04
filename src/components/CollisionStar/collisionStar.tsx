import React from 'react';
import styles from './collisionStar.module.scss';

interface CollisionStarProps {
    children?: React.ReactNode;
    height?: number | string;
    width?: number | string;
    particles?: number;
}

const CollisionStar: React.FC<CollisionStarProps> = ({ children, height, width, particles }) => {
  const { collisionStarHeight, collisionStarWidth } = {
    collisionStarHeight: height? height: '100vh',
    collisionStarWidth: width? width: '100vw'
  }

  return (
    <div className={styles.CollisionStarContainer} style={{
      height: collisionStarHeight,
      width: collisionStarWidth
    }}>
      {children}
    </div>
  );
}

export default CollisionStar;
