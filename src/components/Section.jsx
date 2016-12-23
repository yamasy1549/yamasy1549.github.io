import React from 'react'

export default ({ id, children }) => {
  let subtitle
  if (id == 'heading') {
    subtitle = ''
  } else {
    subtitle = <h2 className='hidden'>{id}</h2>
  }

  return (
    <section id={id}>
      <div className={id + '-wrapper'}>
        {subtitle}
        {children}
      </div>
    </section>
  )
}
