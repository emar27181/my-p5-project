import p5 from "p5";

const sketch = (p: p5) => {

  //色の指定
  const color1 = p.color("#ffffff"); //描画色1(白)
  const color2 = p.color("#000000"); //描画色2(黒)
  const yellow = p.color("#FFE011");
  let color1amount = 1; // 描画色1の強さ

  /** 初期化処理 */
  p.setup = () => {
    p.createCanvas(512, 512); //キャンバスの作成
    p.background("#000000"); // 背景色を設定(黒)
    p.noStroke(); // 線なし（塗りつぶしのみ）に設定
  };

  let InCircleDot = 0;
  let allDot = 0;

  /** フレームごとの描画処理 */
  p.draw = () => {
    const mul = 512;
    let x = mul * Math.random();
    let y = mul * Math.random();

    //モンテカルロ法によるπの近似値の測定
    let distance = Math.sqrt(x * x + y * y);
    allDot++;
    if(distance < 512){InCircleDot++;}
    let nearlyPi = 4 * InCircleDot / allDot;

    //確認用出力
    console.log("allDot: " + allDot);
    console.log("x = ", x);
    console.log("y = ", y);
    console.log("InCircleDot: " + InCircleDot);
    console.log("distance: " + distance);
    console.log("nearlyPi: " + nearlyPi);


    p.fill(p.lerpColor(color2, color1, color1amount)); // 塗り色の設定
    p.ellipse(x, y, 1, 1); // 楕円の描画(中央)
    p.fill(yellow); // 塗り色の設定
    p.ellipse(0, 0, 1024, 1024); // 円弧の描画
  };
}

new p5(sketch);