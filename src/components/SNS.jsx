import React from 'react'

import styles from './SNS.css'

export default ({ url, icon }) => (
  <li className={styles.li}>
    <a href={url} className={styles.a}>
      <i className={'fa fa-fw fa-' + icon + ' ' + styles.icon} />
    </a>
  </li>
)
