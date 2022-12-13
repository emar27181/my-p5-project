# 注意点

- <font color="Red">※このプロジェクトは**個人用**にp5.jsの勉強を進めるために作成したものです</font>
- **index.htmlの位置を変える場合**は、`$ npm run dev` で呼び出されるパスが変化してしまうので容易に変更しないこと(p.s package.jsonにはコメントが通常できない)

<br>

# p5.jsの仕様

- p5.jsは1秒間に60フレームの更新がp.draw関数内で実行される
  - x++などを記述すると1フレームごとにインクリメントされるためアニメーションを実現できる
  - 逆にfor文などでx++などで呼び出すと一気に静止画を描画することができる

<br>

# 使用方法(仮)

- bash上で`$ npm run build` の入力でbuild(ファイルの再読み込み)
- bash上で`$ npm run dev` の入力でブラウザの立ち上げ
- ブラウザ上でF12を押し、consoleを表示

<br>

# バグ(疑問点/改善点)
- drawLoading.jsが読み込めていない
  - jsファイルはtsの記法に変換する必要あり？

- ~~scriptタグの順番を入れ替えてもすぐにブラウザ上にすぐに反映されない~~
  - <font color="Orange">新たなtsファイルを読み込む度に.parcel-cacheを消してbuildしなおすことで反映される</font>

- 名前の変更を行うとブラウザを立ち上げる際にエラーが発生してしまう
  - 現時点で名前の変更をすることができない
    - ~~もしかしたら上のbuildを試したらできる？？~~
      - .parcel-cache、node_modules、distのいずれを消してbuildしなおしても名前の変更を反映出来なかった

- point関数がうまく機能していなさそう？
  - drawSinWave.jsでも不具合(?)確認

<br>

# アイデア案
## ゲーム系
- ブロック崩し
  - HPがあって当たるたびに減っていく
  - HPの周波数(?)の音が鳴る

## 幾何学系(?)
- ストリング
  - 振り子
- 回転体
  - ろくろ

## 数学系
- 数式を色として表現する

<br>

- フィボナッチ数
  - 黄金長方形
  - フィボナッチ数なら進路を変えて広がっていく直線
- 素数
  - 素数フレーム進んだら進路を90°右回転する
    - アニメーション(徐々に描画)
  - 素数の分布表
    - イラスト(一瞬で描画)
  - 乱数
    - 曲がるタイミングも向きもランダムに描画させる？
    - ランダムではあるが制約はあって、円の外には絶対描画しないとか？
  - 円周率

## 音楽系
- 周波数帯で変動？

## 色彩系
- 個人的に好きな色をランダムに生成?
  - 配列に好きな色の保存
  - 普段から好きな色のストックとその分類をしておく？
- 特定のイラストを入力して、出現頻度の高い色をキャンバスにぶつけていく
- 色と音を関連付ける

## 奇想天外系(?)
- プログラムのインデントや見た目事態がアートになっている
  - 楽譜アートみたいなやつのイメージ？
  - フォーマッタにかけたら死んじゃいそう()
- 写真を読み込み、その写真をある規則に基づいて加工編集する


<br>

# TODOリスト
- 実行するTSファイルをブラウザ上で切り替えできるように(ルーティング)
  - そもそもこの環境でルーティングはできる？
  - express routingしか知らない...
  - ルーティング構造(?)でジャンル分けやオプション分けをできるようにしたい
- <font color="red">現在の状態だとconsoleがぐちゃぐちゃでデバックしにくい...</font>
  - tsファイル一つごとにブラウザ一つの対応関係を作る？
  - 特定のtsファイルの実行のconsoleが見たいだけだったら、
- サイトをCSSを用いてもっとおしゃれに
- git上でCI(Lint, Test)を走らせてより安全に設計したい
- <font color="red">生成された画像を保存できるように</font>
- READMEでデモができるように(画像貼り付け？)
- <font color="orange">停止ボタンで生成を止められるように</font>
- <font color="orange">描画の説明文の表示</font>
  - scriptタグをbodyの中に入れれば解決？？
- 色の組み合わせや出力サイズを標準入力(メニューバー)から選択出来たら良さそう
- いずれはAIを取り込みたい
  - pythonじゃないと簡単には導入できなそうな希ガス
  - どの段階で取り込む？？
  - AIの感性に筆を握らせてみたい？？
  - 画像生成におけるモザイク画像の生成自体は現時点で実現できそう
- いずれは外部公開を目指す？(公開サーバーを立てる練習?)
- <font color="red">build時間が5秒~、ブラウザ表示までの時間が7秒~かかってしまう</font>
  - ~~読み込むtsファイルが増えてきたから？~~
    - <font color="orange">buildファイルの蓄積が原因かも</font>
      - ノートPCだとbuild時間が短く、ファイルの保存に応じてブラウザが更新されたのを確認
  - 1ファイルだけbuildやファイルを更新したらすぐにブラウザに反映するようにしたい
    - 以前は出来ていた気がするが、何故か突然できなくなった


<br>

# DOINGリスト
## 

<br>

# 制作物紹介(?)
## drawLine.ts
- 素数フレーム進んだら進路を90°右回転する
- ~~switch文がうまく動作していない~~
- <font color="orange">囲われた場所が塗りつぶされていく仕様を追加しても面白いかも</font>
- div=1にすると電気基盤っぽくて綺麗
- 標準入力からdivの値を受け取れるようにしたら良さそう
- 色を基盤っぽくしたらもっと良さそう？
## drawTest.ts
- 中心からランダムカラーが広がっていく
- 名前変更ができっません！！！
  - drawRandomColor.tsに直したい！！！！

## drawRandomDot
- モンテカルロ法による円周率の近似値の測定
- 測定値がπに近づいていくグラフを記録として残したい
  - 近似値を保存している変数の`nearlyPi`はファイル間を行き来出来る？？
    - スコープの範囲の問題(?)

<br>

# 参考サイト
- [VS Code & TypeScriptとp5.jsで始めるモダンなクリエイティブコーディング入門](https://ics.media/entry/210129/)
- [p5.jsで動くゲーム風読み込み画面作ってみた](https://techblog.gmo-ap.jp/2021/12/24/game_load/)
