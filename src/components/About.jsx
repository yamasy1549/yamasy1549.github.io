import React from 'react'

import Section from './Section.jsx'

export default class About extends React.Component {
  constructor(props) { super(props) }

  render() {
    return (
      <Section id={this.props.id}>
        <p>{this.props.children}</p>
      </Section>
    )
  }
}
