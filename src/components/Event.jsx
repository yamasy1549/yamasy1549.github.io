import React from 'react'

export default ({ time, icons, children }) => {
  let langIcons = icons.map((icon, i) => (
    <i className={'icon-' + icon} key={i} />
  ))

  return (
    <li>
      <span className='time'>{time}</span>
      <div className='works'>
        {children}
        <div className='lang'>
          {langIcons}
        </div>
      </div>
    </li>
  )
}
