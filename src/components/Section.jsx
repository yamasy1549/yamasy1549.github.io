import React from 'react'

import styles from './Section.css'

export default ({ id, children, hidden }) => {
  let subtitle = '';
  if (id) {
    if (hidden) {
      subtitle = <h2 className={styles.hidden} id={id}>{id}</h2>
    } else {
      subtitle =
        <h2 className={styles.title} id={id}>
          <a className={styles.a} href={`#${id}`}>{id}</a>
        </h2>
    }
  }

  return (
    <section className={styles.section}>
      {subtitle}
      {children}
    </section>
  )
}
