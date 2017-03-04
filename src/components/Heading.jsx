import React from 'react'

import Section from './Section.jsx'
import SNS     from './SNS.jsx'

import styles  from './Heading.css'
import logoImg from '../img/logo.png'

export default () => (
  <Section id='heading'>
    <h1 className={styles.heading}>
      <img
        className={styles.logo}
        src={logoImg}
        alt='やましーのアイコン'
      />
      yamasy<span className={styles.dot}>.</span>info
    </h1>
    <ul className={styles.snsList}>
      <SNS url='//facebook.com/yamasy1549s' icon='facebook-official' />
      <SNS url='//twitter.com/yamasy1549' icon='twitter' />
      <SNS url='//github.com/yamasy1549' icon='github' />
      <SNS url='//www.slideshare.net/yamasy1549s' icon='slideshare' />
    </ul>
  </Section>
)
