var myImage;

function preload(){
    
    myImage = loadImage("images/pineapple.jpg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
    myImage.filter("blur",10);
}

function draw() {
    imageMode(CENTER);
    image(myImage, width/2, height/2,windowWidth, windowHeight);
    background(255, 216, 102,100);
    fill(91, 192, 235);
    
    translate(0,-height/20);
    
    textFont('Slackey');
    textSize(height/3);
    textAlign(CENTER);
    text(hour(),width/2,height/3);
    text(minute(),width/2,height/3*2);
    text(second(),width/2,height);
    
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}