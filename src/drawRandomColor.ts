import p5 from "p5";

const sketch = (p: p5) => {

  //色の指定
  //ランダムカラーの生成
  var color = (Math.random() * 0xFFFFFF | 0).toString(16);
  var randomColor = "#" + ("000000" + color).slice(-6);

  const color1 = p.color("#ffffff"); //描画色1(白)
  const color2 = p.color("#000000"); //描画色2(黒)
  let color1amount = 0; // 描画色1の強さ


  /** 初期化処理 */
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight); //キャンバスの作成
    p.background("#000000"); // 背景色を設定(黒)
    p.noStroke(); // 線なし（塗りつぶしのみ）に設定
    p.angleMode(p.DEGREES); // 回転の単位を弧度から角度に変更
    p.blendMode(p.LIGHTEST); // 合成モードを「LIGHTEST=明るく」に設定
  };

  /** フレームごとの描画処理 */
  p.draw = () => {
    //ランダムカラーの生成と宣言
    var color = (Math.random() * 0xFFFFFF | 0).toString(16);
    var randomColor = "#" + ("000000" + color).slice(-6);
    var colorRandom = p.color(randomColor);

    p.fill(p.lerpColor(colorRandom, color1, color1amount));
    p.translate(p.width / 2, p.height / 2); // 画面中央を原点に
    p.rotate(p.frameCount * 1);  // フレーム数分（1フレームあたり1度）回転
    p.ellipse(p.frameCount / 360, 0, p.frameCount, p.frameCount / 360); // 楕円を描く
    color1amount *= 0; // 「描画色1の強さ」を少し弱くする
  };
}

new p5(sketch);