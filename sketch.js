var fundo
var menino 
var invisibleground
var Quadrado
function preload() {
    fundo = loadImage("fundo.jpg");
}

function setup() {
    // cria espaço no jogo

    createCanvas(windowWidth, windowHeight);
console.log(createCanvas)
    //menino = createSprites()
    invisibleground = createSprite(0,windowHeight,width,20);
   // Quadrado = createSprite()
}

function draw() {
    //fundo
    background(fundo);

drawSprites();
}