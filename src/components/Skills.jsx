import React from 'react'

import Section from './Section.jsx'
import Skill   from './Skill.jsx'

import styles  from './Skills.css'

export default () => (
  <Section id='skills'>
    <div className={styles.skills}>
      <ul className={styles.column}>
        <Skill><a href='https://www.akashi.ac.jp'>NIT, Akashi College</a> Advanced Cource 2nd grade</Skill>
        <Skill><a href='https://kosen14s.github.io'>kosen14s</a></Skill>
        <Skill>Ruby</Skill>
        <Skill>Rails</Skill>
        <Skill>Python</Skill>
        <Skill>React</Skill>
        <Skill>Vue</Skill>
        <Skill>HTML</Skill>
        <Skill>CSS</Skill>
        <Skill>CSS 組版</Skill>
        <Skill>Design</Skill>
        <Skill>Adobe Illustrator</Skill>
        <Skill>Figma</Skill>
        <Skill>応用情報技術者試験</Skill>
        <Skill>データベーススペシャリスト</Skill>
        <Skill>第3級アマチュア無線技士</Skill>
      </ul>
    </div>
  </Section>
)
