import React from 'react';
import { Logo } from '@/atoms/Logo';
import styles from './Header.module.sass'

export const Header: React.FC= () => {
  return (
  <header className={styles.header}>
    <div className={styles.container}>
      <Logo type='core'/>
    </div>
  </header>
  )
}