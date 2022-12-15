# 注意点

- <font color="Red">※このプロジェクトは**個人用**にp5.jsの勉強を進めるために作成したものです</font>
- **index.htmlのフォルダの位置を変える場合**は、`$ npm run dev` で呼び出されるパスが変化してしまうので容易に変更しないこと(p.s package.jsonにはコメントが通常できない)

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

## 幾何学系/自然現象系(?)
- ストリング
  - 振り子
- 回転体
  - ろくろ
  - 花びら
    - カラフル
- 波紋
  - ランダムな数点から波紋の生成
    - 交わると色の変化/合成
- 軌跡
  - 木の葉の落下


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
  - 直線の描画にノイズを乗せていく
- 円周率

## 音楽系
- 周波数帯で変動？
- 周波数帯ごとに色の設定、それぞれの波の描画

## 色彩系
- 個人的に好きな色をランダムに生成?
  - 配列に好きな色の保存
  - 普段から好きな色のストックとその分類をしておく？
- 特定のイラストを入力して、出現頻度の高い色をキャンバスにぶつけていく
- フレーム数やクリック時間などの偶然性のある数字を入力として色を生成
- 色と音を関連付ける

## AI系(?)
- 線や壁の回避、反射の自動化
- 得意な色や形などが異なるエージェント(?)を複数配置して絵の同時生成
- 構図や配置、全体のバランスなどの特徴を学習させてランダム性の中に規則性を作りたい

## ツール系
- キーボードで音楽+イラスト生成(DJのあれのイメージ？/)
- 特殊な筆の追加/合成/切替
- スクロール画面の実装
  - 隣のマスの色情報の取得は可能?

## 奇想天外系(?)
- プログラムのインデントや見た目事態がアートになっている
  - 楽譜アートみたいなやつのイメージ？
  - フォーマッタにかけたら死んじゃいそう()
- 写真を読み込み、その写真をある規則に基づいて加工編集する
- 偶然性のある描き方のできるキャンバスを偶然作成できる？
  - drawRipples.tsは偶然いい感じになった


<br>

# TODOリスト
- 実行するTSファイルをブラウザ上で切り替えできるように(ルーティング)
  - そもそもこの環境でルーティングはできる？
  - express routingしか知らない...
  - ルーティング構造(?)でジャンル分けやオプション分けをできるようにしたい
- <font color="red">現在の状態だとconsoleがぐちゃぐちゃでデバックしにくい...</font>
  - tsファイル一つごとにブラウザ一つの対応関係を作る？
  - 特定のtsファイルの実行のconsoleが見たいだけだったら、
- 自作メソッドをまとめたファイルを作成して、そこから呼び出せるようにしたい
- サイトをCSSを用いてもっとおしゃれに
- git上でCI(Lint, Test)を走らせてより安全に設計したい
- <font color="red">生成された画像を保存できるように</font>
  - 右クリックで手動の保存ならできる
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
      - デスクトップで`.parcel-cache`を削除したら少し早くなった？....
      - シャットダウンは相変わらず長い
  - 1ファイルだけbuildやファイルを更新したらすぐにブラウザに反映するようにしたい
    - 以前は出来ていた気がするが、何故か突然できなくなった
    - ノートPCだと何故かできている？
- 色の取得はできる？
  - 塗るたびに二重配列とかに入れておいてもいいけど、できれば特定のマスの色だけ取り出せたら便利 
- <font color="red">色々散らかりすぎ!!!</font>
  - consoleの整理
  - if文をメソッド化
    - せめてswich文??
  - ディレクトリ構造の整理
  - (routingの整理(?))

<br>

# DOINGリスト
## 

<br>

# 制作物紹介(?)

## drawLineReflect.ts
- 円内でランダムに線が描画される
  - 20%の確率で進路が変わる
    - 正確には少し違うけど...

## drawLineWASD.ts 
- キーボードのWASD操作で線の描画をコントロールできる

## drawRipples.ts
- クリックされるとそこから波紋(?)が広がっていく

## drawFibonacci.ts
- フィボナッチ数のフレームになると右へ進路を変更する

## drawRandomDot.ts
- モンテカルロ法による円周率の近似値の測定
- 測定値がπに近づいていくグラフを記録として残したい
  - 近似値を保存している変数の`nearlyPi`はファイル間を行き来出来る？？
    - スコープの範囲の問題(?)

## drawSinWave.ts
- 正弦波が左右へ進行し、端へ到達すると振幅が大きくなる

## drawSinCosWave.ts
- 正弦波と余弦波が左右へ進行し、端へ到達すると振幅が大きくなる

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


<br>

# 参考サイト
- [VS Code & TypeScriptとp5.jsで始めるモダンなクリエイティブコーディング入門](https://ics.media/entry/210129/)
- [p5.jsデモサイト](https://editor.p5js.org/)
- [プログラミングでお絵かきして遊ぶための50のアイディア](https://www.fal-works.jp/entry/creative-coding-50-ideas)

<br>

- [~~p5.jsで動くゲーム風読み込み画面作ってみた~~](https://techblog.gmo-ap.jp/2021/12/24/game_load/)
