import React from 'react'

import styles from './Paper.css'

export default ({ author, journal, volume, number, pages, year, url, children }) => {
  let journalInfo = ''
  if (journal) journalInfo += `${journal}`
  if (volume)  journalInfo += `, ${volume}`
  if (number)  journalInfo += ` (${number})`
  if (pages)   journalInfo += `: pp.${pages}`
  return (
    <li className={styles.paper}>
      {author}. <a href={url}>{children}</a>. {journalInfo}, {year}.
    </li>
  )
}
