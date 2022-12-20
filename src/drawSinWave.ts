import p5 from "p5";

const sketch = (p: p5) => {

    //色の指定
    const color1 = p.color("#ffffff"); //描画色1(白)
    const color2 = p.color("#000000"); //描画色2(黒)
    let color1amount = 1; // 描画色1の強さ

    /** 初期化処理 */
    //p.windowWidth: 464
    //p.windowHeight: 464
    //p.width: 464
    //p.height: 648
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight); //キャンバスの作成
        p.background("#000000"); // 背景色を設定(黒)
        p.noStroke(); // 線なし（塗りつぶしのみ）に設定
    };


    //direction: 進路(0-> 右進行, 1 -> 左進行)
    //amplitude: 振幅
    let x = 0;
    let direction = 0;
    let amplitude = 50;
    let isDotMode = true;

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

        p.fill(p.lerpColor(color2, color1, color1amount)); // 塗り色の設定

        //進路の決定
        //右端の場合
        if (x == p.width) {
            direction = 1;
            amplitude += 50;
        }
        //左端の場合
        if (x == 0) {
            direction = 0;
            amplitude += 50;
        }

        //打点
        //右進行の場合
        if (direction == 0) {
            x++;
            let radian = p.TWO_PI / 150 * x;
            let y = amplitude * p.sin(radian);
            p.ellipse(x, y + p.height / 2, 1, 1); // 点の描画
            p.ellipse(x, -y + p.height / 2, 1, 1); // 点の描画
        }
        //左進行の場合
        else if (direction == 1) {
            x--;
            let radian = p.TWO_PI / 150 * x;
            let y = amplitude * p.sin(radian);
            p.ellipse(x, y + p.height / 2, 1, 1); // 点の描画
            p.ellipse(x, -y + p.height / 2, 1, 1); // 点の描画
        }

    };
}

new p5(sketch);