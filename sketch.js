  


var canvas, backgroundImage;
var back_Img
var questions;

var question, contestant, quiz;
var playerCount;
var gta ;
var gta1;
var sound;
function preload() {
back_Img = loadImage("back.jpg");
gta = loadImage("1111.png");
sound = loadSound("gta5.mp3");
}
function setup(){
  canvas = createCanvas(1200,500);
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();
gta1 = createSprite(130,390,40,40);
gta1.addImage(gta);
gta1.scale=0.4;
  
}


function draw(){
  background(back_Img);
  drawSprites();
}
