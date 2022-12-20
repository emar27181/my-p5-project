import p5 from "p5";

const sketch = (p: p5) => {

  //色の指定
  const color1 = p.color("#ffffff"); //描画色1(白)
  const color2 = p.color("#000000"); //描画色2(黒)
  let color1amount = 1; // 描画色1の強さ
  let frameCount = 0, x = 0, y = 0, direction = 0;

  /** 初期化処理 */
  p.setup = () => {
    //デフォルト値(?)一覧
    //p.windowWidth: 464
    //p.windowHeight: 464
    //p.width: 464
    //p.height: 648
    p.createCanvas(128, 128); //キャンバスの作成
    p.background("#000000"); // 背景色を設定(黒)
    //p.background("#ffffff"); // 背景色を設定(白)
    p.noStroke(); // 線なし（塗りつぶしのみ）に設定
  };

  /** フレームごとの描画処理 */
  p.draw = () => {
    p.fill(p.lerpColor(color2, color1, color1amount)); // 塗り色の設定
    p.ellipse(x, y, 1, 1); // 楕円の描画(中央)


    //WASD操作
    if (p.keyIsPressed) {
      if (p.key === 'W' || p.key === 'w') { direction = 3; }
      else if (p.key === 'A' || p.key === 'a') { direction = 2; }
      else if (p.key === 'S' || p.key === 's') { direction = 1; }
      else if (p.key === 'D' || p.key === 'd') { direction = 0; }
    }

    //一定確率で進路変更
    let random10 = p.random(10);
    let random4 = p.random(4);
    if (random10 <= 2) {
      direction = Math.floor(random4);
    }
    //確認用出力
    console.log("random10: " + random10);
    console.log("random4: " + random4);

    // 壁の反射の判定(上下左右のみ)
    if (x === 0) {
      // 左端の場合
      direction = 0;
    }
    else if (y === 0) {
      //上端の場合
      direction = 1;
    }
    else if (x === p.width) {
      //右端の場合
      direction = 2;
    }
    else if (y === p.height) {
      //下端の場合
      direction = 3;
    }

    //次に打つ点の制御
    switch (direction % 4) {
      case 0:
        x++; //右方向
        break;
      case 1:
        y++; //下方向
        break;
      case 2:
        x--; //左方向
        break;
      case 3:
        y--; //上方向
        break;
      default:
        console.log("this is default");
        break;
    }

    //内接円の外側を黒く塗りつぶし
    //r: 内接円の半径
    let r = p.width / 2;
    p.fill("#000000"); //黒色に設定
    for (let i = 0; i < p.width; i++) {
      for (let j = 0; j < p.height; j++) {
        if (((i - p.width / 2) * (i - p.width / 2) +
          (j - p.height/2) * (j - p.height/2)) > r * r) {
          p.ellipse(i, j, 1, 1);
        }
      }
    }


  };
}

new p5(sketch);