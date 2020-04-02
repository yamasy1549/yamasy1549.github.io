import React from 'react'

import Section   from './Section.jsx'
import Portfolio from './Portfolio.jsx'
import GitHub    from './GitHub.jsx'

import styles             from './Portfolios.css'
import actifquestImg      from '../img/actifquest.svg'
import maemukiImg         from '../img/maemuki.png'
import rubotyImg          from '../img/ruboty-pux.png'
import gakuseikaiImg      from '../img/nitac-gakuseikai.png'
import lifecodebattlerImg from '../img/lifecodebattler.png'
import senseinoteImg      from '../img/senseinote.png'
import senseiportalImg    from '../img/senseiportal.png'
import tmixImg            from '../img/tmix.png'
import kosenconfImg       from '../img/kosenconf.png'
import coloralbumImg      from '../img/color-album.png'
import canyoureadImg      from '../img/canyouread.png'
import kosen14sImg        from '../img/kosen14s.png'
import fulltanImg         from '../img/fulltan.png'
import prokarutaImg       from '../img/prokaruta.png'
import gitkarutaImg       from '../img/gitkaruta.png'
import resikarutaImg      from '../img/resikaruta.png'
import vivliostyleImg     from '../img/vivliostyle.png'

export default () => (
  <Section id='portfolios'>
    <ul className={styles.portfolios}>
      <Portfolio
        title='actif-quest'
        year='2014'
        url=''
        img={actifquestImg}>
        <GitHub project='actif-quest' url='https://github.com/anct/actif-quest' />
        明石高専祭を楽しくするスマートフォンアプリ。
        Railsでバックエンドのお手伝いをした。ほとんどはじめてプログラミングでモノを作った。
      </Portfolio>

      <Portfolio
        title='MAEMUKI'
        year='2014'
        url=''
        img={maemukiImg}>
        <GitHub project='maemuki' url='https://github.com/BASASI/maemuki' />
        Twitterでのネガポジ度を判定するWebアプリ。
        Railsでのバックエンド一部と、viewを担当した。
        MA10大阪一次予選ハッカソン 最優秀賞
      </Portfolio>

      <Portfolio
        title='ruboty-pux'
        year='2014'
        url='https://www.slideshare.net/yamasy1549s/ruboty'
        img={rubotyImg}>
        <GitHub project='ruboty-pux' url='https://github.com/yamasy1549/ruboty-pux' />
        <a href='https://pds.polestars.jp/'>PUX 顔検出API</a>を使った<a href='https://github.com/r7kamura/ruboty'>ruboty</a>のプラグイン。
        Slackなどでrubotyに画像を投げると、写っている人の年齢・性別・ドヤ顔度・似ている動物などを返してくれる、初gem。
      </Portfolio>

      <Portfolio
        title='明石高専 学生会執行部Webサイト'
        year='2015'
        url=''
        img={gakuseikaiImg}>
        <GitHub project='nitac-gakuseikai' url='https://github.com/yamasy1549/nitac-gakuseikai' />
        学生会Webサイトのリニューアルを担当した。
        シンプルにしようと思ったらお葬式みたいな色になってしまった……
      </Portfolio>

      <Portfolio
        title='LIFECODE BATTLER'
        year='2015'
        url=''
        img={lifecodebattlerImg}>
        「バーコードバトラー」を使って遊ぶ、懐かしいのに新しいAndroidアプリ。
        主にデザインを担当した。
      </Portfolio>

      <Portfolio
        title='SENSEI NOTE'
        year='2015'
        url=''
        img={senseinoteImg}>
        全国の先生がつながる 小中高の先生向けのSNS。
        <a href='https://lo-upe.com'>株式会社LOUPE</a>の運営していたサービス。
      </Portfolio>

      <Portfolio
        title='SENSEI PORTAL'
        year='2015'
        url=''
        img={senseiportalImg}>
        教員向けイベントまとめサイト。
        <a href='https://lo-upe.com'>株式会社LOUPE</a>の運営していたサービス。
      </Portfolio>

      <Portfolio
        title='TMIX'
        year='2016'
        url='https://tmix.jp'
        img={tmixImg}>
        オリジナルTシャツを1枚から作れるサイト。
        <a href='https://spicelife.jp'>株式会社 spice life</a>の運営していたサービス。
      </Portfolio>

      <Portfolio
        title='高専カンファレンスlol'
        year='2016'
        url='http://kosenconf.me'
        img={kosenconfImg}>
        全国から現役高専生や卒業生達が集まるイベント、高専カンファレンスlol。
        Webサイトとカンファレンスのデザインを担当した。
      </Portfolio>

      <Portfolio
        title='color-album'
        year='2016'
        url=''
        img={coloralbumImg}>
        写真を投稿すると自動で色をタグ付けしてくれる。
        <a href='https://twitter.com/Project_FUNA/status/775293511826485249'>Project FUNA RoRコンテスト</a> 最優秀賞
      </Portfolio>

      <Portfolio
        title='難読漢字くいず'
        year='2017'
        url='https://yamasy.info/can-you-read'
        img={canyoureadImg}>
        たてよこWebアワード応募作品。デザインのできる友達に手伝ってもらった。CSSで縦書きって難しい！
      </Portfolio>

      <Portfolio
        title='Kosen14s'
        year='2017'
        url='https://github.com/kosen14s'
        img={kosen14sImg}>
        Kosen14sという2014年度高専入学者の集まりで、お話したり気が向いたらモノを作ったりしている。
        <a href='https://github.com/kosen14s/emoji_uploader'>emoji_uploader</a>（Slackに画像を投げたら勝手にemojiにしてくれるやつ）が便利でお気に入り。
      </Portfolio>

      <Portfolio
        title='fulltan'
        year='2018'
        url='https://yamasy.info/fulltan'
        img={fulltanImg}>
        <GitHub project='fulltan' url='https://github.com/yamasy1549/fulltan' />
        明石高専本科生のための簡易単位チェックツール。Reactに慣れるために作った
      </Portfolio>

      <Portfolio
        title='プログラミング言語かるた'
        year='2018'
        url='https://yamasy.info/programming-karuta'
        img={prokarutaImg}>
        クラウドファンディング企画、かるた本体のデザインやWebサイトのコーディングなどをした。懇親会で盛り上がること間違いなし！
      </Portfolio>

      <Portfolio
        title='Gitコマンドかるた'
        year='2018'
        url='https://whiims.github.io/git-karuta.html'
        img={gitkarutaImg}>
        読み札やデザイン、付属するGit学習ブックの一部を担当した。Gitのコマンドをかるたで楽しく学習しよう！
      </Portfolio>

      <Portfolio
        title='抵抗カラーコードかるた'
        year='2019'
        url='https://whiims.github.io/resi-karuta.html'
        img={resikarutaImg}>
        頭がかるたになってきた。抵抗器のカラーコード表記をかるたで楽しく覚えよう！　カードゲーム制作完全に理解した
      </Portfolio>

      <Portfolio
        title='Vivliostyle 公式サイト'
        year='2020'
        url='https://vivliostyle.org/ja'
        img={vivliostyleImg}>
        Webの技術で出版物を作るプロジェクト。デザインとコーディングを担当した。
        これからもう少しコミットしていく予定
      </Portfolio>
    </ul>
  </Section>
)
