var boundary1,boundary2,boundary3,boundary4;
var p1,pImg,m1,mImg,n1,nImg,a1,aImg,A1,AImg,c1,cImg;
var hyphen,lineImg;
var ghost1,ghost2,ghost3,ghost4,Ghost1,Ghost2,Ghost3,Ghost4;

function preload(){
  aImg = loadImage("a2.png");
  cImg = loadImage("c2.png");
  mImg = loadImage("m2.png");
  nImg = loadImage("n2.png");
  pImg = loadImage("p2.png");
  lineImg = loadImage("line.jpg");
  boundaryImg=loadImage("line2.jpg");
  bImg=loadImage("line3.jpg");
  ghost1=loadImage("1.png");
  ghost2=loadImage("2.png");
  ghost3=loadImage("3.png");
  ghost4=loadImage("4.png");
}

function setup() {
  createCanvas(1400,600);
  
  Ghost1= createSprite(100,100,20,20);
  Ghost1.addImage(ghost1);
  Ghost1.scale=0.09;
  Ghost2= createSprite(250,100,20,20);
  Ghost2.addImage(ghost2);
  Ghost2.scale=0.03;
  Ghost3= createSprite(300,100,20,20);
  Ghost3.addImage(ghost3);
  Ghost3.scale=0.03;
  Ghost4= createSprite(350,100,20,20);
  Ghost4.addImage(ghost4);
  Ghost4.scale=0.03;
  boundary1 = createSprite(705,15,10,20);
  boundary1.addImage(boundaryImg);
 // boundary1.scale=0.4;
  boundary1.shapeColor = "red";
  boundary2 = createSprite(705,585,1300,20);
  boundary2.addImage(boundaryImg);
 // boundary2.shapeColor = "red";
  boundary3 = createSprite(20,300,20,500);
  boundary3.addImage(bImg);
  //boundary3.scale=0.4
  //boundary3.shapeColor = "red";
  boundary4 = createSprite(1385,300,20,500);
  boundary4.addImage(bImg);
  //boundary4.shapeColor = "red";
  //letter P
  p1 = createSprite(160,240,10,100);
  p1.addImage(pImg);
  p1.scale = 0.3;
  /*p1.shapeColor = "lightblue";
  p2 = createSprite(155,195,60,10);
  p2.shapeColor = "lightblue";
  p3 = createSprite(180,225,10,60);
  p3.shapeColor = "lightblue";
  p4 = createSprite(145,250,60,10);
  p4.shapeColor = "lightblue";*/
  //letter A 
  a1 = createSprite(330,240,10,100);
  a1.addImage(aImg);
  a1.scale = 0.3;
  /*a1.shapeColor = "lightblue";
  a2 = createSprite(255,195,60,10);
  a2.shapeColor = "lightblue";
  a3 = createSprite(285,240,10,100);
  a3.shapeColor = "lightblue";
  a4 = createSprite(255,245,60,10);
  a4.shapeColor = "lightblue";*/
  //letter C
  c1 = createSprite(520,240,10,100);
  c1.addImage(cImg);
  /*c1.shapeColor = "lightblue";
  c2 = createSprite(365,195,60,10);
  c2.shapeColor = "lightblue";
  c3 = createSprite(365,285,60,10);
  c3.shapeColor = "lightblue";*/
  //-
  hyphen = createSprite(680,240,70,10);
  //hyphen.shapeColor = "lightblue";
  hyphen.addImage(lineImg);
  hyphen.scale = 0.5;
  //letter M
  m1 = createSprite(850,235,10,100);
  m1.addImage(mImg);
  //m1.shapeColor = "lightblue";
  //letter A
  A1 = createSprite(1050,235,10,100)
  A1.addImage(aImg);
  A1.scale = 0.3;
  //letter N
  n1 = createSprite(1250,235,10,100);
  n1.addImage(nImg);
}

function draw() {
  background(0); 

  /*fill("lightblue");
  textSize(150);
  textStyle(BOLD);
  textFont("Bradley Hand ITC");
  text("P  A  C  -  M  A  N",150,325);*/

  textSize(20);
  fill(255);
  text(mouseX + "," + mouseY,100,100);

  drawSprites();
}