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
    p.background("#000000"); // 背景色を設定(黒)
    p.noStroke(); // 線なし（塗りつぶしのみ）に設定

  };

  let isDotMode = true;
  let ballSize = 30;
  let x = 0, y = 0, dx = 10, dy = 10;

  /** フレームごとの描画処理 */
  p.draw = () => {
    if (isDotMode) {
      p.fill(0, 0, 0, 50);
      p.rect(0, 0, p.width, p.height);
    }

    if (p.keyIsPressed && p.key === "d") {
      if (isDotMode === false) { isDotMode = true; }
      else { isDotMode = false; }
    }

    x += dx;
    y += dy;

    if (x > p.width || x < 0) {
      dx = -dx;
    }
    else if (y > p.height || y < 0) {
      dy = -dy;
    }

    p.fill(p.lerpColor(color2, color1, color1amount)); // 塗り色の設定
    p.ellipse(x, y, ballSize);

    //データ表示バーの描画
    p.fill("#cccccc");
    p.rect(0, p.height - 10, p.width, p.height);
    p.fill("#000000");
    //p.text("(" + Math.floor(x) + ", " + Math.floor(y) + ")", 0, p.height);
    p.text("(" + Math.floor(x) + ", " + Math.floor(y) + ") p.width: " + p.width + ", p.windowWidth: " + p.windowWidth, 0, p.height);
  };
}

new p5(sketch);