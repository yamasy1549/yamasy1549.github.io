import React from 'react'

import Section   from './Section.jsx'
import Interview from './Interview.jsx'
import styles    from './Interviews.css'

export default () => (
  <Section id='interviews'>
    <ul className={styles.interviews}>
      <Interview media='第13回 テキストアナリティクス・シンポジウム（山下紗苗・上泰・加藤恵梨・酒井健・奥村紀之）' url='https://www.ieice.org/ken/paper/20180906i1G8/'>
        人手による感情ラベル付けにおける応答時間に着目した感情推定難易度の評価 (2018)（電子情報通信学会言語理解とコミュニケーション研究会学生研究賞）
      </Interview>

      <Interview media='言語処理学会第25回年次大会（山下紗苗・上泰・奥村紀之）' url='https://www.anlp.jp/proceedings/annual_meeting/2019/pdf_dir/P8-15.pdf'>
        品詞情報とルールベースによる否定表現有無の判定 (2019)
      </Interview>

      <Interview media='人工知能学会第33回全国大会（山下紗苗・上泰・奥村紀之）' url='https://www.jstage.jst.go.jp/article/pjsai/JSAI2019/0/JSAI2019_4M3J903/_pdf/-char/ja'>
        日本語文章からの感情推定難易度判定 (2019)
      </Interview>

      <Interview media='KMIS2019（Sanae Yamashita, Yasushi Kami, Noriyuki Okumura）' url='http://www.scitepress.org/DigitalLibrary/Link.aspx?doi=10.5220/0008366303830390'>
        A Classification Method for Japanese Sentences based on the Difficulty Level of Emotion Estimation (2019)
      </Interview>

      <Interview media='言語処理学会第26回年次大会（山下紗苗・小比田涼介）' url='https://www.anlp.jp/proceedings/annual_meeting/2020/pdf_dir/P4-2.pdf'>
        視覚情報を活用したテキストマイニング辞書構築システムの提案 (2020)
      </Interview>

      <Interview media='言語処理学会第26回年次大会（那須川哲哉・上條浩一・榎美紀・鈴木祥子・山下紗苗・上泰・権藤恭之・北村英哉・尾崎由佳）' url='https://www.anlp.jp/proceedings/annual_meeting/2020/pdf_dir/P6-32.pdf'>
        テキストから推定される筆者の性格特性情報の活用の試みと考察 (2020)
      </Interview>
    </ul>
  </Section>
)
