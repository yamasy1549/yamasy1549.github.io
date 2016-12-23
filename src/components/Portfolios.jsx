import React from 'react'

import Section   from './Section.jsx'
import Portfolio from './Portfolio.jsx'
import GitHub    from './GitHub.jsx'
import styles    from './Portfolios.css'

export default () => (
  <Section id='portfolios'>
    <ul className={styles.portfolios}>
      <Portfolio title='actif-quest' url='//play.google.com/store/apps/details?id=info.actfesta.android.actifquest&hl=ja' img='actifquest.svg'>
        <GitHub project='actif-quest' url='//github.com/anct/actif-quest' />
        明石高専祭を楽しくするスマートフォンアプリ。
        Railsでバックエンドのお手伝いをさせてもらいました。
      </Portfolio>

      <Portfolio title='MAEMUKI' url='' img='maemuki.png'>
        <GitHub project='maemuki' url='//github.com/BASASI/maemuki' />
        Twitterでのネガポジ度を判定するWebアプリ。
        Railsでのバックエンド一部と、viewを担当しました。<br />
        MA10大阪一次予選ハッカソン 最優秀賞
      </Portfolio>

      <Portfolio title='ruboty-pux' url='//www.slideshare.net/yamasy1549s/ruboty' img='ruboty-pux.png'>
        <GitHub project='ruboty-pux' url='//github.com/yamasy1549/ruboty-pux' />
        <a href='//pds.polestars.jp/'>PUX 顔検出API</a>を使った<a href='//github.com/r7kamura/ruboty'>ruboty</a>のプラグイン。
        Slackなどでrubotyに画像を投げると、写っている人の年齢・性別・ドヤ顔度・似ている動物などを返してくれる、初gem。
      </Portfolio>

      <Portfolio title='明石高専 学生会執行部Webサイト' url='//nitac-gakuseikai.herokuapp.com' img='nitac-gakuseikai.png'>
        <GitHub project='nitac-gakuseikai' url='//github.com/yamasy1549/nitac-gakuseikai' />
        学生会Webサイトのリニューアルを担当しました。
        シンプルにしようと思ったらお葬式みたいな色になってしまった…
      </Portfolio>

      <Portfolio title='LIFECODE BATTLER' url='' img='lifecodebattler.png'>
        「バーコードバトラー」を使って遊ぶ、懐かしいのに新しいAndroidアプリ。
        主にデザインを担当しました。
      </Portfolio>

      <Portfolio title='SENSEI NOTE' url='//senseinote.jp' img='senseinote.png'>
        全国の先生がつながる 小中高の先生向けのSNS。
        <a href='//lo-upe.com'>株式会社LOUPE</a>の運営しているサービスです。
      </Portfolio>

      <Portfolio title='SENSEI PORTAL' url='//senseiportal.jp' img='senseiportal.png'>
        教員向けイベントまとめサイト。
        <a href='//lo-upe.com'>株式会社LOUPE</a>の運営しているサービスです。
      </Portfolio>

      <Portfolio title='TMIX' url='//tmix.jp' img='tmix.png'>
        オリジナルTシャツを1枚から作れるサイト。
        <a href='spicelife.jp'>株式会社 spice life</a>の運営しているサービスです。
      </Portfolio>

      <Portfolio title='高専カンファレンスlol' url='//kosenconf.me' img='kosenconf.png'>
        全国から現役高専生や卒業生達が集まるイベント、高専カンファレンスlolのWebサイトとカンファレンスのデザインを担当しました。
      </Portfolio>

      <Portfolio title='color-album' url='//color-album.herokuapp.com' img='color-album.png'>
        写真を投稿すると自動で色をタグ付けしてくれます。製作中です。<br />
        <a href='//twitter.com/Project_FUNA/status/775293511826485249'>Project FUNA RoRコンテスト</a> 最優秀賞
      </Portfolio>
    </ul>
  </Section>
)