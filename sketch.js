var backgroundImage
var chotaBheem,chotaBheemImg

function preload(){
backgroundImage=loadImage("assets/background.jpg")
chotaBheemImg=loadImage("assets/chota bheem.png")
}
function setup(){
createCanvas(windowWidth,windowHeight)
chotaBheem=createSprite(250,height-150)
chotaBheem.addImage(chotaBheemImg)
chotaBheem.scale=2

}
function draw(){
background(backgroundImage)
drawSprites()
if (keyDown(RIGHT_ARROW)){
    chotaBheem.x+=20


}
}
