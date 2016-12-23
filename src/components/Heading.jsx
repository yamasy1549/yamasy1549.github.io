import React from 'react'

import Section from './Section.jsx'

export default () => (
  <Section id='heading'>
    <h1 className='heading'>
      <img
        className='heading-logo'
        src='img/logo.png'
        alt='yamasy'
      />
      yamasy<span className='dot'>.</span>info
    </h1>
    <ul className='sns-list'>
      <SNS url='//facebook.com/yamasy1549s' icon='facebook-official'>
        facebook.com/yamasy1549s
      </SNS>
      <SNS url='//twitter.com/yamasy1549' icon='twitter'>
        twitter.com/yamasy1549
      </SNS>
      <SNS url='//github.com/yamasy1549' icon='github'>
        github.com/yamasy1549
      </SNS>
    </ul>
  </Section>
)

class SNS extends React.Component {
  constructor(props) { super(props) }

  render() {
    return (
      <li>
        <a href={this.props.url}>
          <i className={'fa fa-fw fa-' + this.props.icon} />
          {this.props.children}
        </a>
      </li>
    )
  }
}
