import React from 'react'

import Section from './Section.jsx'

export default ({ id, children }) => (
  <Section id={id}>
    <p>{children}</p>
  </Section>
)
