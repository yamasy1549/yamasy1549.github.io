import React from 'react'

import Section from './Section.jsx'
import styles  from './About.css'

export default ({ id, children }) => (
  <Section id={id} hidden='true'>
    <p className={styles.content}>{children}</p>
  </Section>
)
