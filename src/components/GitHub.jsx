import React from 'react'

import styles from './GitHub.css'

export default ({ project, url }) => (
  <span className={styles.github}>
    <a href={url}>
      <i className='fa fa-github-alt' /> {project}
    </a>
  </span>
)
