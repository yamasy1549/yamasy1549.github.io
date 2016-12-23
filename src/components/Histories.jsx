import React from 'react'

import Section from './Section.jsx'

export default () => (
  <Section id='histories'>
    <ul>
      <Event time='2014/04' icons={[]}>
        明石高専 電気情報工学科入学
      </Event>

      <Event time='2014/06' icons={['prog-rails']}>
        <a href='http://railsgirls.com/osaka-1st'>RailsGirls OSAKA #1</a> 参加
      </Event>

      <Event time='2015/03~' icons={['prog-rails', 'html5-01', 'css3-01']}>
        <a href='http://lo-upe.com'>LOUPE</a>にてインターン開始
      </Event>

      <Event time='2015/06' icons={['prog-rails']}>
        <a href='http://railsgirls.com/osaka'>RailsGirls OSAKA #2</a> コーチ
      </Event>

      <Event time='2015/09' icons={['prog-rails']}>
        <a href='http://railsgirls.com/kobe'>RailsGirls KOBE #1</a> コーチ
      </Event>

      <Event time='2015/12' icons={['prog-rails']}>
        <a href='http://railsgirls.com/okayama2015'>RailsGirls OKAYAMA #1</a> コーチ
      </Event>

      <Event time='2016/01~' icons={['html5-01', 'css3-01']}>
        <a href='http://kosenconf.me'>高専カンファレンス</a> デザイナー
      </Event>

      <Event time='2016/03~' icons={['prog-rails', 'html5-01', 'css3-01']}>
        <a href='http://spicelife.jp'>spice life</a> エンジニアアルバイト
      </Event>

      <Event time='2016/08~' icons={['prog-rails', 'html5-01', 'css3-01']}>
        <a href='https://www.animatelab.com/'>アニメイトラボ</a> エンジニアアルバイト
      </Event>
    </ul>
  </Section>
)

class Event extends React.Component {
  constructor(props) { super(props) }

  render() {
    const icons = this.props.icons.map((icon, i) => {
      return (
        <i className={'icon-' + icon} key={i} />
      )
    })

    return (
      <li>
        <span className='time'>{this.props.time}</span>
        <div className='works'>
          {this.props.children}
          <div className='lang'>
            {icons}
          </div>
        </div>
      </li>
    )
  }
}
