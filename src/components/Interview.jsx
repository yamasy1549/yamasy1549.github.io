import React from 'react'

import Tag from './Tag.jsx'

import styles from './Interview.css'

export default ({ media, year, url, children }) => (
  <li className={styles.interview}>
    <a href={url}>{children}</a>
    <small className={styles.media}><i className='fa fa-newspaper-o' /> {media}</small>
    <Tag>{year}</Tag>
  </li>
)
