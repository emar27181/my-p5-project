import p5 from "p5";

const sketch = (p: p5) => {

  //色の指定
  const color1 = p.color("#ffffff"); //描画色1(白)
  const color2 = p.color("#000000"); //描画色2(黒)
  let color1amount = 1; // 描画色1の強さ

  let i = 0, x = 0, y = 0, direction = 0, frameCount = 0;
  let a = 1, b = 1;
  const div = 5;


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

  /** フレームごとの描画処理 */
  p.draw = () => {
    frameCount++;
    p.fill(p.lerpColor(color2, color1, color1amount)); // 塗り色の設定
    p.ellipse(p.width / 2 + x / div, p.height / 2 + y / div, 1, 1); // 楕円の描画(中央)

    //フィボナッチ数の判定
    if (frameCount == 1) {
      direction++;
    }
    else if (frameCount == (a + b)) {
      //フィボナッチ数の更新
      //a: a_n
      //b: a_n+1
      let tmp = a;
      a = b;
      b = tmp + a;

      direction++;
      // 確認用出力
      console.log("frameCount: " + frameCount);
      console.log("direction: " + direction);
      console.log("direction % 4: " + direction % 4);
    }
    else { }


    //次に打つ点の制御
    switch (direction % 4) {
      case 0:
        x++;
        break;
      case 1:
        y++;
        break;
      case 2:
        x--;
        break;
      case 3:
        y--;
        break;
      default:
        console.log("this is default");
        break;
    }
  };
}

new p5(sketch);