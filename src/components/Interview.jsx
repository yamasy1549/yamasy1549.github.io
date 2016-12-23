import React from 'react'

export default ({ media, url, children }) => (
  <li className='interview'>
    <a href={url}>{children}</a> - {media}
  </li>
)
