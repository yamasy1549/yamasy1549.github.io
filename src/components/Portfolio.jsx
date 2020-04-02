import React from 'react'

import styles from './Portfolio.css'

export default ({ title, year, url, img, children }) => {
  let portfolioImg
  if(url.length != 0) {
    portfolioImg = 
      <a href={url} className={styles.a}>
        <img
           className='portfolio-image'
           src={img}
           alt={title}
        />
      </a>
  } else {
    portfolioImg =
      <img
         className='portfolio-image'
         src={img}
         alt={title}
      />
  }

  return (
    <li className={styles.portfolio}>
      {portfolioImg}
      <div className={styles.description}>
        <h3 className={styles.title}>
          {title}
          <small className={styles.year}>{year}</small>
        </h3>
        <p className={styles.p}>{children}</p>
      </div>
    </li>
  )
}
