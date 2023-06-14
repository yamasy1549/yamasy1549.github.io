import React from 'react'

import Section from './Section.jsx'
import Paper   from './Paper.jsx'
import styles  from './Research.css'

export default () => (

  <Section id='research'>
    <ul className={styles.interviews}>
      <Paper
        journal='言語処理学会第29回年次大会'
        author='山下紗苗, 東中竜一郎'
        year='2023'
        url='https://www.anlp.jp/proceedings/annual_meeting/2023/pdf_dir/H5-3.pdf'>
        対話形式の対話要約の提案とその特徴の明確化
      </Paper>

      <Paper
        journal='13th International Workshop on Spoken Dialogue Systems Technology'
        author='Sanae Yamashita, Ryuichiro Higashinaka'
        year='2023'
        url=''>
        Clarifying characteristics of dialogue summary in dialogue format
      </Paper>

      <Paper
        journal='2nd Conference of the Asia-Pacific Chapter of the Association for Computational Linguistics and the 12th International Joint Conference on Natural Language Processing: Student Research Workshop'
        author='Sanae Yamashita, Ryuichiro Higashinaka'
        year='2022'
        url='https://aclanthology.org/2022.aacl-srw.4/'>
        Optimal Summaries for Enabling a Smooth Handover in Chat-Oriented Dialogue
      </Paper>

      <Paper
        journal='13th Language Resources and Evaluation Conference'
        author='Sanae Yamashita, Ryuichiro Higashinaka'
        year='2022'
        url='http://www.lrec-conf.org/proceedings/lrec2022/pdf/2022.lrec-1.432.pdf'>
        Data Collection for Empirically Determining the Necessary Information for Smooth Handover in Dialogue
      </Paper>

      <Paper
        journal='言語処理学会第28回年次大会'
        author='山下紗苗, 東中竜一郎'
        year='2022'
        url='https://www.anlp.jp/proceedings/annual_meeting/2022/pdf_dir/B4-3.pdf'>
        対話介入実験による対話の引き継ぎに有用な情報の調査
      </Paper>

      <Paper
        journal='第93回言語・音声理解と対話処理研究会'
        author='山下紗苗, 東中竜一郎'
        year='2021'
        url='https://www.jstage.jst.go.jp/article/jsaislud/93/0/93_86/_article/-char/ja/'>
        雑談に介入する際に必要な対話要約の調査
      </Paper>

      <Paper
        journal='人工知能学会第35回全国大会'
        author='山下紗苗, 奥村紀之'
        year='2021'
        url='https://www.jstage.jst.go.jp/article/pjsai/JSAI2021/0/JSAI2021_4E2OS11b04/_pdf'>
        性格情報を反映した発話文生成
      </Paper>

      <Paper
        journal='第7回自然言語処理シンポジウム'
        author='山下紗苗, 奥村紀之'
        year='2020'
        url='https://www.ieice.org/ken/paper/20201202JCBw/'>
        区切りのない雑文における文単位への分割
      </Paper>

      <Paper
        journal='言語処理学会第26回年次大会'
        author='那須川哲哉, 上條浩一, 榎美紀, 鈴木祥子, 山下紗苗, 上泰, 権藤恭之, 北村英哉, 尾崎由佳'
        year='2020'
        url='https://www.anlp.jp/proceedings/annual_meeting/2020/pdf_dir/P6-32.pdf'>
        テキストから推定される筆者の性格特性情報の活用の試みと考察
      </Paper>

      <Paper
        journal='言語処理学会第26回年次大会'
        author='山下紗苗, 小比田涼介'
        year='2020'
        url='https://www.anlp.jp/proceedings/annual_meeting/2020/pdf_dir/P4-2.pdf'>
        視覚情報を活用したテキストマイニング辞書構築システムの提案
      </Paper>

      <Paper
        journal='11th International Joint Conference on Knowledge Discovery, Knowledge Engineering and Knowledge Management'
        author='Sanae Yamashita, Yasushi Kami, Noriyuki Okumura'
        year='2019'
        url='http://www.scitepress.org/DigitalLibrary/Link.aspx?doi=10.5220/0008366303830390'>
        A Classification Method for Japanese Sentences based on the Difficulty Level of Emotion Estimation
      </Paper>

      <Paper
        journal='人工知能学会第33回全国大会'
        author='山下紗苗, 上泰, 奥村紀之'
        year='2019'
        url='https://www.jstage.jst.go.jp/article/pjsai/JSAI2019/0/JSAI2019_4M3J903/_pdf/-char/ja'>
        日本語文章からの感情推定難易度判定
      </Paper>

      <Paper
        journal='言語処理学会第25回年次大会'
        author='山下紗苗, 上泰, 奥村紀之'
        year='2019'
        url='https://www.anlp.jp/proceedings/annual_meeting/2019/pdf_dir/P8-15.pdf'>
        品詞情報とルールベースによる否定表現有無の判定
      </Paper>

      <Paper
        journal='第13回テキストアナリティクス・シンポジウム'
        author='山下紗苗, 上泰, 加藤恵梨, 酒井健, 奥村紀之'
        year='2018'
        url='https://www.ieice.org/ken/paper/20180906i1G8/'>
        人手による感情ラベル付けにおける応答時間に着目した感情推定難易度の評価（電子情報通信学会言語理解とコミュニケーション研究会学生研究賞）
      </Paper>
    </ul>
  </Section>
)
