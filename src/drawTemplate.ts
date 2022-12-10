import p5 from "p5";

const sketch = (p: p5) => {

  //色の指定
  const color1 = p.color("#ffffff"); //描画色1(白)
  const color2 = p.color("#000000"); //描画色2(黒)
  let color1amount = 1; // 描画色1の強さ

  /** 初期化処理 */
  p.setup = () => {
    //p.windowWidth: 464
    //p.windowHeight: 464
    //p.width: 464
    //p.height: 648
    p.createCanvas(p.windowWidth, p.windowHeight); //キャンバスの作成
    p.background("#000000"); // 背景色を設定(黒)
    p.noStroke(); // 線なし（塗りつぶしのみ）に設定
  };

  /** フレームごとの描画処理 */
  p.draw = () => {
    p.fill(p.lerpColor(color2, color1, color1amount)); // 塗り色の設定
    p.ellipse(0, 0, 100, 100); // 楕円の描画(左上)
    p.ellipse(p.width / 2, p.height / 2, 100, 100); // 楕円の描画(中央)
    p.ellipse(p.width, p.height, 100, 100); // 楕円の描画(右下)
  };
}

new p5(sketch);