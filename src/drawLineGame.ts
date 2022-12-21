import p5 from "p5";

const sketch = (p: p5) => {

  //色の指定

  const colorBackGround = ("#000000");
  const color1 = p.color("#ffffff"); //描画色1(白)

  /** 初期化処理 */
  p.setup = () => {
    //デフォルト値(?)一覧
    //p.windowWidth: 464
    //p.windowHeight: 464
    //p.width: 464
    //p.height: 648
    p.createCanvas(p.windowWidth, p.windowHeight); //キャンバスの作成
    p.background(colorBackGround); // 背景色を設定(黒)
    //p.background("#ffffff"); // 背景色を設定(白)
    p.noStroke(); // 線なし（塗りつぶしのみ）に設定
  };

  let ballSize = 1;
  let v = 1;
  let x = 10, y = 0, dx = v / 2, dy = v;

  /** フレームごとの描画処理 */
  p.draw = () => {
    //WASD操作
    if (p.keyIsPressed) {
      if (p.key === 'W' || p.key === 'w') { dx = 0; dy = -v; }
      else if (p.key === 'A' || p.key === 'a') { dx = -v; dy = 0; }
      else if (p.key === 'S' || p.key === 's') { dx = 0; dy = v; }
      else if (p.key === 'D' || p.key === 'd') { dx = v; dy = 0; }
    }

    if (x > p.width || x < 0) {
      dx = -dx;
    }
    else if (y > p.height || y < 0) {
      dy = -dy;
    }


    //一定確率で進路変更(未実装)
    let random10 = p.random(10);
    let random4 = Math.round(p.random(4));
    if (random10 <= 2) { //20%の確率で実行
      //direction = Math.floor(random4); //進路の変更
      /*
      switch (random4) {
        case 0:
          dx = 0; dy = -v;
        case 1:
          dx = -v; dy = 0;
        case 2:
          dx = 0; dy = v;
        case 3:
          dx = v; dy = 0;
      }
      */
    }

    x += dx;
    y += dy;

    //次の座標が通過済みだった場合反射
    //背景は黒なので、通ってないと(0,0,0,255)がその点に入っている
    let nextColor = p.get(x + dx, y + dy);

    //if (nextColor != (0, 0, 0, 255)) { v = -v;}
   //if (nextColor != colorBackGround) { }
   if (nextColor[0]!=0){
      v = -v;
   }

    p.fill(color1); // 塗り色の設定
    p.ellipse(x, y, ballSize);

    //データ表示バーの描画

    p.fill("#cccccc");
    p.rect(0, p.height - 10, p.width, p.height);
    p.fill(colorBackGround);
    //p.text("(" + Math.floor(x) + ", " + Math.floor(y) + ")", 0, p.height);
    //p.text("(" + Math.floor(x) + ", " + Math.floor(y) + ") p.width: " + p.width + ", p.windowWidth: " + p.windowWidth, 0, p.height);
    p.text("nextColor: " + nextColor[0], 0, p.height);
  };
}

new p5(sketch);