import p5 from "p5";

const sketch = (p: p5) => {

    //色の指定
    const color1 = p.color("#ffffff"); //描画色1(白)
    const color2 = p.color("#000000"); //描画色2(黒)
    let color1amount = 1; // 描画色1の強さ

    /** 初期化処理 */
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight); //キャンバスの作成
        p.background("#000000"); // 背景色を設定(黒)
        p.noStroke(); // 線なし（塗りつぶしのみ）に設定
    };

    
    let x = 0;
    /** フレームごとの描画処理 */
    p.draw = () => {
        p.fill(p.lerpColor(color2, color1, color1amount)); // 塗り色の設定

        x++;
            let radian = p.TWO_PI / 150 * x; 
            let y = 100 * p.sin(radian);
            p.ellipse(x, -y + p.height / 2, 1, 1); // 楕円の描画(中央)

    };
}

new p5(sketch);