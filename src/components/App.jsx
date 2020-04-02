import React from 'react'

import Heading    from './Heading.jsx'
import Skills     from './Skills.jsx'
import About1     from './About1.jsx'
import Histories  from './Histories.jsx'
import About2     from './About2.jsx'
import Portfolios from './Portfolios.jsx'
import About3     from './About3.jsx'
import Interviews from './Interviews.jsx'
import About4     from './About4.jsx'
import Research   from './Research.jsx'
import Footer     from './Footer.jsx'

import normalize  from './normalize.css'
import pictonic   from './pictonic.css'
import variables  from './variables.css'
import style      from './style.css'

export default () => (
  <div>
    <Heading />
    <Skills />
    <About1 />
    <Histories />
    <About2 />
    <Portfolios />
    <About3 />
    <Interviews />
    <About4 />
    <Research />
    <Footer />
  </div>
)
