// 素数フレーム進んだら進路を90°右回転するプログラム
import p5 from "p5";

const sketch = (p: p5) => {

  //色の指定
  const color1 = p.color("#ffffff"); //描画色1(白)
  const color2 = p.color("#000000"); //描画色2(黒)
  let color1amount = 1; // 描画色1の強さ
  let i = 0, x = 0, y = 0;

  /* 初期化処理 */
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight); //キャンバスの作成
    p.background("#000000"); // 背景色を設定(黒)
    p.noStroke(); // 線なし（塗りつぶしのみ）に設定
  };

  /* フレームごとの描画処理 */
  p.draw = () => {
    p.fill(p.lerpColor(color2, color1, color1amount)); // 塗り色の設定

    console.log("i:     " + i);
    console.log("i % 4: " + i % 4);

    // 点の描画
    p.ellipse(p.width / 2 + x, p.height / 2 + y, 3, 3);

    i++;

    switch (i % 4) {
      case 0:
        x++;
        y++;
      case 1:
        x--;
        y++;
      case 2:
        x--;
        y--;
      case 3:
        x++;
        y--;
      default:
        x -= 0.5;
        y -= 0.5;
      //console.log("this is default");
    }


  };
}

new p5(sketch);