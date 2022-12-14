import p5 from "p5";

const sketch = (p: p5) => {

  //色の指定
  const color1 = p.color("#ffffff"); //描画色1(白)
  const color2 = p.color("#000000"); //描画色2(黒)
  let color1amount = 1; // 描画色1の強さ
  let i = 0, x = 0, y = 0, direction = 0;
  let isPrime = false;

  /* 初期化処理 */
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight); //キャンバスの作成
    p.background("#000000"); // 背景色を設定(黒)
    p.noStroke(); // 線なし（塗りつぶしのみ）に設定
  };

  /* フレームごとの描画処理 */
  p.draw = () => {
    p.fill(p.lerpColor(color2, color1, color1amount)); // 塗り色の設定

    // 点の描画
    const div = 0.5;
    p.ellipse(p.width / 2 + x / div, p.height / 2 + y / div, 1, 1);

    //i: 割られる数
    //j: 割る数
    i++;



    if (p.keyIsPressed) {
      //進路不確定モード
      // direction++; 

      //WASDモード
      if(p.key === 'W' || p.key === 'w'){ direction = 3;}
      else if(p.key === 'A'|| p.key === 'a'){direction = 2;}
      else if(p.key === 'S'|| p.key === 's'){direction = 1;}
      else if(p.key === 'D'|| p.key === 'd'){direction = 0;}

      // 確認用出力
      /*
      console.log("i: " + i);
      console.log("direction: " + direction);
      console.log("direction % 4: " + direction % 4);
      */
    }

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