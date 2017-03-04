import React from 'react'

import Section from './Section.jsx'
import Skill   from './Skill.jsx'

import styles  from './Skills.css'
import skillImg from '../img/skill-ratio.png'

export default () => (
  <Section id='skills'>
    <div className={styles.skills}>
      <img
        className={styles.column + ' ' + styles.ratio}
        src={skillImg}
        alt='skill-ratio'
      />
      <ul className={styles.column}>
        <Skill><a href='//www.akashi.ac.jp'>NIT, Akashi College</a> 3rd grade</Skill>
        <Skill><a href='//codeforkosen.org'>Code for KOSEN</a></Skill>
        <Skill><a href='//kosen14s.github.io'>kosen14s</a></Skill>
        <Skill>Ruby</Skill>
        <Skill>Rails</Skill>
        <Skill>React</Skill>
        <Skill>HTML</Skill>
        <Skill>CSS</Skill>
        <Skill>Design</Skill>
        <Skill>Adobe Illustrator</Skill>
        <Skill>応用情報技術者試験</Skill>
        <Skill>第3級アマチュア無線技士</Skill>
      </ul>
    </div>
  </Section>
)
