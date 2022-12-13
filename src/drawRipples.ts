import p5 from "p5";

const sketch = (p: p5) => {

  //色の指定


  const color1 = p.color("#ffffff"); //描画色1(白)
  const color2 = p.color("#000000"); //描画色2(黒)
  let color1amount = 1; // 描画色1の強さ

  /** 初期化処理 */
  p.setup = () => {
    //デフォルト値(?)一覧
    //p.windowWidth: 464
    //p.windowHeight: 464
    //p.width: 464
    //p.height: 648
    p.createCanvas(p.windowWidth, p.windowHeight); //キャンバスの作成
    p.background("#000000"); // 背景色を設定(白)
    p.noStroke(); // 線なし（塗りつぶしのみ）に設定
  };

  let x = 0, y = 0, r = 0;

  /** フレームごとの描画処理 */
  p.draw = () => {

    // p.fill("999999");
    // p.rect(0, p.height / 2 , p.width, p.height); 
    // p.text("x: " + p.str(p.mouseX) + ", y:" + p.str(p.mouseY), 0, p.height - 10); //表示すると色が張り付いてしまう

    r++;

    //p.fill(p.lerpColor(color2, color1, color1amount)); // 塗り色の設定
    //p.ellipse(x, y, r, r);
    p.fill("ffffff");
    p.ellipse(x, y, r-3, r-3);

    if (p.mouseIsPressed) {
      p.ellipse(p.mouseX, p.mouseY, 3);
      x = p.mouseX;
      y = p.mouseY;
      r = 0;
    }
  };
}

new p5(sketch);