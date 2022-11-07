function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background("#a8dadc");
  textSize(20)
 text("x:"+mouseX+"  y:"+mouseY,50,50)//50,50的位置
//頭髮
 fill(0) 
	arc(643,320,322,401,QUARTER_PI+HALF_PI,QUARTER_PI,OPEN)
 
 //臉
 strokeWeight(5)
 fill("#fefae0")
 ellipse(650,300,200)

//瀏海
fill(0)
 arc(600,205,141,83,PI+QUARTER_PI+HALF_PI+QUARTER_PI/3,QUARTER_PI+HALF_PI,CHORD)
	arc(693,219,60,40,QUARTER_PI,PI+QUARTER_PI,CHORD)

 //左眼
 strokeWeight(3)
 noFill()
 beginShape();
 curveVertex(568, 286)
 curveVertex(573, 275)
 curveVertex(573, 279)
 curveVertex(580, 270)
 curveVertex(600, 272)
 curveVertex(616, 289)
 curveVertex(573, 275)
 endShape();

 //右眼
 strokeWeight(3)
 beginShape();
 curveVertex(679, 290)
 curveVertex(671, 287)
 curveVertex(683, 273)
 curveVertex(701, 273)
 curveVertex(711, 279)
 curveVertex(718, 285)
 endShape();

//鼻子
 strokeWeight(5);
 beginShape();
 vertex(643,304)
 vertex(632,311)
 vertex(644,316)
 endShape();

 //左腮紅
 strokeWeight(3);
 fill("#f28482")
 beginShape();
 vertex(570,328)
 vertex(580,316)
 vertex(582,327)
 vertex(589,315)
 vertex(596,324)
 endShape();
 //右腮紅
 strokeWeight(3);
 fill("#f28482")
 beginShape();
 vertex(707,319)
 vertex(717,309)
 vertex(718,309)
 vertex(716,319)
 vertex(728,310)
 vertex(730,323)
 endShape();

 //嘴
 strokeWeight(5);
 fill("#ef233c")
 beginShape();
 vertex(622,343)
 vertex(656,345)
 vertex(649,364)
 vertex(622,343)
	endShape();
}
