import React from 'react'

import Section  from './Section.jsx'
import styles   from './Histories.css'
import pictonic from './pictonic.css'

const Event = ({ time, icons, children }) => {
  const langIcons = icons.map((icon, i) => (
    <i className={`${pictonic.pictonic} ${pictonic[`icon-${icon}`]}`} key={i} />
  ))

  return (
    <li className={styles.event}>
      <time className={styles.time}>{time}</time>
      <div className={styles.work}>
        {children}
        <div className={styles.lang}>
          {langIcons}
        </div>
      </div>
    </li>
  )
}

export default () => (
  <Section id='histories'>
    <ul className={styles.history}>
      <Event time='2014/04' icons={[]}>
        明石高専本科 電気情報工学科入学
      </Event>

      <Event time='2014/06' icons={['prog-rails']}>
        <a href='http://railsgirls.com/osaka-1st'>RailsGirls OSAKA #1</a> 参加
      </Event>

      <Event time='2015/03~' icons={['prog-rails', 'html5-01', 'css3-01']}>
        <a href='http://lo-upe.com'>LOUPE</a>エンジニアインターン
      </Event>

      <Event time='2016/01~' icons={['html5-01', 'css3-01']}>
        <a href='http://kosenconf.me'>高専カンファレンス</a> デザイナー
      </Event>

      <Event time='2016/03~' icons={['prog-rails', 'html5-01', 'css3-01']}>
        <a href='http://spicelife.jp'>spice life</a> エンジニアアルバイト
      </Event>

      <Event time='2016/08~' icons={['prog-js01', 'html5-01', 'css3-01', 'prog-rails']}>
        <a href='https://www.animatelab.com/'>アニメイトラボ</a> エンジニアアルバイト
      </Event>

      <Event time='2017/03~' icons={['prog-js01', 'html5-01', 'css3-01']}>
        <a href='http://corp.moneyforward.com/'>マネーフォワード</a> エンジニアインターン
      </Event>

      <Event time='2017/08~' icons={['prog-js01', 'html5-01', 'css3-01']}>
        <a href='https://www.pixiv.co.jp/'>pixiv</a> エンジニアインターン
      </Event>

      <Event time='2017/08~' icons={['prog-js01', 'html5-01', 'css3-01', 'prog-rails']}>
        <a href='https://www.opt.ne.jp/opttechnologies/'>オプト</a> エンジニアインターン
      </Event>

      <Event time='2019/03' icons={[]}>
        明石高専本科 電気情報工学科卒業
      </Event>

      <Event time='2019/04' icons={[]}>
        明石高専専攻科 機械・電子システム工学専攻入学
      </Event>

      <Event time='2019/08~' icons={['prog-python', 'prog-ruby']}>
        <a href='http://www.research.ibm.com/labs/tokyo/'>IBM Research Tokyo</a> 研究インターン
      </Event>

      <Event time='2021/03' icons={[]}>
        明石高専専攻科 機械・電子システム工学専攻卒業
      </Event>

      <Event time='2021/04' icons={[]}>
        名古屋大学大学院 情報学研究科博士前期課程入学
      </Event>

      <Event time='2023/03' icons={[]}>
        名古屋大学大学院 情報学研究科博士前期課程修了
      </Event>

      <Event time='2023/04' icons={[]}>
        名古屋大学大学院 情報学研究科博士後期課程入学
      </Event>

    </ul>
  </Section>
)
