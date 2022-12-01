※このプロジェクトは個人用にp5.jsの勉強を進めるために作成したものです。

●注意点
・index.htmlの位置を変える場合は、$ npm run dev で呼び出されるパスが変化してしまうので容易に変更しないこと(p.s package.jsonにはコメントが通常できない)

●疑問点
・scriptタグの順番を入れ替えてもすぐにブラウザ上にすぐに反映されない
→新たなtsファイルを読み込む度に.parcel-cacheを消してbuildしなおすことで反映される
・名前の変更を行うとブラウザを立ち上げる際にエラーが発生してしまう
→現時点で名前の変更をすることができない

●参考サイト
・https://ics.media/entry/210129/
・https://techblog.gmo-ap.jp/2021/12/24/game_load/