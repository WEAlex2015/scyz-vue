var CvsWaterWave = function(options) {
  this.canvas = options.canvas;
  this.range = options.range;
  this.strokeStyle = options.strokeStyle || '#1080d0';
  this.fillStyle = options.fillStyle || '#1c86d1';
  this.textStyle = options.textStyle || '#ffffff';
  this.canvas.width = this.width = options.width || 60;
  this.canvas.height = this.height = options.height || 60;
  this.ctx = this.canvas.getContext('2d');
  this.ctx.lineWidth = this.lineWidth = 1;

  this.nowRange = 0; //用于做一个临时的range
  this.speed = 0.15; //波浪速度，数越大速度越快
  this.xOffset = 0;  //波浪x偏移量
  
  this.IsdrawCircled = false;
}

//画圈函数
CvsWaterWave.prototype.drawCircle = function() {
  var ctx = this.ctx;
  var mH = this.height;
  var r = mH / 2; //圆心
  var cR = r - 16 * this.lineWidth; //圆半径

  ctx.beginPath();
  ctx.strokeStyle = this.strokeStyle;
  ctx.arc(r, r, cR+5, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(r, r, cR, 0, 2 * Math.PI);
  ctx.clip();
}

//画sin 曲线函数
CvsWaterWave.prototype.drawSin = function(xOffset) {
  var ctx = this.ctx;
  var waveWidth = 0.010 ; //波浪宽度,数越小越宽 
  var waveHeight = 3; //波浪高度,数越大越高
  var axisLength = this.width; //轴长
  var mH = this.height;
  var sX = 0;

  ctx.save();

  var points=[]; //用于存放绘制Sin曲线的点

  ctx.beginPath();
  //在整个轴长上取点
  for (var x = sX; x < sX + axisLength; x += 20 / axisLength) {
    //此处坐标(x,y)的取点，依靠公式 “振幅高*sin(x*振幅宽 + 振幅偏移量)”
    var y = -Math.sin((sX + x) * waveWidth + xOffset);

    var dY = mH * (1 - this.nowRange / 100 );

    points.push([x, dY + y * waveHeight]);
    ctx.lineTo(x, dY + y * waveHeight);  
  }

 //封闭路径
 ctx.lineTo(axisLength, mH);
 ctx.lineTo(sX, mH);
 ctx.lineTo(points[0][0],points[0][1]);
 ctx.fillStyle = this.fillStyle;
 ctx.fill();

 ctx.restore();
};

//写百分比文本函数
CvsWaterWave.prototype.drawText = function(){
  var ctx = this.ctx;
  var mH = this.height;
  var r = mH / 2; //圆心
  var cR = r - 10 * this.lineWidth; //圆半径

  ctx.save();

  var size = 0.4 * cR;
  ctx.font = size + 'px Microsoft Yahei';
  ctx.textAlign = 'center';
  ctx.fillStyle = this.textStyle;
  ctx.fillText(~~this.nowRange + '%', r, r + size / 2);

  ctx.restore();
};

CvsWaterWave.prototype.render = function() {
  var ctx = this.ctx;
  var mW = this.width;
  var mH = this.height;

  ctx.clearRect(0, 0, mW, mH);

  //var rangeValue = this.range.value;
  var rangeValue = this.range;

  if (this.IsdrawCircled == false) {
    this.drawCircle(); 
  }

  if (this.nowRange <= rangeValue) {
    var tmp = 1;
    this.nowRange += tmp;
  }

  if (this.nowRange > rangeValue) {
    var tmp = 1;
    this.nowRange -= tmp;
  }

  this.drawSin(this.xOffset);
  // this.drawText(); 

  this.xOffset += this.speed;
  requestAnimationFrame(this.render.bind(this));
}

