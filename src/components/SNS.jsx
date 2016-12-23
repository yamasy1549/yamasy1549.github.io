import React from 'react'

export default ({ url, icon, children }) => (
  <li>
    <a href={url}>
      <i className={'fa fa-fw fa-' + icon} />
      {children}
    </a>
  </li>
)
