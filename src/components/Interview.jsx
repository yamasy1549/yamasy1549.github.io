import React from 'react'

import styles from './Interview.css'

export default ({ media, url, children }) => (
  <li className={styles.interview}>
    <a href={url}>{children}</a>
    <small className={styles.media}><i className='fa fa-newspaper-o' /> {media}</small>
  </li>
)
