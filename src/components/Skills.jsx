import React from 'react'

import Section from './Section.jsx'
import Skill   from './Skill.jsx'

export default () => (
  <Section id='skills'>
    <div className='skill-box'>
      <img
        className='skill-image'
        src='img/skill-ratio.png'
        alt='skill-ratio'
      />
    </div>
    <div className='skill-box'>
      <p>
        <a href='http://www.akashi.ac.jp'>NIT, Akashi College</a> 3rd grade
        <br />
        <a href='http://codeforkosen.org'>Code for KOSEN</a>
      </p>
      <ul>
        <Skill>Ruby</Skill>
        <Skill>Rails</Skill>
        <Skill>React</Skill>
        <Skill>HTML</Skill>
        <Skill>CSS</Skill>
        <Skill>Adobe Illustrator</Skill>
        <Skill>応用情報技術者試験</Skill>
        <Skill>第3級アマチュア無線技士</Skill>
      </ul>
    </div>
  </Section>
)
