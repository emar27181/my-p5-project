import p5 from "p5";

const sketch = (p: p5) => {

  //色の指定
  const color1 = p.color("#ffffff"); //描画色1(白)
  const color2 = p.color("#000000"); //描画色2(黒)
  let color1amount = 1; // 描画色1の強さ

  /** 初期化処理 */
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight); //キャンバスの作成
    p.background("#000000"); // 背景色を設定(黒)
    p.noStroke(); // 線なし（塗りつぶしのみ）に設定
    p.angleMode(p.DEGREES); // 回転の単位を弧度から角度に変更
  };

  /** フレームごとの描画処理 */
  p.draw = () => {
    p.fill(p.lerpColor(color2, color1, color1amount)); // 塗り色を設定
    p.translate(p.width / 2, p.height / 2); // 画面中央を原点に
    p.rotate(p.frameCount * 45);  // フレーム数分（1フレームあたり90度）回転させる
    p.ellipse(p.frameCount / 2, 0, p.frameCount, p.frameCount / 3); // 楕円を描く
    color1amount *= 0.995; // 「描画色1の強さ」を少し弱くする
  };
}

new p5(sketch);