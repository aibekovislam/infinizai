import React from 'react';
import styles from './Layout.module.css';

interface IProps {
    children: React.ReactNode;
}  

function MainLayout({ children }: IProps) {
  return (
    <div className={styles.layout__block}>
        <div className={styles.blue__block}></div>
        { children }
    </div>
  )
}

export default MainLayout