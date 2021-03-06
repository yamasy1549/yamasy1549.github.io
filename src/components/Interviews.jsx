import React from 'react'

import Section   from './Section.jsx'
import Interview from './Interview.jsx'
import styles    from './Interviews.css'

export default () => (
  <Section id='interviews'>
    <ul className={styles.interviews}>
      <Interview
        media='CNET Japan'
        year='2015'
        url='//japan.cnet.com/news/business/35075265/'>
        初心者から参加できるGitHub習得イベント「GitHub Patchwork」が神戸で開催
      </Interview>
      <Interview
        media='ITmedia'
        year='2016'
        url='//www.itmedia.co.jp/pcuser/articles/1604/03/news006.html'>
        「普通にスーツを着て就活はしたくない」17歳女子高専生がプログラミングを学ぶ理由
      </Interview>
      <Interview
        media='@type'
        year='2016'
        url='//type.jp/et/feature/1157'>
        17歳、兵庫のRails女子高専生が東京のベンチャーで働いて知った「プログラミングの意味」
      </Interview>
      <Interview
        media='キャリコネニュース'
        year='2016'
        url='//news.careerconnection.jp/?p=23073'>
        「手に職つけて早く働きたかった」17歳のエンジニア女子高専生・やましーインタビュー
      </Interview>
      <Interview
        media='くらしと仕事'
        year='2016'
        url='//kurashigoto.me/articles/CIZzr'>
        意外と女性向き？　17歳女子インターン生が考えるITエンジニアとしての将来像
      </Interview>
      <Interview
        media='瓦版'
        year='2016'
        url='//w-kawara.jp/newest-workstyle/20160420'>
        17歳の女子高専生プログラマーがIT企業でバイトして感じたこと
      </Interview>
      <Interview
        media='マウスコンピューター'
        year='2017'
        url='//www.mouse-jp.co.jp/wdlc/story02/'>
        自分が使いたいもの、誰かが喜んでくれるものをつくりたい - Hello, Girls! プログラミングとの出会いが未来を変える
      </Interview>
    </ul>
  </Section>
)
