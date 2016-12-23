import React from 'react'

export default ({ title, url, img, children }) => (
  <li className='portfolio-box'>
    <a href={url}>
      <img
         className='portfolio-image'
         src={'img/' + img}
         alt={title}
      />
    </a>
    <div className='portfolio-description'>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  </li>
)
