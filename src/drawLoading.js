var HEIGHT_SIZE = 600
var CENTER_WINDOW_WIDTH = WIDTH_SIZE / 2;
var CENTER_WINDOW_HEIGHT = HEIGHT_SIZE / 2;
var LOAD_TIME_RESET = 9
var NOW_LOADING = new Array("N", "O", "W", "L", "O", "A", "D", "I", "N", "G");
 
class Mark {
  constructor(x, y) {
    this.deleteCount = 60;
    this.x = x;
    this.y = y;
    this.w = 50;
    this.fadeout = 1.0;
  }
  addDeleteCount(){
    this.deleteCount--;
    this.fadeout -= 1 / 60;
    this.w += 10;
  }
}
 
var marks = new Array();
 
function setup() {
  translate(CENTER_WINDOW_WIDTH , CENTER_WINDOW_HEIGHT);
  createCanvas(WIDTH_SIZE, HEIGHT_SIZE);
  $("body").css("margin","0");
  displayCount = 0;
  loadCount = 0;
}
 
function draw() {
  translate(CENTER_WINDOW_WIDTH, CENTER_WINDOW_HEIGHT);
  background(50);
  loading(loadCount)
  displayMark();
  displayCount++;
  if(displayCount % 10 == 0) {
    if(loadCount > LOAD_TIME_RESET){
      loadCount = 0;
    } else {
      loadCount++;
    }
  }
}
 
function loading(loadCount) {
  textAlign(CENTER);
  textSize(30);
  noStroke();
  fill(255);
  var display_width = 200;
  var display_height = 290;
 
  for(var i = 0; i < 10; i++) {
    if(i == ((loadCount) % 10)) {
      text(NOW_LOADING[i], display_width + (i*30), display_height - 30)
    } else {
      text(NOW_LOADING[i], display_width + (i*30), display_height)
    }
  }
}
 
function displayMark(){
  translate(-CENTER_WINDOW_WIDTH, -CENTER_WINDOW_HEIGHT);
  for(var i = 0; marks[i] !== undefined ; i++) {
    mark = marks[i];
    if (mark.deleteCount == 0) {
      marks.splice(i,1);
      continue;
    }
    fill('rgba(255,255,255,' + mark.fadeout + ')');
    strokeWeight(0);
    circle(mark.x, mark.y, mark.w);
    mark.addDeleteCount();
  }
}
 
function mousePressed(){
  translate(-CENTER_WINDOW_WIDTH, -CENTER_WINDOW_HEIGHT);
  marks.push(new Mark(mouseX, mouseY));
}