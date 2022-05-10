import { Link } from 'gatsby'
import React from 'react'
import * as styles from '../styles/Layout.module.scss'

const Layout = ({ children }) => (
  <>
    <header className={styles.header}>
      <h1><Link to="/">Pokedex</Link></h1>
    </header>
    {children}
  </>
)

export { Layout }
