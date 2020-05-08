import React from 'react'

import styles from './Tag.css'

export default ({ children }) => {
  return (
    <small className={styles.tag}>{children}</small>
  )
}
