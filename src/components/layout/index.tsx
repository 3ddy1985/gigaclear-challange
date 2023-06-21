import React, { ReactNode } from "react"
import { Main } from "./Main"
import { Header } from "./Header"

export interface LayoutProps {
  children: ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header/>
        <Main>
          {children}
        </Main>
    </>
  )
}