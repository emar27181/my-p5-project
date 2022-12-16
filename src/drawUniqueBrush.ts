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
  const blushSize = 20;
  let blushMode = 0;

  /** フレームごとの描画処理 */
  p.draw = () => {
    p.fill("ffffff");

    //ランダムカラーの生成と宣言
    var color = (Math.random() * 0xFFFFFF | 0).toString(16);
    var randomColor = "#" + ("000000" + color).slice(-6);
    var colorRandom = p.color(randomColor);
    var mul = 10;

    //ブラシの描画
    if (p.mouseIsPressed) {
      switch (blushMode) {
        case 0: //消しゴムモード
          p.fill("#000000");
          p.ellipse(p.mouseX, p.mouseY, 30);
          break;
        case 1: //ブラシモード
          //xRand: -(blushSize/2)~blushSize/2までのランダムな整数
          let xRand = Math.floor(p.random(blushSize)) - blushSize / 2;
          let yRand = Math.floor(p.random(blushSize)) - blushSize / 2;
          x = p.mouseX + xRand;
          y = p.mouseY + yRand;

          p.fill(colorRandom);
          p.ellipse(x, y, mul * Math.random(), mul*Math.random());
          break;

        default:
          break;
      }
    }

    //モード変更
    if (p.keyIsPressed) {
      if (p.key === 'e') { blushMode = 0; } //消しゴムモード
      else if (p.key === 'b') { blushMode = 1; } //ブラシモード
    }


    //p.rect(0, p.height-10, 0, p.height);
    p.fill("#cccccc");
    p.rect(0, p.height - 10, p.width, p.height);
    p.fill("#000000");
    p.text("(" + Math.floor(p.mouseX) + ", " + Math.floor(p.mouseY) + "), mode: " + blushMode, 0, p.height);
  };
}

new p5(sketch);