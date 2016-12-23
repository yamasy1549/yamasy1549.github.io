import React from 'react'

import styles from './Portfolio.css'

export default ({ title, url, img, children }) => {
  let portfolioImg
  if(url.length != 0) {
    portfolioImg = 
      <a href={url} className={styles.a}>
        <img
           className='portfolio-image'
           src={'img/' + img}
           alt={title}
        />
      </a>
  } else {
    portfolioImg =
      <img
         className='portfolio-image'
         src={'img/' + img}
         alt={title}
      />
  }

  return (
    <li className={styles.portfolio}>
      {portfolioImg}
      <div className={styles.description}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.p}>{children}</p>
      </div>
    </li>
  )
}