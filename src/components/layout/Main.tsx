import React, { ReactNode } from 'react';
import styles from './Main.module.sass'

export interface MainContentProps {
  children: ReactNode
}

export const Main: React.FC<MainContentProps> = ({children}) => {
  return <main className={styles.main}>{children}</main>
}