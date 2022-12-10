import p5 from "p5";

const sketch = (p: p5) => {

  //色の指定
  const color1 = p.color("#ffffff"); //描画色1(白)
  const color2 = p.color("#000000"); //描画色2(黒)
  const yellow = p.color("#FFE011");
  let color1amount = 1; // 描画色1の強さ

  /** 初期化処理 */
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight); //キャンバスの作成
    console.log("p.windowWidth: ", p.windowHeight);
    console.log("p.windowHeight: ", p.windowHeight);
    console.log("p.width", p.height);
    console.log("p.width", p.width);

    p.background("#000000"); // 背景色を設定(黒)
    p.noStroke(); // 線なし（塗りつぶしのみ）に設定
  };

  /** フレームごとの描画処理 */
  p.draw = () => {
    const mul = 1000;
    let x = mul * Math.random();
    let y = mul * Math.random();
    console.log("x = ", x);
    console.log("y = ", y);
    p.fill(p.lerpColor(color2, color1, color1amount)); // 塗り色の設定
    p.ellipse(x, y, 10, 10); // 楕円の描画(中央)
  };
}

new p5(sketch);