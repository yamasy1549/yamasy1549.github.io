import React from 'react'

import styles from './Section.css'

export default ({ id, children }) => {
  let subtitle
  if (id == 'heading') {
    subtitle = ''
  } else {
    subtitle = <h2 className={styles.hidden}>{id}</h2>
  }

  return (
    <section id={id} className={styles.section}>
      {subtitle}
      {children}
    </section>
  )
}
