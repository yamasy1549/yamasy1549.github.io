import React from 'react'

import styles from './Event.css'

export default ({ time, icons, children }) => {
  let langIcons = icons.map((icon, i) => (
    <i className={'icon-' + icon} key={i} />
  ))

  return (
    <li className={styles.event}>
      <time className={styles.time}>{time}</time>
      <div className={styles.work}>
        {children}
        <div className={styles.lang}>
          {langIcons}
        </div>
      </div>
    </li>
  )
}
